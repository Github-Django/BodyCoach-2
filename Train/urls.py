from django.urls import path, include
from . import views

app_name = 'train'
urlpatterns = [
    # Step 1 of creating a training plan
    path('create-step1/', views.create_training_plan_step1, name='create_training_plan_step1'),

    # AJAX endpoint to filter exercises based on muscle group
    path('filter-exercises/', views.filter_exercises, name='filter_exercises'),

    # Step 2 of creating a training plan
    path('create-step2/', views.create_training_plan_step2, name='create_training_plan_step2'),

    # Overview of a specific training plan
    path('overview/<int:training_plan_id>/', views.training_plan_overview, name='training_plan_overview'),

    path('get-athlete-profile/', views.get_athlete_profile_details, name='get_athlete_profile'),

    path('training-plan/<int:id>/delete/', views.TrainingPlanDeleteView.as_view(), name='training_plan_delete'),
    path('add-exercises/', views.add_exercises_to_session, name='add_exercises_to_session'),  # NEW
    # Generate PDF for a training plan
    # path('training-plan/<int:training_plan_id>/pdf/', views.generate_training_plan_pdf,
    #      name='generate_training_plan_pdf'),
    path(
        'send-training-plan-with-videos/<int:training_plan_id>/',
        views.send_training_plan_via_telegram,
        {'include_videos': True},
        name='send_training_plan_with_videos',
    ),

    # ارسال PDF بدون لینک‌های ویدیو
    path(
        'send-training-plan-without-videos/<int:training_plan_id>/',
        views.send_training_plan_via_telegram,
        {'include_videos': False},
        name='send_training_plan_without_videos',
    ),
# urls.py
path('training-plan/<int:pk>/edit/', views.EditTrainingPlanView.as_view(), name='edit_training_plan'),

]
