import asyncio
import os
import django
from telethon import TelegramClient

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'BodyCoach.settings')
django.setup()

API_ID = ''
API_HASH = ''
phone = ''  # شماره خودتون


async def main():
    client = TelegramClient('telethon_session', API_ID, API_HASH)
    await client.start(phone=phone)
    print("Login successful!")


asyncio.run(main())
