from django.shortcuts import render
from django.views import View


class IndexView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "portfolioapp/index.html", context={})


class EventListenersView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "portfolioapp/eventlisteners.html", context={})


class CardBattleView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "portfolioapp/CardBattle.html", context={})


class JokePageView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "portfolioapp/jokepage.html", context={})


class AboutMeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "portfolioapp/about-me.html", context={})


class ProjectsView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "portfolioapp/projects.html", context={})
