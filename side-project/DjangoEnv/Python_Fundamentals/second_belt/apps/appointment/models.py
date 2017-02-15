from __future__ import unicode_literals
from datetime import datetime
from django.db import models
from ..logreg.models import User

# Create your models here.
class AppointmentManager(models.Manager):
    def check_appointment(self,postdata):
        errors =[]
        response = {}

        if not len(postdata['task']):
            errors.append('Please fill out the task field ')
        if not len(postdata['date']):
            errors.append('Please fill out the date field ')

        if errors:
            response['status'] = False
            response['errors'] = errors
        else:
            response['status'] = True
            self.create(task=postdata['task'],date=postdata['date'])
        return response



class Appointment(models.Model):
    task = models.CharField(max_length=255)
    date = models.DateField(auto_now=False, auto_now_add=False)
    user = models.OneToOneField(User)
    create_at = models.DateTimeField(auto_now_add= True)
    update_at = models.DateTimeField(auto_now = True)
    objects = AppointmentManager()
