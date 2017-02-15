from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^login$', views.index, name="login"),
    url(r'^logout$', views.index, name="logout"),
    url(r'^success$', views.index, name="success")
]
