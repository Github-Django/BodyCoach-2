from django.db import models

from AthleteProfile.models import AthleteProfile
from extensions.utils import jalali_converter


# 1. مدل غذا
class Food(models.Model):
    name = models.CharField(max_length=100, verbose_name="نام غذا")

    def __str__(self):
        return self.name

class Meal(models.Model):
    TIME_CHOICES = [
        ('before_breakfast', 'قبل صبحانه (ناشتا)'),
        ('morning', 'صبحانه'),
        ('after_breakfast', 'بعد صبحانه'),
        ('before_lunch', 'قبل ناهار'),
        ('noon', 'ناهار'),
        ('after_lunch', 'بعد ناهار'),
        ('mid_afternoon', 'میان‌وعده عصر'),
        ('before_dinner', 'قبل شام'),
        ('evening', 'شام'),
        ('after_dinner', 'بعد شام'),
        ('before_bed', 'شب قبل خواب'),
        ('pre_workout', 'قبل از تمرین'),
        ('post_workout', 'بعد از تمرین'),
    ]

    time_of_day = models.CharField(
        max_length=50,
        choices=TIME_CHOICES,
        verbose_name="زمان وعده"
    )
    foods = models.ManyToManyField(Food, through='MealFood', verbose_name="غذاهای وعده")
    description = models.TextField(verbose_name="توضیحات وعده", blank=True, null=True)

    def __str__(self):
        return f"وعده - {self.get_time_of_day_display()}"


# 2.1 مدل میانی برای تعیین مقدار غذاها در وعده
class MealFood(models.Model):
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE, verbose_name="وعده غذایی")
    food = models.ForeignKey(Food, on_delete=models.CASCADE, verbose_name="غذا")
    quantity = models.CharField(
        max_length=50, verbose_name="مقدار غذا (واحد)"
    )

    def __str__(self):
        return f"{self.food.name} in {self.meal}"


# 3. مدل برنامه غذایی
class NutritionPlan(models.Model):
    athlete = models.ForeignKey(
        AthleteProfile, on_delete=models.CASCADE, verbose_name="ورزشکار"
    )
    meals = models.ManyToManyField(Meal, verbose_name="وعده‌های غذایی")
    start_date = models.DateTimeField(auto_now_add=True,null=True, blank=True,verbose_name="تاریخ شروع برنامه")
    notes = models.TextField(verbose_name="یادداشت‌های مربی", blank=True, null=True)
    def jpublish(self):
        return jalali_converter(self.start_date)

    def __str__(self):
        return f"برنامه غذایی برای {self.athlete.full_name}"
