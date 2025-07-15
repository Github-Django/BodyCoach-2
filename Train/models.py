from django.db import models

from AthleteProfile.models import AthleteProfile
from Exercise.models import Exercise
from extensions.utils import jalali_converter
import re  # Regular expressions for pattern matching


# Create your models here.

class TrainingPlan(models.Model):
    athlete_profile = models.ForeignKey(AthleteProfile, on_delete=models.CASCADE, related_name="training_plans")
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True, null=True, blank=True)

    def jpublish(self):
        return jalali_converter(self.created)

    def __str__(self):
        return f"برنامه بدنسازی برای {self.athlete_profile.full_name}"


class ExerciseSet(models.Model):
    SETS_CHOICES = [
        ('3x12', '12×3'),
        ('12-10-8', '12-10-8'),
        ('3x10', '10×3'),
        ('3x20', '20×3'),
        ('13-11-9', '13-11-9'),
        ('3x25', '25×3'),
        ('3x15', '15×3'),
        ('3x8', '8×3'),
        ('3x9', '9×3'),
        ('3x60', '60×3'),
        ('3x70', '70×3'),
        ('3x100', '100×3'),
        ('3x90', '90×3'),
        ('3x6', '6×3'),
        ('3x5', '5×3'),
        ('4x6', '6×4'),
        ('4x8', '8×4'),
        ('4x9', '9×4'),
        ('4x12', '12×4'),
        ('4x10', '10×4'),
        ('4x12', '12×4'),
        ('17-13-11', '17-13-11'),
        ('10-8-6', '10-8-6'),
        ('8-6-4', '8-6-4'),
        ('6-4-2', '6-4-2'),
        ('1x5', '5×1'),
        ('1x20', '20×1'),
        ('2x20', '20×2'),
        ('4x20', '20×4'),
        ('۲۰ ثانیه', '۲۰ ثانیه'),
        ('۴۰ ثانیه', '۴۰ ثانیه'),
        ('۵ دقیقه', '۵ دقیقه'),
        ('۷ دقیقه', '۷ دقیقه'),
        ('۱۰ دقیقه', '۱۰ دقیقه'),
        ('۱۵ دقیقه', '۱۵ دقیقه'),
        ('۲۰ دقیقه', '۲۰ دقیقه'),
    ]
    training_plan = models.ForeignKey('TrainingPlan', on_delete=models.CASCADE, related_name="exercise_sets")
    exercise = models.ForeignKey(Exercise, on_delete=models.CASCADE, related_name="exercise_sets")
    sets_reps = models.CharField(max_length=50, choices=SETS_CHOICES, verbose_name="ست و تکرار", null=True, blank=True)
    is_superset = models.BooleanField(default=False, verbose_name="سوپرسِت")
    paired_exercise = models.ForeignKey(Exercise, null=True, blank=True, on_delete=models.SET_NULL,
                                        verbose_name="تمرین سوپرسِت", related_name="superset_pairs")
    # paired_sets_reps = models.CharField(max_length=50, choices=SETS_CHOICES, verbose_name="ست و تکرار سوپرست",
    #                                     null=True, blank=True)
    paired_superset = models.ForeignKey(Exercise, null=True, blank=True, on_delete=models.SET_NULL,
                                        verbose_name="تمرین تری ست", related_name="second_superset_pairs")
    # second_paired_sets_reps = models.CharField(max_length=50, choices=SETS_CHOICES, verbose_name="ست و تکرار تری ست",
    #                                            null=True, blank=True)
    session_number = models.IntegerField(verbose_name="شماره جلسه", blank=True, null=True)

    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True, null=True, blank=True)

    def should_display_sets(self):
        return bool(self.sets_reps)

    def __str__(self):
        reps = self.sets_reps
        return f"{self.exercise.name} - {reps} {'(سوپرسِت)' if self.is_superset else ''}"
