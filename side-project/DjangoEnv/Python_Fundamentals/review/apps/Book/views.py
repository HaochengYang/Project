from django.shortcuts import render, redirect
from .models import Book_review
from ..logreg.models import User
from django.core.urlresolvers import reverse
from django.contrib import messages
# Create your views here.
def index(request):
    contex={
      "Book":Book_review.objects.all()
    }
    return render(request,'Book/index.html', contex)

def result(request):
    contex={
      "Book":Book_review.objects.all()
    }
    return render(request,'Book/result.html', contex)

def show(request):
    contex={
      "Book":Book_review.objects.all()
    }
    return render(request,'Book/show.html', contex)

def add(request):
    contex={
      "Book":Book_review.objects.all(),
      "User":User.objects.all()
    }
    return render(request,'Book/add.html', contex)

def create_book(request):
    response = Book_review.objects.input_check(request.POST)
    if not response['status']:
        for error in response['errors']:
            messages.error(request, error)
    return redirect(reverse('Book:result'))

def delete(request, id):
    Book.review.get(id=id).delete()
    return redirect(reverse('Book:result'))
