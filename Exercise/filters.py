import django_filters
from .models import Exercise

class ExerciseFilter(django_filters.FilterSet):
    class Meta:
        model = Exercise
        fields = {
            'name': ['icontains'],
        }