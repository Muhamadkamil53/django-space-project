from django.shortcuts import render

# Create your views here.
def planets(request):
    return render(request, 'planets.html')

def gallery(request):
    return render(request, 'gallery.html')

def missions(request):
    return render(request, 'missions.html')

def contact(request):
    return render(request, 'contact.html')

def home(request):
    return render(request, 'home.html')