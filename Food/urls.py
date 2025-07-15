from django.urls import path

from .views import (
    FoodListView, FoodCreateView, FoodUpdateView, FoodDeleteView,
    MealListView, MealCreateView, MealUpdateView, MealDeleteView,
    NutritionPlanCreateView, NutritionPlanUpdateView, NutritionPlanDeleteView,
    NutritionPlanDetailView,
)

app_name = 'food'
urlpatterns = [
    # Food URLs
    path('', FoodListView.as_view(), name='food_list'),
    path('create/', FoodCreateView.as_view(), name='food_create'),
    path('<int:pk>/update/', FoodUpdateView.as_view(), name='food_update'),
    path('<int:pk>/delete/', FoodDeleteView.as_view(), name='food_delete'),

    # Meal URLs
    path('meals/', MealListView.as_view(), name='meal_list'),
    path('meals/create/', MealCreateView.as_view(), name='meal_create'),
    path('meals/<int:pk>/update/', MealUpdateView.as_view(), name='meal_update'),
    path('meals/<int:pk>/delete/', MealDeleteView.as_view(), name='meal_delete'),

    # NutritionPlan URLs
    path('nutrition-plans/create/', NutritionPlanCreateView.as_view(), name='nutrition_plan_create'),
    path('nutrition-plans/<int:pk>/update/', NutritionPlanUpdateView.as_view(), name='nutrition_plan_update'),
    path('nutrition-plans/<int:pk>/delete/', NutritionPlanDeleteView.as_view(), name='nutrition_plan_delete'),
    path('nutrition-plans/<int:pk>/', NutritionPlanDetailView.as_view(), name='nutrition_plan_detail'),
]
