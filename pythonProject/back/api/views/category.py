from rest_framework.decorators import api_view
from api.models import Citata, Category
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework import generics
from api.serializers import CategorySerializer, CitataSerializer
from rest_framework.permissions import IsAdminUser
class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAdminUser,)

@api_view(['GET'])
def category_list(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def category_citatas(request, cat_id):
    if request.method == 'GET':
        cat_citatas = Citata.objects.filter(category_id=cat_id)
        serializer = CitataSerializer(cat_citatas, many=True)
        return Response(serializer.data)