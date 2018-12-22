from django.contrib import admin
from django.urls import path, include            
from rest_framework import routers               
from addressbook import views                       

router = routers.DefaultRouter()                 
router.register(r'addresses', views.AddressBookView, 'addressbook')

urlpatterns = [
    path('admin/', admin.site.urls),         
    path('api/', include(router.urls))           
]