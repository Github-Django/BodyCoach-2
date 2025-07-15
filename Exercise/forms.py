from django import forms
from .models import Exercise


class ExerciseForm(forms.ModelForm):
    training_video = forms.FileField(
        required=False,
        label="ویدئوی آموزشی",
        help_text="ویدئوی آموزشی حرکت را آپلود کنید (اختیاری)"
    )

    class Meta:
        model = Exercise
        fields = ['name', 'muscle_group', 'description', 'training_video']
        labels = {
            'name': 'نام حرکت',
            'muscle_group': 'گروه عضلانی',
            'description': 'توضیحات حرکت', 'training_video': 'ویدئوی آموزشی',

        }
