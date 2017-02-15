from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.index, name="index"),
    url(r'^return_answer$',views.return_answer, name="return_answer")
]
