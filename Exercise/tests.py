import requests

# تنظیمات
video_id = 'd9ea8562-c1be-447e-8f36-36569376a9e0'  # شناسه ویدیو
mu_key = '2a3b6572-1009-5518-94b2-0464f5a28ef5'   # کلید دسترسی

# URL برای درخواست
url = f'https://napi.arvancloud.ir/vod/2.0/videos/{video_id}'

# هدرها
headers = {
    'Authorization': f'Apikey {mu_key}',
    'Content-Type': 'application/json'
}

# ارسال درخواست GET
response = requests.get(url, headers=headers)

# بررسی وضعیت پاسخ
if response.status_code == 200:
    data = response.json()
    config_url = data['data'].get('config_url')  # استخراج CONFIG_URL
    print('CONFIG_URL:', config_url)
else:
    print('Error:', response.status_code, response.text)
