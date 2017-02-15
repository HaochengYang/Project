from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
