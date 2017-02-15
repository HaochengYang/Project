from __future__ import unicode_literals
from django.core.exceptions import ValidationError
from django.db import models

# Create your models here.
def validateEmpty():
    if len() < 3:
        raise ValidationError(
        )
    pass


class User(models.Model):
    first_name = models.CharField(max_length=255,validators=[validateEmpty])
    last_name = models.CharField(max_length=255,validators=[validateEmpty])
    email = models.EmailField()
    password = models.CharField(max_length=100,validators=[validateEmpty])
    confirm_password = models.CharField(max_length=100,validators=[validateEmpty])
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.first_name
