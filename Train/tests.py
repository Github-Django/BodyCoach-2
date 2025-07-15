from telethon import TelegramClient

from Train.views import API_ID, API_HASH


async def send_pdf_via_telegram(phone_number, pdf_stream, message=""):
    """ارسال فایل PDF از طریق تلگرام"""
    client = TelegramClient('hamid_session', API_ID, API_HASH)

    try:
        await client.connect()
        if not await client.is_user_authorized():
            raise Exception("لطفا ابتدا با اجرای اسکریپت لاگین، وارد شوید.")

        # تلاش برای یافتن کاربر با شماره موبایل
        try:
            user = await client.get_input_entity(phone_number)
        except ValueError:
            # اگر با شماره پیدا نشد، سعی میکنیم مستقیم پیام بفرستیم
            user = phone_number

        pdf_stream.name = "training_plan.pdf"
        await client.send_file(user, pdf_stream, caption=message, parse_mode='HTML')

    except Exception as e:
        raise Exception(f"خطا در ارسال: {str(e)}")
    finally:
        pdf_stream.close()
        await client.disconnect()
