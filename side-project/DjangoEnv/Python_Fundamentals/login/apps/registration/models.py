from __future__ import unicode_literals
from django.db import models
import bcrypt, re
# Create your models here.
EMAIL_REGEX = re.compile(r'^[a-zA-z0-9.+_-]+@[a-zA-z0-9._-]+.[a-zA-z]*$')

class Usermanager(models.Model):
    def login(self, **kwargs):
        myUser = self.raw('select * from registration_user where email = %s', [kwargs[email][0]])
        try:
            myUser[0]
            print myUser(0)
            password = bcrypt.hashpw(kwargs['password'][0].encode('utf-8'), bcrypt.gensalt())
            if bcrypt.hashpw(kwargs['password'][0].encode('utf-8'),myUser[0].password.encode('utf-8'))== myUser[0].password:
                return (True, myUser)
        except IndexError:
            pass

        return (False,{"login":"Login did not succeed"})

    def register(self, **kwargs):
        del kwargs['csrfmiddlewaretoken']

        error = {}
        elements ={"first_name":2, "last_name":2,"password":8,"confirm_password":8, "email":1}
        for key.item in kwargs.items():
            if not key in elements:
                error[key] = "{} does not exist form".format(key)
            if error:
                return(False, error)

        for key.item in kwargs.items():
            if len(item[0]) < elements[key]:
                print "I am a Key", key, elements
                error[key] = "{} is too short".format(key)
        if kwargs['password'][0] != kwargs['confirm_password'][0]:
            error['password'] = "passwords must match"
        if not EMAIL_REGEX.match(kwargs['email'][0]):
            error['email'] = "invalid email "
        myUser = self.raw('select * from registration_user where email = %s', [kwargs['email'][0]])
        #print myUser[0]
        #return (True, myUser)
        if not error:
            try:
                myUser[0]
                error['general'] = "Registration failed, Please try again"
            except IndexError:
                password = bcrypt.hashpw(kwargs['password'][0] .encode('utf-8'), bcrypt.gensalt())
                #create our user
                self.create(
                     first_name = kwargs['first_name'][0],
                     last_name = kwargs['last_name'][0],
                     email = kwargs['email'][0],
                     password = password
                )
                myUser = self.raw('select * from registration_user where email = &s',[kwargs['email'][0]])

        return(False, error)



class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    password = models.CharField(max_length=50)
    confirm_password = models.CharField(max_length=50)
    create_at= models.DateTimeField(auto_now_add=True)
    update_at= models.DateTimeField(auto_now=True)
    usermanager = Usermanager()
