from django.db import models

# Create your models here.
class Greeting(models.Model):
    when = models.DateTimeField("date created", auto_now_add=True)


class Cookie(models.Model):
    user = models.CharField(max_length=200)
    consent = models.BooleanField(default=False)