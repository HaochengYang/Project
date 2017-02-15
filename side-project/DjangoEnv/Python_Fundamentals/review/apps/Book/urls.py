from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^result$', views.result, name="result"),
    url(r'^show/$', views.show, name="show"),
    url(r'^add/$', views.add, name="add"),
    url(r'^create_book/$', views.create_book, name="create_book"),
]
