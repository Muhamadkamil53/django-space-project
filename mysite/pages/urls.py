from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('planets/', views.planets, name='planets'),
    path('missions/', views.missions, name='missions'),
    path('gallery/', views.gallery, name='gallery'),
    path('contact/', views.contact, name='contact'),
]