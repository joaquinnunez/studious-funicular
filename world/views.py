from django.http import JsonResponse
from world.models import Country 
import logging

def continents(request):
    # TODO: sort
    continents = [country.continent for country in Country.objects.distinct('continent')]
    return JsonResponse({'continents': continents})

def regions(request, continent):
    # TODO: sort
    regions = [country.region for country in Country.objects.distinct('region').filter(continent=continent)]
    return JsonResponse({'regions': regions})

def countries(request, region):
    # TODO: sort
    countries = [country.name for country in Country.objects.filter(region=region)]
    return JsonResponse({'countries': countries})
