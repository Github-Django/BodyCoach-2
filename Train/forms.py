# forms
from django import forms
from django.forms import inlineformset_factory
from jalali_date.fields import JalaliDateField
from jalali_date.widgets import AdminJalaliDateWidget

from Exercise.models import Exercise
from .models import TrainingPlan, ExerciseSet

from django import forms
from .models import AthleteProfile


class TrainingPlanForm(forms.Form):
    sessions = forms.ChoiceField(
        choices=[(i, f"{i} جلسه") for i in range(1, 7)],
        label="تعداد جلسات",
        widget=forms.Select(attrs={
            'class': 'nui-select nui-select-default nui-select-md nui-select-rounded-sm'
        })
    )
    athlete_profile = forms.ModelChoiceField(
        queryset=AthleteProfile.objects.all(),
        empty_label="---------",
        label="Athlete profile",
        widget=forms.Select(attrs={
            'class': 'nui-select nui-select-default nui-select-md nui-select-rounded-sm select2'
        })
    )

    class Meta:
        model = TrainingPlan
        fields = ['athlete_profile']


# ایجاد فرم ExerciseSet با session_number
# forms.py
# forms.py

from django import forms
from django.forms import inlineformset_factory
from jalali_date.fields import JalaliDateField
from jalali_date.widgets import AdminJalaliDateWidget
from Exercise.models import Exercise
from .models import TrainingPlan, ExerciseSet


class TrainingPlanForm(forms.Form):
    sessions = forms.ChoiceField(
        choices=[(i, f"{i} جلسه") for i in range(1, 7)],
        label="تعداد جلسات",
        widget=forms.Select(attrs={
            'class': 'nui-select nui-select-default nui-select-md nui-select-rounded-sm'
        })
    )
    athlete_profile = forms.ModelChoiceField(
        queryset=AthleteProfile.objects.all(),
        empty_label="---------",
        label="Athlete profile",
        widget=forms.Select(attrs={
            'class': 'nui-select nui-select-default nui-select-md nui-select-rounded-sm select2'
        })
    )

    class Meta:
        model = TrainingPlan
        fields = ['athlete_profile']


class ExerciseSetForm(forms.ModelForm):
    session_number = forms.IntegerField(widget=forms.HiddenInput())
    sets_reps = forms.ChoiceField(
        choices=ExerciseSet.SETS_CHOICES,
        required=False,
        label="ست و تکرار",
        widget=forms.Select(attrs={'class': 'form-select'})
    )
    # paired_sets_reps = forms.ChoiceField(
    #     choices=ExerciseSet.SETS_CHOICES,
    #     required=False,
    #     label="ست و تکرار سوپرست",
    #     widget=forms.Select(attrs={'class': 'form-select'})
    # )
    # second_paired_sets_reps = forms.ChoiceField(
    #     choices=ExerciseSet.SETS_CHOICES,
    #     required=False,
    #     label="ست و تکرار تری ست",
    #     widget=forms.Select(attrs={'class': 'form-select'})
    # )
    is_double_superset = forms.BooleanField(
        required=False,
        label="تری ست",
        widget=forms.CheckboxInput(attrs={'class': 'double-superset-checkbox'})
    )

    def clean(self):
        cleaned_data = super().clean()
        if not cleaned_data.get('exercise'):
            self.add_error('exercise', "لطفاً تمرین را انتخاب کنید.")

        if not (cleaned_data.get('sets_reps')):
            self.add_error('sets_reps', "لطفاً ست و تکرار را انتخاب کنید.")

        # if cleaned_data.get('is_superset') and cleaned_data.get('paired_exercise'):
        #     if not (cleaned_data.get('paired_sets_reps')):
        #         self.add_error('paired_sets_reps', "لطفاً ست و تکرار سوپرست را انتخاب کنید.")
        #
        # if cleaned_data.get('is_double_superset') and cleaned_data.get('paired_superset'):
        #     if not (cleaned_data.get('second_paired_sets_reps')):
        #         self.add_error('second_paired_sets_reps', "لطفاً ست و تکرار تری ست را انتخاب کنید.")
        # return cleaned_data

    class Meta:
        model = ExerciseSet
        fields = ['exercise', 'sets_reps', 'is_superset',
                  'paired_exercise', 'paired_superset', 'is_double_superset',
                  # 'second_paired_sets_reps',
                  # , 'paired_sets_reps',
                  'session_number']
        widgets = {
            'exercise': forms.Select(attrs={'class': 'exercise-select'}),
            'paired_exercise': forms.Select(attrs={'class': 'exercise-select'}),
            'paired_superset': forms.Select(attrs={'class': 'exercise-select', 'disabled': 'true'}),
        }


ExerciseSetFormSet = inlineformset_factory(
    TrainingPlan,
    ExerciseSet,
    form=ExerciseSetForm,
    fields=[
        'exercise', 'sets_reps', 'is_superset',
        'paired_exercise',
        'paired_superset',
        # 'paired_sets_reps','second_paired_sets_reps',
        'session_number'
    ],
    extra=1
)
