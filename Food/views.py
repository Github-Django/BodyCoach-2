from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView

from account.mixins import LoginOnlyForCoachesMixin
from .models import Food, Meal, MealFood, NutritionPlan
from .forms import FoodForm, MealForm, NutritionPlanForm, MealFoodFormset


# --- Food Views ---
class FoodListView(LoginOnlyForCoachesMixin,ListView):
    model = Food
    template_name = 'foods/food_list.html'
    context_object_name = 'foods'

    def get_queryset(self):
        queryset = super().get_queryset()
        name_filter = self.request.GET.get('name', '').strip()
        if name_filter:
            queryset = queryset.filter(name__icontains=name_filter)
        return queryset

class FoodCreateView(LoginOnlyForCoachesMixin,CreateView):
    model = Food
    form_class = FoodForm
    template_name = 'foods/form_template.html'
    success_url = reverse_lazy('food:food_list')


class FoodUpdateView(LoginOnlyForCoachesMixin,UpdateView):
    model = Food
    form_class = FoodForm
    template_name = 'foods/form_template.html'
    success_url = reverse_lazy('food:food_list')


class FoodDeleteView(LoginOnlyForCoachesMixin,DeleteView):
    model = Food
    template_name = 'foods/confirm_delete.html'
    success_url = reverse_lazy('food:food_list')


# --- Meal Views ---
class MealListView(LoginOnlyForCoachesMixin,ListView):
    model = Meal
    template_name = "foods/meal_list.html"
    context_object_name = "meals"

    def get_queryset(self):
        queryset = super().get_queryset().prefetch_related('mealfood_set__food')
        name_filter = self.request.GET.get('name', '').strip()
        if name_filter:
            queryset = queryset.filter(description__icontains=name_filter)
        return queryset

class MealCreateView(LoginOnlyForCoachesMixin,CreateView):
    model = Meal
    form_class = MealForm
    template_name = "foods/meal_form.html"
    success_url = reverse_lazy('food:meal_list')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['mealfood_formset'] = MealFoodFormset(self.request.POST or None)
        return context

    def form_valid(self, form):
        context = self.get_context_data()
        mealfood_formset = context['mealfood_formset']
        if form.is_valid() and mealfood_formset.is_valid():
            self.object = form.save()
            mealfood_formset.instance = self.object
            mealfood_formset.save()
            return redirect(self.success_url)
        return self.render_to_response(self.get_context_data(form=form))


class MealUpdateView(LoginOnlyForCoachesMixin,UpdateView):
    model = Meal
    form_class = MealForm
    template_name = "foods/meal_form.html"
    success_url = reverse_lazy('food:meal_list')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['mealfood_formset'] = MealFoodFormset(self.request.POST or None, instance=self.object)
        return context

    def form_valid(self, form):
        context = self.get_context_data()
        mealfood_formset = context['mealfood_formset']
        if form.is_valid() and mealfood_formset.is_valid():
            self.object = form.save()
            mealfood_formset.instance = self.object
            mealfood_formset.save()
            return redirect(self.success_url)
        return self.render_to_response(self.get_context_data(form=form))


class MealDeleteView(LoginOnlyForCoachesMixin,DeleteView):
    model = Meal
    template_name = "foods/meal_confirm_delete.html"
    success_url = reverse_lazy('food:meal_list')


# --- Nutrition Plan Views ---



from django.core.serializers import serialize
import json

from django.urls import reverse_lazy

class NutritionPlanCreateView(LoginOnlyForCoachesMixin,CreateView):
    model = NutritionPlan
    form_class = NutritionPlanForm
    template_name = 'foods/form_template_nutrition.html'

    def get_success_url(self):
        # پس از ایجاد، به نمای جزئیات هدایت می‌شود
        return reverse_lazy('food:nutrition_plan_detail', kwargs={'pk': self.object.pk})

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        meals = Meal.objects.prefetch_related('mealfood_set__food').all()
        meals_data = []

        for meal in meals:
            foods = meal.mealfood_set.all()
            food_list = [{'name': mf.food.name, 'quantity': mf.quantity} for mf in foods]
            meals_data.append({
                'id': meal.id,
                'time_of_day': meal.get_time_of_day_display(),
                'description': meal.description,
                'foods': food_list,
            })

        context['meals_data'] = json.dumps(meals_data)
        return context


class NutritionPlanUpdateView(LoginOnlyForCoachesMixin,UpdateView):
    model = NutritionPlan
    form_class = NutritionPlanForm
    template_name = 'foods/form_template_nutrition.html'
    success_url = reverse_lazy('nutrition_plan_list')


class NutritionPlanDetailView(LoginOnlyForCoachesMixin,DetailView):
    model = NutritionPlan
    template_name = 'foods/nutrition_plan_detail.html'
    context_object_name = 'nutrition_plan'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Include detailed data about meals and foods
        meals = self.object.meals.prefetch_related('mealfood_set__food')
        context['meals'] = meals
        return context

class NutritionPlanDeleteView(LoginOnlyForCoachesMixin,DeleteView):
    model = NutritionPlan
    template_name = 'foods/confirm_delete.html'
    success_url = reverse_lazy('nutrition_plan_list')
