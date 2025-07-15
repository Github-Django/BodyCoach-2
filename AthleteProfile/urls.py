from django.urls import path, include
from . import views

app_name = 'athlete'
urlpatterns = [
    path('create/', views.AthleteProfileCreateView.as_view(), name='athlete_create'),
    path('update/<int:pk>', views.AthleteProfileUpdateView.as_view(), name='athlete_update'),
    path('list/', views.AthleteProfileListView.as_view(), name='athlete_list'),
    path('<int:pk>/delete/', views.AthleteProfileDeleteView.as_view(), name='athlete_delete'),
    path('<int:athlete_id>/athlete_training_plans/', views.AthleteTrainingPlansView.as_view(), name='athlete_training_plans'),
    path('<int:athlete_id>/nutrition_plans/', views.AthleteNutritionPlansView.as_view(), name='athlete_nutrition_plans'),
]
