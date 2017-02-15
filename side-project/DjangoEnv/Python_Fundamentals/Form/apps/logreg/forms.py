from django import forms
from django,forms import ModleForm
from .models import User

class RegistrationForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name','email','password','confirm_password')
form = RegistrationForm()
