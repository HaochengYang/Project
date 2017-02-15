from django.shortcuts import render, redirect

def index(request):
   return render(request, 'request_form/index.html')

def requestion(request):
   print(request.method)
   return render(request, 'request_form/requestion.html')

def create(request):
    print(request.method)
    if request.method == "POST":
        print('*'*50)
        print(request.POST)
        print('*'*50)
        request.session['name'] = request.POST['First_name']
        return redirect('/')
    else:
        return redirect('/')


# Create your views here.
