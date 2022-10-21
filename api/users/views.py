from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class Login(APIView):
	def post(self, reuquest):
		user = authenticate(
			request=reuquest,
			username=reuquest.data["username"], 
			password=reuquest.data["password"]
		)

		if not user:
			raise ValidationError("given credentials are wrong")

		token = Token.objects.get_or_create(user=user)
		
		return Response({"token": str(token[0])})

class Logout(APIView):
	def get(self, reuquest):
		return Response({"amar": "kanth"})