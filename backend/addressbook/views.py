from django.shortcuts import render
from rest_framework import viewsets    
from .serializers import AddressBookSerializer
from .models import AddressBook               

class AddressBookView(viewsets.ModelViewSet): 
    serializer_class = AddressBookSerializer    
    queryset = AddressBook.objects.all()  