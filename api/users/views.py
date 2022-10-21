from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError, NotFound
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User

class Login(APIView):
	def post(self, request):
		try:
			user = User.objects.get(email=request.data["email"])
		except User.DoesNotExist:
			raise NotFound("email id is wrong")

		if not user.check_password(request.data["password"]):
			raise ValidationError("password is wrong")

		token = Token.objects.get_or_create(user=user)
		
		return Response({"token": str(token[0])})

class Logout(APIView):
	def get(self, request):
		return Response({"amar": "kanth"})