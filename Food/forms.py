from django import forms
from django.forms import inlineformset_factory
from .models import Food, Meal, MealFood, NutritionPlan


# Inline formset for MealFood

# Inline formset for MealFood
MealFoodFormset = inlineformset_factory(
    Meal,
    MealFood,
    fields=('food', 'quantity'),
    extra=1,
    widgets={
        'food': forms.Select(attrs={'class': 'form-control'}),
        'quantity': forms.TextInput(attrs={'class': 'form-control'}),  # تغییر از NumberInput به TextInput
    },
    labels={
        'food': 'غذا',
        'quantity': 'مقدار',
    }
)


class FoodForm(forms.ModelForm):
    class Meta:
        model = Food
        fields = ['name',]
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control'}),
        }


class MealForm(forms.ModelForm):
    class Meta:
        model = Meal
        fields = ['time_of_day', 'description']
        widgets = {
            'time_of_day': forms.Select(attrs={'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control'}),
        }


class NutritionPlanForm(forms.ModelForm):
    class Meta:
        model = NutritionPlan
        fields = ['athlete', 'meals', 'notes']
        widgets = {
            'athlete': forms.Select(attrs={'class': 'form-control'}),
            'meals': forms.SelectMultiple(attrs={'class': 'form-control'}),
            'notes': forms.Textarea(attrs={'class': 'form-control'}),
        }
