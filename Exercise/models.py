from django.db import models
from django.utils.text import slugify

from .choices import MUSCLE_GROUP_CHOICES, MUSCLE_GROUP_CATEGORIES


def exercise_video_path(instance, filename):
    """
    Custom function to determine the upload path for exercise videos.
    Videos will be organized in directories by muscle group.
    """
    # Get the muscle group and convert it to a safe path format
    muscle_group = slugify(instance.get_muscle_group_display())
    # Sanitize the filename
    clean_filename = slugify(filename.split('.')[0])
    file_extension = filename.split('.')[-1]
    # Return path format: exercise_videos/muscle_group/filename.extension
    return f'exercise_videos/{muscle_group}/{clean_filename}.{file_extension}'


class VideoUpload(models.Model):
    file_id = models.CharField(max_length=100, unique=True)
    filename = models.CharField(max_length=255)
    total_chunks = models.IntegerField()
    received_chunks = models.IntegerField(default=0)
    exercise_id = models.IntegerField(null=True)  # تغییر این خط
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            models.Index(fields=['file_id']),
        ]
# Create your models here.
class Exercise(models.Model):
    muscle_group = models.CharField(max_length=50, choices=MUSCLE_GROUP_CHOICES, verbose_name="گروه عضلانی")

    # نام حرکت
    name = models.CharField(max_length=100, verbose_name="نام حرکت")

    # توضیحات حرکت
    description = models.TextField(verbose_name="توضیحات حرکت", blank=True, null=True)
    training_video = models.FileField(
        upload_to=exercise_video_path,
        verbose_name="ویدئوی آموزشی",
        blank=True,
        null=True
    )
    # config_url = models.URLField(blank=True, null=True)  # Store ArvanCloud config URL here

    def get_muscle_group_color(self):
        # Find the category for this muscle group
        category = next((key for key, values in MUSCLE_GROUP_CATEGORIES.items() if self.muscle_group in values),
                        None)

        # Define color classes for each category
        color_classes = {
            'chest': 'border-current bg-info-500/20 text-info-500',
            'triceps': 'border-current bg-yellow-500/20 text-yellow-500',
            'biceps': 'border-current bg-success-500/20 text-success-500',
            'shoulders': 'border-current bg-amber-500/20 text-amber-500',
            'back': 'border-current bg-rose-500/20 text-rose-500',
            'legs': 'border-current bg-lime-500/20 text-lime-500',
            'core': 'border-current bg-blue-500/20 text-blue-500',
            'forearms': 'border-current bg-purple-500/20 text-purple-500'
        }

        # Return the color class for the category, or a default color if not found
        return color_classes.get(category, 'border-current bg-gray-500/20 text-gray-500')

    def __str__(self):
        return f"{self.name} ({self.get_muscle_group_display()})"

    class Meta:
        ordering = ['name']  # بر اساس نام مرتب‌سازی انجام شود
