from __future__ import unicode_literals
from django.db import models

class AnserManager(models.Manager):
    def answer_check(self, postdata):
        error =[]
        if len(postdata['answer']) ==2:
            error.append('Give me another chance')

        response ={}
        if len(postdata['answer']) == 3:
            response['status'] = True
            self.create(answer=postdata['answer'])
        else:
            response['status'] = False
            response['error'] = error
        return response
# Create your models here.
class Answer(models.Model):
    answer = models.CharField(max_length=255)
    create_at = models.DateTimeField(auto_now_add=True)
    uopdate_at = models.DateTimeField(auto_now=True)
    objects = AnserManager()
