from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from django.contrib import messages
from .models import User

# Create your views here.
def index(request):
    return render(request, 'registration/index.html')

def register(request):
    User.Usermanager.register(request.POST)
    return render(request, 'registration/index.html')

def login(request):
    return render(request, 'registration/index.html')

def logout(request):
    request.session['loggedin'] = False #sets logged in status to false
    del request.session['user'] #deletes the user's information from session
    return redirect(reverse('registration:index'))
