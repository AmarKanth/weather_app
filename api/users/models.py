from django.db import models

class City(models.Model):
	name = models.CharField(max_length=200)
	findname = models.CharField(max_length=200)
	country = models.CharField(max_length=200)
	lon = models.CharField(max_length=200)
	lat = models.CharField(max_length=200)

class Weather(models.Model):
	temp = models.CharField(max_length=200)
	temp_min = models.CharField(max_length=200)
	temp_max = models.CharField(max_length=200)
	pressure = models.CharField(max_length=200)
	humidity = models.CharField(max_length=200)
	wind_speed = models.CharField(max_length=200)
	description = models.CharField(max_length=200)
	city = models.ForeignKey(City, on_delete=models.CASCADE)