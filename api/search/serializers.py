from rest_framework import serializers
from users.models import Weather

class SearchSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Weather
		fields = "__all__"

	def to_representation(self, instance):
		
		return {
			"id": instance.id,
			"city": instance.city.name,
			"temp": instance.temp,
			"pressure": instance.pressure,
			"humidity": instance.humidity,
			"wind_speed": instance.wind_speed,
			"description": instance.description
		}