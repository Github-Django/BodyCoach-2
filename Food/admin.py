from django.contrib import admin
from .models import Food, Meal, MealFood, NutritionPlan


# Inline admin for MealFood
class MealFoodInline(admin.TabularInline):
    model = MealFood
    extra = 1  # Number of empty forms to display
    verbose_name = "غذا در وعده"
    verbose_name_plural = "غذاها در وعده"


# Admin for Meal
@admin.register(Meal)
class MealAdmin(admin.ModelAdmin):
    list_display = ('time_of_day', 'description')
    inlines = [MealFoodInline]


# Admin for Food
@admin.register(Food)
class FoodAdmin(admin.ModelAdmin):
    list_display = ('name',)


# Admin for NutritionPlan
@admin.register(NutritionPlan)
class NutritionPlanAdmin(admin.ModelAdmin):
    list_display = ('athlete', 'start_date', 'notes')
