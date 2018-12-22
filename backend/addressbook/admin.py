from django.contrib import admin
from .models import AddressBook

# Register your models here.

class AddressBookAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'address', 'zip_code')

admin.site.register(AddressBook, AddressBookAdmin)
