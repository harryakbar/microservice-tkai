from django.db import models

# Create your models here.

class AddressBook(models.Model):
    name = models.CharField(max_length=120)
    phone = models.CharField(max_length=12)
    address = models.TextField()
    zip_code = models.CharField(max_length=5)

    def __str__(self):
        return self.name
