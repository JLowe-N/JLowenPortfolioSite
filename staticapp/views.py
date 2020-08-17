import logging

from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
from django.shortcuts import render


def punk_Api_beer_app(request):
    return render(None, 'PunkAPIBeerApp/index.html')


class PicSomeView(View):
    def get(self, request):
        try:
            with open(os.path.join(settings.REACT_APP_DIR, 'index.html')) as f:
                return HttpResponse(f.read())
        except FileNotFoundError:
            logging.exception('Production build of app not found')
            return HttpResponse(
                status=501,
            )
