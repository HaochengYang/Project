from django.conf.urls import url
from .models import Course
from . import views
urlpatterns = [
    url(r'^$',views.index, name="index"),
    url(r'^course$',views.course, name="course"),
    url(r'^destroy/(?P<id>\d+)$',views.destroy, name="destroy"),
]
