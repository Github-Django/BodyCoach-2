# views.py
from django.contrib.auth import logout
from django.contrib.auth.views import LoginView
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from .mixins import LoginOnlyForCoachesMixin
from django.views.generic import View
from .forms import CoachLoginForm

class CoachLoginView(LoginView):
    """
    ویو لاگین مخصوص مربیان با قابلیت 'مرا به خاطر بسپار'
    """
    form_class = CoachLoginForm
    template_name = 'account/login.html'
    redirect_authenticated_user = True
    success_url = reverse_lazy('home:home')

    def form_valid(self, form):
        """ بعد از ورود موفق، اطلاعات سشن مربی را تنظیم می‌کند. """
        user = form.get_user()

        # ذخیره اطلاعات نقش مربی در سشن
        self.request.session['is_coach'] = user.is_coach

        # بررسی گزینه "مرا به خاطر بسپار"
        remember_me = self.request.POST.get('remember_me')

        if remember_me:
            self.request.session.set_expiry(60 * 60 * 24 * 365)  # ۱ سال
        else:
            self.request.session.set_expiry(0)  # خروج از سشن بعد از بستن مرورگر

        return super().form_valid(form)

    def get_success_url(self):
        """
        مسیر هدایت بعد از ورود موفق را مشخص می‌کند.
        """
        return reverse_lazy('home:home')  # مسیر دلخواه بعد از لاگین

# Coach logout view
def CoachLogoutView(request):
    # Log out the current user and redirect to login page
    logout(request)
    return redirect('account:login')


# ویو داشبورد مربی
class CoachDashboardView(LoginOnlyForCoachesMixin, View):
    def get(self, request):
        return render(request, 'coach_dashboard.html')
