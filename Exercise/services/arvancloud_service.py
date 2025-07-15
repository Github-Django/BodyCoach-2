# services/arvancloud_service.py
import base64
import logging
import time
from typing import Dict, Optional, BinaryIO, Any
import requests
from django.conf import settings


class ArvanCloudError(Exception):
    """Custom exception for ArvanCloud-specific errors"""
    pass


class ArvanCloudService:
    """
    Service class for interacting with ArvanCloud VOD API.
    Follows SOLID principles and Clean Architecture.
    """

    BASE_URL = "https://napi.arvancloud.ir/vod/2.0"
    CHUNK_SIZE = 1024 * 1024  # 1MB chunks for efficient upload
    RETRY_ATTEMPTS = 3
    RETRY_DELAY = 5  # seconds
    VALID_STATUSES = ['ready', 'complete', 'queue_download', 'processing',
                      'generating_thumbnail', 'converting', 'queue_convert',
                      'getsize', 'downloading']

    def __init__(self, api_key: str, channel_id: str):
        """Initialize ArvanCloud service with credentials."""
        self.api_key = api_key
        self.channel_id = channel_id
        self.logger = logging.getLogger(__name__)
        self._validate_credentials()

    def _validate_credentials(self) -> None:
        """Validate API credentials on initialization"""
        if not self.api_key or not self.channel_id:
            raise ValueError("Both api_key and channel_id are required")

    def _make_headers(self, additional_headers: Optional[Dict] = None) -> Dict:
        """Create request headers with authentication."""
        headers = {"Authorization": f"Apikey {self.api_key}"}
        if additional_headers:
            headers.update(additional_headers)
        return headers

    def _normalize_url(self, endpoint: str) -> str:
        """Normalize URL to prevent double base URL issues"""
        endpoint = endpoint.lstrip('/')
        if endpoint.startswith(self.BASE_URL):
            endpoint = endpoint[len(self.BASE_URL):].lstrip('/')
        return f"{self.BASE_URL}/{endpoint}"

    def _handle_request(self,
                        method: str,
                        endpoint: str,
                        headers: Optional[Dict] = None,
                        **kwargs) -> requests.Response:
        """Handle HTTP requests with retry logic and error handling."""
        url = self._normalize_url(endpoint)

        for attempt in range(self.RETRY_ATTEMPTS):
            try:
                self.logger.info(f"Making {method} request to {url} (attempt {attempt + 1}/{self.RETRY_ATTEMPTS})")
                response = requests.request(method, url, headers=headers, **kwargs)
                response.raise_for_status()
                return response
            except requests.RequestException as e:
                self.logger.error(f"Request failed (attempt {attempt + 1}/{self.RETRY_ATTEMPTS}): {str(e)}")
                self.logger.error(f"URL: {url}, Method: {method}")
                self.logger.error(f"Headers: {headers}")
                if attempt == self.RETRY_ATTEMPTS - 1:
                    raise ArvanCloudError(f"Failed after {self.RETRY_ATTEMPTS} attempts: {str(e)}")
                time.sleep(self.RETRY_DELAY * (attempt + 1))

    def create_file_on_server(self, file_name: str, file_size: int) -> str:
        """Create a file placeholder on ArvanCloud server."""
        self.logger.info(f"Creating file on ArvanCloud: {file_name}")

        # Prepare metadata
        file_name_b64 = base64.b64encode(file_name.encode()).decode()
        file_type_b64 = base64.b64encode("video/mp4".encode()).decode()

        headers = self._make_headers({
            "tus-resumable": "1.0.0",
            "upload-length": str(file_size),
            "upload-metadata": f"filename {file_name_b64},filetype {file_type_b64}"
        })

        response = self._handle_request(
            "POST",
            f"/channels/{self.channel_id}/files",
            headers=headers
        )

        location_url = response.headers.get("Location")
        if not location_url:
            raise ArvanCloudError("No location URL in response")

        self.logger.info(f"File created successfully. Location: {location_url}")
        return location_url

    def upload_file_chunk(self, file: BinaryIO, location_url: str, file_size: int) -> None:
        """Upload file in chunks with progress tracking."""
        self.logger.info("Starting chunked upload")
        offset = 0
        total_chunks = (file_size + self.CHUNK_SIZE - 1) // self.CHUNK_SIZE

        while offset < file_size:
            chunk = file.read(self.CHUNK_SIZE)
            if not chunk:
                break

            headers = self._make_headers({
                "tus-resumable": "1.0.0",
                "Upload-Offset": str(offset),
                "Content-Type": "application/offset+octet-stream"
            })

            self._handle_request("PATCH", location_url, headers=headers, data=chunk)
            offset += len(chunk)
            current_chunk = offset // self.CHUNK_SIZE
            self.logger.info(
                f"Upload progress: {current_chunk}/{total_chunks} chunks ({(offset / file_size) * 100:.1f}%)")

    def create_video_on_server(self, title: str, description: str, file_id: str) -> Dict[str, Any]:
        """Create video entry on ArvanCloud server."""
        self.logger.info(f"Creating video: {title}")

        data = {
            "title": title,
            "description": description or "",
            "file_id": file_id,
            "convert_mode": "auto"
        }

        response = self._handle_request(
            "POST",
            f"/channels/{self.channel_id}/videos",
            headers=self._make_headers({"Content-Type": "application/json"}),
            json=data
        )

        response_data = response.json()
        if 'data' not in response_data:
            raise ArvanCloudError("Invalid response format from server")

        return response_data

    def check_video_status(self, video_id: str, max_wait_time: int = 3600) -> str:
        """Check video processing status and get config URL with timeout."""
        self.logger.info(f"Checking status for video: {video_id}")
        start_time = time.time()

        while True:
            if time.time() - start_time > max_wait_time:
                raise ArvanCloudError("Timeout waiting for video processing")

            response = self._handle_request(
                "GET",
                f"/videos/{video_id}",
                headers=self._make_headers()
            )

            video_info = response.json()
            status = video_info['data']['status']
            config_url = video_info['data'].get('config_url')

            if config_url:
                self.logger.info("Video processing completed")
                return config_url

            if status not in self.VALID_STATUSES:
                raise ArvanCloudError(f"Unexpected video status: {status}")

            self.logger.info(f"Video status: {status}")
            time.sleep(10)  # Avoid too frequent API calls

    def get_video_info(self, video_id: str) -> Dict[str, Any]:
        """Retrieve detailed video information."""
        response = self._handle_request(
            "GET",
            f"/videos/{video_id}",
            headers=self._make_headers()
        )
        return response.json().get('data', {})