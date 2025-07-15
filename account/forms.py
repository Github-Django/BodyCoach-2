from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate


from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate

class CoachLoginForm(AuthenticationForm):
    """
    فرم سفارشی برای ورود مربیان، همراه با گزینه 'مرا به خاطر بسپار'
    """
    remember_me = forms.BooleanField(required=False, initial=True, label="مرا به خاطر بسپار")

    def clean(self):
        """
        اعتبارسنجی نام کاربری و رمز عبور و بررسی اینکه کاربر مربی باشد.
        """
        username, password = self._get_cleaned_credentials()
        user = authenticate(username=username, password=password)

        self._validate_user(user)

        return super().clean()

    def _get_cleaned_credentials(self):
        """ دریافت نام کاربری و رمز عبور از داده‌های تمیز‌شده فرم """
        return self.cleaned_data.get('username'), self.cleaned_data.get('password')

    def _validate_user(self, user):
        """ بررسی اینکه آیا کاربر وجود دارد و آیا مربی است؟ """
        if user is None:
            raise forms.ValidationError("نام کاربری یا رمز عبور وارد شده نادرست است.", code='invalid_login')
        if not user.is_coach:
            raise forms.ValidationError("شما به عنوان مربی مجاز نیستید وارد شوید.", code='invalid_login')
