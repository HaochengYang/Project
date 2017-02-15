from django.shortcuts import render, redirect
from .models import Course
# Create your views here.
def index(request):
    context={
      "Course":Course.objects.all()
    }
    return render(request,'create_course/index.html',context)

def course(request):
    course = Course.objects.create(title=request.POST['title'],description=request.POST['description'])
    return redirect('/')

def destroy(request,id):
    Course.objects.get(id=id).delete()
    return redirect('/')
