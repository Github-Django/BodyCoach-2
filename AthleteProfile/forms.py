from django import forms
from .models import AthleteProfile

from django import forms
from .models import AthleteProfile
import re


class PhoneNumberField(forms.CharField):
    def clean(self, value):
        if not value:
            return value

        # Remove any spaces, dashes, or other characters
        value = re.sub(r'[^\d+]', '', value)

        # Remove leading zero if exists
        if value.startswith('0'):
            value = value[1:]

        # If number doesn't start with +98, add it
        if not value.startswith('+98'):
            value = '+98' + value

        # Validate length (should be +98 plus 10 digits)
        if len(value) != 13:
            raise forms.ValidationError("شماره تلفن باید ۱۰ رقم باشد")

        # Validate format using regex
        if not re.match(r'^\+989\d{9}$', value):
            raise forms.ValidationError("فرمت شماره تلفن صحیح نیست")

        return value


class AthleteProfileForm(forms.ModelForm):
    mobile_phone = PhoneNumberField(
        label='شماره تلفن همراه',
        help_text='شماره را بدون صفر وارد کنید. مثال: 9123456789',
        required=True
    )
    telegram_whatsapp_phone = PhoneNumberField(
        label='شماره تلگرام / واتساپ',
        help_text='شماره را بدون صفر وارد کنید. مثال: 9123456789',
        required=True
    )

    class Meta:
        model = AthleteProfile
        fields = [
            'full_name', 'age', 'weight', 'height', 'injuries', 'training_history',
            'motivation_goal', 'mobile_phone', 'telegram_whatsapp_phone', 'body_test_file', 'supplements',
            'gym_name', 'referrer'
        ]
        labels = {
            'full_name': 'نام کامل',
            'age': 'سن',
            'weight': 'وزن (کیلوگرم)',
            'height': 'قد (سانتی‌متر)',
            'injuries': 'آسیب‌دیدگی‌ها',
            'training_history': 'سابقه تمرین',
            'motivation_goal': 'هدف انگیزه ورزشی',
            'body_test_file': 'فایل تست بادی',
            'supplements': 'مصرف مکمل‌ها و داروها',
            'gym_name': 'نام باشگاه',
            'referrer': 'معرف',
        }

    def clean_mobile_phone(self):
        return self.cleaned_data['mobile_phone']

    def clean_telegram_whatsapp_phone(self):
        return self.cleaned_data['telegram_whatsapp_phone']