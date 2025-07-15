# train/templatetags/train_tags.py
from django import template

register = template.Library()

@register.filter
def to_persian_category(value):
    # Implement the logic to convert the category to Persian
    persian_categories = {
        'chest': 'سینه',
        'shoulders': 'سرشانه',
        'arms': 'بازوها',
        'back': 'پشت/زیربغل',
        'legs': 'پا',
        'core': 'شکم',
        'cardio': 'هوازی',
        'warmup_cooldown': 'گرم/سرد'
    }
    return persian_categories.get(value, value)

@register.filter
def sort_sets_choices(choices):
    """
    Sorts the SETS_CHOICES so that time-based options (دقیقه and ثانیه) appear at the end.
    """
    time_options = []
    normal_options = []
    
    for value, label in choices:
        if 'دقیقه' in value or 'ثانیه' in value:
            time_options.append((value, label))
        else:
            normal_options.append((value, label))
    
    # Return normal options first, then time options
    return normal_options + time_options