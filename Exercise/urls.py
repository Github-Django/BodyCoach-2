from django.urls import path, include
from . import views

app_name = 'exercise'
urlpatterns = [
    path('create/', views.ExerciseCreateView.as_view(), name='exercise_create'),
    path('update/<int:pk>/', views.ExerciseUpdateView.as_view(), name='exercise_update'),
    path('list/', views.ExerciseListView.as_view(), name='exercise_list'),
    path('video-player/<int:video_id>/', views.video_player_view, name='video_player'),
    path('videos/', views.VideoListView.as_view(), name='video_list'),
    path('api/upload-chunk/', views.ChunkUploadView.as_view(), name='upload-chunk'),
]
