from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^users$', views.requestion),
    url(r'^new_users$', views.create),
]
