from django.shortcuts import render
from django.views import View


class IndexView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "portfolioapp/index.html", context={})


class EventListenersView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "portfolioapp/eventlisteners.html", context={})
