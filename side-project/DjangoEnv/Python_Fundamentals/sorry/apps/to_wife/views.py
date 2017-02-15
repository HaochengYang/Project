from django.shortcuts import render, redirect
from django.core.urlresolvers import reverse
from .models import Answer
from django.contrib import messages
# Create your views here.
def index(request):
    context = {
             "answers":Answer.objects.all()
    }
    return render(request, 'to_wife/index.html', context)

def return_answer(request):
    response = Answer.objects.answer_check(request.POST)
    if not response['status']:
       for error in response['error']:
           messages.error(request,error)
    if response['status']:
        return render(request, 'to_wife/success.html')
    return redirect(reverse('index'))
