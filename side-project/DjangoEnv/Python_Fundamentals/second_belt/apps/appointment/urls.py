from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name ='index'),
    url(r'^create_appointment$', views.create_appointment, name='create_appointment')
]
