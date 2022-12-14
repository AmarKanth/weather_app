from django.contrib.auth.models import AnonymousUser
from rest_framework.authentication import TokenAuthentication as TA
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import ValidationError

class TokenAuthentication(TA):
	"""
	This custom wrapper skip all the public urls from authentication.
	"""

	def authenticate(self, request):
		auth = request.META.get('HTTP_AUTHORIZATION')
		key = auth.split(" ")
		skip_urls = ['/api/login/']

		if request.path in skip_urls:
			return (AnonymousUser, None)

		token = Token.objects.select_related('user').filter(key=key[1])

		if not token:
			raise ValidationError("Invalid Token")

		return token[0].user, token