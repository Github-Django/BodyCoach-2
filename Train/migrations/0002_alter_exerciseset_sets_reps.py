# Generated by Django 5.1.2 on 2025-04-23 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Train', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exerciseset',
            name='sets_reps',
            field=models.CharField(blank=True, choices=[('3x12', '12×3'), ('12-10-8', '12-10-8'), ('3x10', '10×3'), ('3x20', '20×3'), ('13-11-9', '13-11-9'), ('3x25', '25×3'), ('۵ دقیقه', '۵ دقیقه'), ('3x15', '15×3'), ('3x8', '8×3'), ('3x9', '9×3'), ('3x60', '60×3'), ('3x70', '70×3'), ('3x100', '100×3'), ('3x90', '90×3'), ('3x6', '6×3'), ('3x5', '5×3'), ('4x6', '6×4'), ('4x8', '8×4'), ('4x9', '9×4'), ('4x12', '12×4'), ('4x10', '10×4'), ('4x12', '12×4'), ('17-13-11', '17-13-11'), ('10-8-6', '10-8-6'), ('8-6-4', '8-6-4'), ('6-4-2', '6-4-2'), ('۲۰ ثانیه', '۲۰ ثانیه'), ('۲۰ دقیقه', '۲۰ دقیقه'), ('۴۰ ثانیه', '۴۰ ثانیه'), ('1x5', '5×1'), ('1x20', '20×1'), ('2x20', '20×2'), ('4x20', '20×4')], max_length=50, null=True, verbose_name='ست و تکرار'),
        ),
    ]
