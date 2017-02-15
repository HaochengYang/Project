from __future__ import unicode_literals
from datetime import date, datetime
from django.db import models


# Create your models here.
class TripManager(models.Manager):
    pass
class TripManager(models.Manager):
    pass


class Activity(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateField(auto_now_add=False, auto_now= False)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

class Trip(models.Model):
    location = models.CharField(max_length=255)
    hotel = models.CharField(max_length=255)
    activity = models.ManyToManyField(Activity,related_name="activity")
    arrival = models.DateField(auto_now_add=False, auto_now= False)
    leave = models.DateField(auto_now_add=False, auto_now= False)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    objects = TripManager()
