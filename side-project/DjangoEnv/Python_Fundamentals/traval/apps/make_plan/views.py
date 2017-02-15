from django.shortcuts import render
from .models import Trip, Activity
# Create your views here.
def index(request):
    return render(request, 'make_plan/index.html')
