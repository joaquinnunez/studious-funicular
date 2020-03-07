from django.http import JsonResponse
from world.models import Country, City
from django.forms.models import model_to_dict
import logging

def countries(request):
  countries = [model_to_dict(country) for country in Country.objects.all()]
  return JsonResponse({'countries': countries})

def cities(request, country_code):
  cities = [model_to_dict(city) for city in City.objects.filter(countrycode=country_code)]
  return JsonResponse({'cities': cities})
