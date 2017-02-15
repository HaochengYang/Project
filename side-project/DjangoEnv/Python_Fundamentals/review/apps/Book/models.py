from __future__ import unicode_literals
from ..logreg.models import User
from django.db import models

# Create your models here.
class Boo_review_Manager(models.Manager):
    def input_check(self, postdata):
        errors = []
        if not len(postdata['title']):
            errors.append('title must enter')
        if not len(postdata['author']):
            errors.append('author must enter')
        if not len(postdata['description']):
            errors.append('description must enter')

        response = {}
        if errors:
            response['status'] = False
            response['errors'] = errors
        else:
            response['status'] = True
            self.create(title=postdata['title'],author=postdata['author'],description=postdata['description'], rating=postdata['rating'])
        return response

        def review_check(self, postdata):
            errors =[]
            if not len(postdata['review']):
                errors.append('review must enter')

            response = {}
            if errors:
                response['status'] = False
                response['errors'] = errors
            else:
                response['status'] = True
                self.create(review=postdata['review'])
            return response
            
class Book_review(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    rating = models.IntegerField()
    user = models.ManyToManyField(User, related_name="user")
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    objects = Boo_review_Manager()

class review(models.Model):
    review = models.TextField()
    create_at = models.DateTimeField()
