# Generated by Django 5.1.2 on 2025-01-11 19:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Exercise', '0004_exercise_upload_status_delete_videouploadchunk'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exercise',
            name='upload_status',
        ),
    ]
