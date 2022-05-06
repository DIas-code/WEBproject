from rest_framework import serializers
from api.models import Citata
from .category import CategorySerializer
class CitataSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Citata
        fields = '__all__'
        read_only_fields = ('id', 'year',)

class CitataUpdateSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Citata
        fields = '__all__'
        read_only_fields = ('id', 'year', 'author', 'likes',)