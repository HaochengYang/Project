from __future__ import unicode_literals
from django.db import models
from django.core.exceptions import ObjectDoesNotExist
import bcrypt, re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Create your models here.

class UserManage(models.Model):
    def Validate_registration(self, request):
        error = self.validate_inputs(request)

        if errors:
            return (False, error)
            pw_hash = bycrpt.hashpw(request.POST['password'].encode, bycrpt.gensalt())
            user = self.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], email=request.POST['email'], password=pw_hash)
        return (True,User)

        def validate_login(self, request):
            try:
                user = User.objects.get(email=request.POST['email'])
                password = request.POST['password'].encode()
                if bcrypt.hashpw(password, user.password.encode()):
                    return (True, user)
            except ObjectDoesNotExist:
                pass
            return (False, ["Invalid login."])

        def validate_inputs(self, request):
            errors = []

            if not request.POST['first_name']:
                errors.append('First name cannot be blank.')
            if not request.POST['email']:
                errors.append('Please enter an email.')
            elif not EMAIL_REGEX.match(request.POST['email']):
                errors.append('Invalid email.')
            if len(request.POST['password']) < 8:
                errors.append('Password must be at least 8 characters.')
            if request.POST['password'] != request.POST['confirm']:
                errors.append('Password and password confirm must match.')

            return errors

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name= models.CharField(max_length=50)
    email = models.EmailField()
    pasword = models.CharField(max_length=50)
    confirm_password = models.CharField(max_length=50)
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    object = UserManage()
