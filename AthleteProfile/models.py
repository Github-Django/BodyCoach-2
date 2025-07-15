from django.db import models
from django.contrib.auth.models import User  # در صورت نیاز برای اتصال پروفایل به کاربر
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver


class AthleteProfile(models.Model):
    # فیلد اختیاری برای اتصال پروفایل به کاربر
    # user = models.OneToOneField(
    #     User,  # مرتبط با مدل کاربر موجود
    #     on_delete=models.CASCADE,
    #     related_name='athlete_profile'
    # )
    full_name = models.CharField(max_length=100, verbose_name="نام کامل")
    age = models.IntegerField(verbose_name="سن")
    weight = models.DecimalField(max_digits=5, decimal_places=2, verbose_name="وزن (کیلوگرم)")
    height = models.DecimalField(max_digits=5, decimal_places=2, verbose_name="قد (سانتی‌متر)")
    injuries = models.TextField(verbose_name="آسیب‌دیدگی‌ها", blank=True, null=True)
    training_history = models.TextField(verbose_name="سابقه تمرین", blank=True, null=True)
    # گزینه‌های انتخابی برای انگیزه ورزشی
    MOTIVATION_GOAL_CHOICES = [
        ('professional_bodybuilding', 'بدنسازی حرفه‌ای و مسابقات'),
        ('health_fitness', 'سلامتی و علاقه به ورزش'),
    ]

    # فیلدهای جدید
    motivation_goal = models.CharField(
        max_length=50,
        choices=MOTIVATION_GOAL_CHOICES,
        verbose_name="هدف انگیزه ورزشی",
        blank=True,
        null=True
    )
    mobile_phone = models.CharField(max_length=15, verbose_name="شماره تلفن همراه", blank=True, null=True)
    telegram_whatsapp_phone = models.CharField(max_length=15, verbose_name="شماره تلگرام / واتساپ", blank=True, null=True)
    body_test_file = models.FileField(upload_to='body_tests/', verbose_name="فایل تست بادی", blank=True, null=True)
    supplements = models.TextField(verbose_name="مصرف مکمل‌ها و داروها", blank=True, null=True)
    gym_name = models.CharField(max_length=100, verbose_name="نام باشگاه", blank=True, null=True)
    referrer = models.CharField(max_length=100, verbose_name="معرف", blank=True, null=True)
    unique_code = models.IntegerField(verbose_name="کد اختصاصی", unique=True, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return f"{self.full_name}- کد : {self.unique_code}"

    class Meta:
        ordering = ['-id']  # or any other field you want to order by
# مدل برای مدیریت کدهای آزاد
class RecycledCodes(models.Model):
    code = models.IntegerField(verbose_name="کد قابل بازیافت", unique=True)

    def __str__(self):
        return str(self.code)


@receiver(post_save, sender=AthleteProfile)
def assign_unique_code(sender, instance, created, **kwargs):
    if created and instance.unique_code is None:
        recycled_code = RecycledCodes.objects.first()
        if recycled_code:
            instance.unique_code = recycled_code.code
            recycled_code.delete()
        else:
            # Find the highest code currently in use
            highest_code = AthleteProfile.objects.exclude(id=instance.id).aggregate(
                max_code=models.Max('unique_code'))['max_code']
            instance.unique_code = (highest_code + 1) if highest_code else 100

        # Prevent recursive signal call
        instance.save(update_fields=['unique_code'])
# سیگنال برای بازیافت کد هنگام حذف
@receiver(post_delete, sender=AthleteProfile)
def recycle_code(sender, instance, **kwargs):
    if instance.unique_code is not None:
        # ذخیره کد به‌عنوان کد بازیافت‌شده
        RecycledCodes.objects.create(code=instance.unique_code)