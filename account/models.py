from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class User(AbstractUser):
    # فیلدهای مربی
    is_coach = models.BooleanField(default=False)  # مربی
    # # برای آینده: ورزشکاران
    is_athlete = models.BooleanField(default=False)  # ورزشکار
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    date_of_birth = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.username

    # تنظیم فیلد is_staff برای مربیان
    def save(self, *args, **kwargs):
        if self.is_coach:
            self.is_staff = True  # مربیان باید کارمند باشند
        if self.is_staff:
            self.is_coach = True  # کارمند باید مربی باشند
        super().save(*args, **kwargs)
