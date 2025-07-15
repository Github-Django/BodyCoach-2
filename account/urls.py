from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'account'
urlpatterns = [
    path('login/', views.CoachLoginView.as_view(), name='login'),
    path('logout/', views.CoachLogoutView, name='logout'),
]
