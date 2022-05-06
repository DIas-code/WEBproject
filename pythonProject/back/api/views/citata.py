from rest_framework import generics
from api.models import Citata
from api.serializers import CitataSerializer, CitataUpdateSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

class CitataListAPIView(generics.ListCreateAPIView):
    queryset = Citata.objects.all()
    serializer_class = CitataSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)



class CitataDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Citata.objects.all()
    serializer_class = CitataUpdateSerializer
    permission_classes = (IsAdminUser,)