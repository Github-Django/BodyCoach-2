from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.views import View
from account.mixins import LoginOnlyForCoachesMixin


class HomeView(View):
    def get(self, request):
        return render(request, 'home/index.html')
