import logging
import os

from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
from django.shortcuts import render


def punk_Api_beer_app(request):
    return render(None, 'PunkAPIBeerApp/index.html')


class PicSomeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, "picsome/index.html", context={})
