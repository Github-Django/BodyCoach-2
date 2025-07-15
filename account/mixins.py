from django.contrib.auth.mixins import UserPassesTestMixin
from django.http import Http404

class LoginOnlyForCoachesMixin(UserPassesTestMixin):
    """
    این میکسین تضمین می‌کند که فقط کاربران احراز هویت‌شده‌ای که در لیست نقش‌های مجاز هستند، به ویو دسترسی داشته باشند.
    """

    allowed_roles = ['is_coach', 'is_superuser', 'is_staff']  # تعریف نقش‌های مجاز

    def test_func(self):
        """
        بررسی می‌کند که آیا کاربر مجاز است به این ویو دسترسی داشته باشد.
        """
        user = self.request.user  # دریافت کاربر

        if user.is_authenticated:  # بررسی احراز هویت کاربر
            return any(getattr(user, role, False) for role in self.allowed_roles)  # بررسی نقش کاربر

        return False  # در غیر این صورت، دسترسی رد می‌شود.

    def handle_no_permission(self):
        """
        در صورت عدم دسترسی، خطای 404 برمی‌گرداند.
        """
        raise Http404("دسترسی غیرمجاز! شما باید مربی باشید.")


from django.core.exceptions import PermissionDenied
from functools import wraps


def login_only_for_coaches(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        user = request.user
        allowed_roles = ['is_coach', 'is_superuser', 'is_staff']

        if user.is_authenticated and any(getattr(user, role, False) for role in allowed_roles):
            return view_func(request, *args, **kwargs)

        raise PermissionDenied("دسترسی غیرمجاز! شما باید مربی باشید.")

    return _wrapped_view
