from django.shortcuts import render
from django.http import HttpResponse
import requests
from .models import Greeting

# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    response = requests.get('https://api.imgflip.com/get_memes')
    memes = response.json()
    memes_data = memes.data.memes
    memes_data[:5]
    return render(request, "index.html", {'memes': memes_data})


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, "db.html", {"greetings": greetings})
