from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf.urls import url

from portfolioapp.views import IndexView, EventListenersView, CardBattleView, \
    JokePageView, AboutMeView, ProjectsView

from staticapp.views import punk_Api_beer_app, PicSomeView

urlpatterns = [
    #url(r'picsome/', PicSomeView.as_view()),
    path('picsome/', PicSomeView.as_view()),
    path('admin/', admin.site.urls),
    path('about-me', AboutMeView.as_view()),
    path('projects', ProjectsView.as_view()),
    path('eventlisteners', EventListenersView.as_view()),
    path('cardbattle', CardBattleView.as_view()),
    path('jokepage', JokePageView.as_view()),
    path('punk-api-beer-app', punk_Api_beer_app),
    path('', IndexView.as_view())
]
