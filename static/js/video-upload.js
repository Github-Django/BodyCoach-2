// Helper function to show errors
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4';
    errorDiv.textContent = message;
    const progressDiv = document.querySelector('.upload-progress');
    if (progressDiv) {
        progressDiv.after(errorDiv);
    }
    setTimeout(() => errorDiv.remove(), 5000);
}

// تابع updateProgress
function updateProgress(progressBar, progressText, percentage, chunkInfo) {
    const progressDiv = document.querySelector('.upload-progress');
    const chunkInfoDiv = document.querySelector('.chunk-info');

    // نمایش progress bar
    if (progressDiv) {
        progressDiv.classList.remove('hidden');
        progressDiv.style.display = 'block';
    }

    if (progressBar) {
        // Update width and aria values
        progressBar.style.width = `${percentage}%`;
        progressBar.setAttribute('aria-valuenow', percentage);

        // Update percentage text
        const percentageEl = document.querySelector('.upload-percentage');
        if (percentageEl) {
            percentageEl.textContent = `${Math.round(percentage)}%`;
        }

        // Change color based on progress
        progressBar.classList.remove('bg-success', 'bg-warning', 'bg-danger', 'bg-primary');
        if (percentage === 100) {
            progressBar.classList.add('bg-success');
        } else if (percentage > 60) {
            progressBar.classList.add('bg-primary');
        } else if (percentage > 30) {
            progressBar.classList.add('bg-warning');
        } else {
            progressBar.classList.add('bg-danger');
        }
    }

    if (progressText) {
        progressText.textContent = percentage === 100 ? 'آپلود کامل شد' : 'در حال آپلود فایل...';
    }

    if (chunkInfoDiv) {
        chunkInfoDiv.textContent = chunkInfo;
    }
}
class ChunkedUploader {
    constructor(file, chunkSize = 1024 * 1024) {
        this.file = file;
        this.chunkSize = chunkSize;
        this.totalChunks = Math.ceil(file.size / chunkSize);
        this.currentChunk = 0;
        this.fileId = this.generateFileId();
        this.onProgress = null;
        this.onComplete = null;
        this.onError = null;
        this.uploadUrl = document.querySelector('meta[name="upload-url"]').getAttribute('content');
    }

    generateFileId() {
        return 'file_' + new Date().getTime() + '_' + Math.random().toString(36).substr(2, 9);
    }

    async start() {
        try {
            console.log('Starting upload for file:', this.file.name);
            console.log('Total chunks:', this.totalChunks);

            while (this.currentChunk < this.totalChunks) {
                const chunk = this.getChunk();
                await this.uploadChunk(chunk);
                this.currentChunk++;

                // اینجا مهم است - آپدیت پیشرفت
                if (this.onProgress) {
                    const progress = (this.currentChunk / this.totalChunks) * 100;
                    const chunkInfo = `چانک ${this.currentChunk} از ${this.totalChunks}`;
                    this.onProgress(progress, chunkInfo);
                }
            }

            console.log('Upload completed successfully');
            if (this.onComplete) {
                this.onComplete();
            }
        } catch (error) {
            console.error('Upload failed:', error);
            if (this.onError) {
                this.onError(error);
            }
        }
    }

    getChunk() {
        const start = this.currentChunk * this.chunkSize;
        const end = Math.min(start + this.chunkSize, this.file.size);
        return this.file.slice(start, end);
    }

    async uploadChunk(chunk) {
        const formData = new FormData();
        formData.append('chunk', chunk, 'chunk.part');
        formData.append('chunk_number', this.currentChunk);
        formData.append('total_chunks', this.totalChunks);
        formData.append('file_id', this.fileId);
        formData.append('filename', this.file.name);

        const exerciseId = document.getElementById('exercise_id')?.value;
        if (exerciseId) {
            formData.append('exercise_id', exerciseId);
        }

        try {
            const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
            const response = await fetch(this.uploadUrl, {
                method: 'POST',
                headers: {
                    'X-CSRFToken': csrftoken,
                },
                body: formData,
                credentials: 'same-origin'
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Upload failed: ${response.status} ${response.statusText} - ${errorText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Chunk upload error:', error);
            throw error;
        }
    }
}

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('exercise-form');
    const fileInput = document.getElementById('id_training_video');
    const progressDiv = document.querySelector('.upload-progress');

    if (!form || !fileInput) {
        console.error('Form or file input not found');
        return;
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const videoFile = fileInput.files[0];
        if (!videoFile) {
            // Video is optional, so just submit the form if no video is selected
            form.submit();
            return;
        }

        if (videoFile.size > 100 * 1024 * 1024) {
            showError('حجم فایل نباید بیشتر از ۱۰۰ مگابایت باشد');
            return;
        }

        if (!videoFile.type.startsWith('video/')) {
            showError('لطفاً فقط فایل ویدیویی آپلود کنید');
            return;
        }

        const progressBar = document.querySelector('.progress-bar');
        const progressText = document.querySelector('.upload-status');

        // نمایش progress bar
        if (progressDiv) {
            progressDiv.style.display = 'block'; // تغییر مهم
        }

        const uploader = new ChunkedUploader(videoFile);

        uploader.onProgress = (progress, chunkInfo) => {
            updateProgress(progressBar, progressText, progress, chunkInfo);
        };

        uploader.onComplete = () => {
            updateProgress(progressBar, progressText, 100, 'آپلود با موفقیت انجام شد');
            setTimeout(() => form.submit(), 1000);
        };

        uploader.onError = (error) => {
            console.error('Upload error:', error);
            if (progressBar) {
                progressBar.classList.remove('bg-indigo-500');
                progressBar.classList.add('bg-red-500');
            }
            showError('خطا در آپلود فایل. لطفاً دوباره تلاش کنید.');
        };

        try {
            await uploader.start();
        } catch (error) {
            console.error('Upload process error:', error);
            showError('خطا در فرآیند آپلود. لطفاً دوباره تلاش کنید.');
        }
    });
});