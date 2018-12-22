from rest_framework import serializers
from .models import AddressBook

class AddressBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddressBook
        fields = ('id', 'name', 'phone', 'address', 'zip_code')