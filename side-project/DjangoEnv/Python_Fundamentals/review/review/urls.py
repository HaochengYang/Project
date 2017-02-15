from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('apps.logreg.urls', namespace='logreg')),
    url(r'^Book/', include('apps.Book.urls', namespace='Book'))
]
