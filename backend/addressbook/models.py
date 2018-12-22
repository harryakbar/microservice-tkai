from django.db import models
from phone_field import PhoneField

# Create your models here.

class AddressBook(models.Model):
    name = models.CharField(max_length=120)
    phone = PhoneField(blank=True,help_text="Contact phone number")
    address = models.TextField()
    zip_code = models.CharField(max_length=5)

    def __str__(self):
        return self.name
