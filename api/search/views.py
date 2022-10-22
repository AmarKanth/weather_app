from rest_framework.views import APIView
from rest_framework.response import Response
from search.serializers import SearchSerializer
from users.models import Weather

class SearchView(APIView):
	def get(self, request):
		search_term = request.GET.get("q")
		weather = Weather.objects.filter(city__findname__contains=search_term.upper()).select_related("city")[:5]
		serializer = SearchSerializer(weather, many=True)
		return Response(serializer.data)