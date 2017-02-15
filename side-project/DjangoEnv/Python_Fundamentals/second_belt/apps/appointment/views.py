from django.shortcuts import render, redirect
from ..logreg.models import User
from .models import Appointment
from django.contrib import messages

# Create your views here.
def index(request):
    context = {
         "Appointment":Appointment.objects.all(),
    }
    return render(request,'appointment/index.html',context)


def create_appointment(request):
    response = Appointment.objects.check_appointment(request.POST)
    if not response['status']:
        for error in response['errors']:
            messages.error(request, error)
    return redirect('index')
