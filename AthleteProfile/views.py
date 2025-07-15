from django.views.generic import CreateView, UpdateView, ListView, DeleteView
from django.urls import reverse_lazy
from django.contrib import messages

from account.mixins import LoginOnlyForCoachesMixin
from .models import AthleteProfile
from .forms import AthleteProfileForm


class AthleteProfileCreateView(LoginOnlyForCoachesMixin,CreateView):
    model = AthleteProfile
    form_class = AthleteProfileForm
    template_name = 'athlete/athleteprofile_form.html'
    success_url = reverse_lazy('athlete:athlete_list')

    def form_valid(self, form):
        messages.success(self.request, "پروفایل ورزشکار با موفقیت ایجاد شد!")
        return super().form_valid(form)

    def form_invalid(self, form):
        # نمایش خطاهای فرم به صورت پیام‌های خطا به زبان فارسی
        for field, errors in form.errors.items():
            field_label = form.fields[field].label
            for error in errors:
                messages.error(self.request, f"خطا در {field_label}: {error}")
        return super().form_invalid(form)


class AthleteProfileUpdateView(LoginOnlyForCoachesMixin,UpdateView):
    model = AthleteProfile
    form_class = AthleteProfileForm
    template_name = 'athlete/athleteprofile_form.html'
    success_url = reverse_lazy('athlete:athlete_list')

    def form_valid(self, form):
        messages.success(self.request, "پروفایل ورزشکار با موفقیت به‌روزرسانی شد!")
        return super().form_valid(form)

    def form_invalid(self, form):
        # نمایش خطاهای فرم به صورت پیام‌های خطا به زبان فارسی
        for field, errors in form.errors.items():
            field_label = form.fields[field].label
            for error in errors:
                messages.error(self.request, f"خطا در {field_label}: {error}")
        return super().form_invalid(form)


class AthleteProfileListView(LoginOnlyForCoachesMixin,ListView):
    model = AthleteProfile
    template_name = 'athlete/athleteprofile_list.html'
    context_object_name = 'athlete_profiles'
    paginate_by = 20  # Number of profiles per page


class AthleteProfileDeleteView(LoginOnlyForCoachesMixin,DeleteView):
    model = AthleteProfile
    success_url = reverse_lazy('athlete:athlete_list')

    def dispatch(self, request, *args, **kwargs):
        response = super().dispatch(request, *args, **kwargs)
        if self.request.method == 'POST':
            messages.success(request, "پروفایل ورزشکار با موفقیت حذف شد!")
        return response


from django.views.generic import ListView
from django.shortcuts import get_object_or_404
from AthleteProfile.models import AthleteProfile
from Train.models import TrainingPlan

class AthleteTrainingPlansView(LoginOnlyForCoachesMixin,ListView):
    """نمایش تعداد و لیست برنامه‌های تمرینی برای یک ورزشکار خاص."""
    model = TrainingPlan
    template_name = 'athlete/user_training_plans.html'
    context_object_name = 'training_plans'
    paginate_by = 14
    def get_queryset(self):
        # Get the athlete profile and filter training plans
        self.athlete_profile = get_object_or_404(AthleteProfile, id=self.kwargs['athlete_id'])
        return TrainingPlan.objects.filter(athlete_profile=self.athlete_profile).order_by('-created')

    def get_context_data(self, **kwargs):
        # Add athlete profile and plan count to the context
        context = super().get_context_data(**kwargs)
        context['athlete_profile'] = self.athlete_profile
        context['plan_count'] = self.get_queryset().count()
        return context

from django.views.generic import ListView
from django.shortcuts import get_object_or_404
from AthleteProfile.models import AthleteProfile
from Food.models import NutritionPlan

class AthleteNutritionPlansView(LoginOnlyForCoachesMixin,ListView):
    """نمایش تعداد و لیست برنامه‌های غذایی برای یک ورزشکار خاص."""
    model = NutritionPlan
    template_name = 'athlete/user_nutrition_plans.html'
    context_object_name = 'nutrition_plans'
    paginate_by = 14

    def get_queryset(self):
        # گرفتن پروفایل ورزشکار و فیلتر کردن برنامه‌های غذایی مرتبط
        self.athlete_profile = get_object_or_404(AthleteProfile, id=self.kwargs['athlete_id'])
        return NutritionPlan.objects.filter(athlete=self.athlete_profile).order_by('-start_date')

    def get_context_data(self, **kwargs):
        # اضافه کردن پروفایل ورزشکار و تعداد برنامه‌ها به کانتکست
        context = super().get_context_data(**kwargs)
        context['athlete_profile'] = self.athlete_profile
        context['plan_count'] = self.get_queryset().count()
        return context
