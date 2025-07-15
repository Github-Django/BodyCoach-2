# import os
# import shutil
# import uuid
#
# from celery import shared_task
# from django.conf import settings
# from django.core.files.storage import default_storage
# import logging
#
# from Exercise.models import Exercise
#
# logger = logging.getLogger(__name__)
#
#
# @shared_task(
#     bind=True,
#     max_retries=3,
#     default_retry_delay=60,
#     autoretry_for=(Exception,),
#     retry_backoff=True,
#     time_limit=3600,  # 1 hour
#     soft_time_limit=3300,  # 55 minutes
#     rate_limit='2/m'  # حداکثر 2 پردازش در دقیقه
# )
# def process_video(self, exercise_id, temp_path):
#     """
#     پردازش و ذخیره‌سازی فایل ویدیویی
#     """
#     logger.info(f"Starting video processing for exercise {exercise_id}")
#
#     try:
#         # بررسی وجود تمرین
#         exercise = Exercise.objects.get(id=exercise_id)
#
#         if not os.path.exists(temp_path):
#             raise FileNotFoundError(f"Temp file not found: {temp_path}")
#
#         # ایجاد مسیر نهایی
#         final_dir = os.path.join(settings.MEDIA_ROOT, 'exercise_videos', str(exercise.id))
#         os.makedirs(final_dir, exist_ok=True)
#
#         # تعیین نام نهایی فایل
#         file_ext = os.path.splitext(temp_path)[1]
#         final_name = f"{exercise.id}_{uuid.uuid4()}{file_ext}"
#         final_path = os.path.join('exercise_videos', str(exercise.id), final_name)
#
#         # کپی فایل با استفاده از chunks
#         chunk_size = 8 * 1024 * 1024  # 8MB chunks
#         with open(temp_path, 'rb') as source:
#             with default_storage.open(final_path, 'wb') as dest:
#                 shutil.copyfileobj(source, dest, length=chunk_size)
#
#         # به‌روزرسانی مدل
#         exercise.training_video = final_path
#         exercise.save(update_fields=['training_video'])
#
#         # پاکسازی فایل موقت
#         try:
#             os.remove(temp_path)
#             logger.info(f"Cleaned up temp file: {temp_path}")
#         except OSError as e:
#             logger.warning(f"Could not delete temp file: {e}")
#
#         logger.info(f"Successfully processed video for exercise {exercise_id}")
#         return True
#
#     except Exercise.DoesNotExist:
#         logger.error(f"Exercise {exercise_id} not found")
#         # پاکسازی فایل موقت در صورت عدم وجود تمرین
#         if os.path.exists(temp_path):
#             try:
#                 os.remove(temp_path)
#             except OSError:
#                 pass
#         raise
#
#     except Exception as e:
#         logger.exception(f"Error processing video for exercise {exercise_id}")
#         # پاکسازی در صورت خطا
#         if os.path.exists(temp_path):
#             try:
#                 os.remove(temp_path)
#             except OSError:
#                 pass
#         raise self.retry(exc=e)
# @shared_task
# def cleanup_temp_files():
#     """
#     پاکسازی فایل‌های موقت قدیمی (می‌تواند به صورت دوره‌ای اجرا شود)
#     """
#     temp_dir = os.path.join(settings.MEDIA_ROOT, "temp")
#     if not os.path.exists(temp_dir):
#         return
#
#     try:
#         # حذف همه فایل‌ها و پوشه‌های موجود در دایرکتوری temp
#         shutil.rmtree(temp_dir)
#         os.makedirs(temp_dir)  # ایجاد مجدد دایرکتوری خالی
#         logger.info("Successfully cleaned up temp directory")
#     except Exception as e:
#         logger.error(f"Error cleaning up temp directory: {str(e)}")
#         raise