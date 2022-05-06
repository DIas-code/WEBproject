from rest_framework import serializers
from api.models import Comment
from .citata import CitataSerializer
from .user import UserSerializer

class CommentSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    text = serializers.CharField()
    date = serializers.DateTimeField(read_only=True)
    likes = serializers.IntegerField(read_only=True)
    user = UserSerializer(read_only=True)
    citatas = CitataSerializer(read_only=True)
    user_id = serializers.IntegerField(write_only=True)
    citatas_id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        comment = Comment(**validated_data)
        comment.save()
        return comment

class CommentModelSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    citatas = CitataSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('id', 'date')
