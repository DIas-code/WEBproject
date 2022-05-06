from api.serializers import CommentSerializer, CommentModelSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from api.models import Comment
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics
class CommentListAPIView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, citatas_id):
        comments = Comment.objects.filter(citatas_id=citatas_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    def post(self, request, citatas_id):
        request.data['citatas_id'] = citatas_id
        request.data['user_id'] = request.user.pk
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)

class CommentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    permission_classes = (IsAuthenticated,)
    serializer_class = CommentModelSerializer

    def delete(self, request, *args, **kwargs):
        if request.user != self.get_object().user:
            return Response(status=status.HTTP_403_FORBIDDEN)
        return self.destroy(request, *args, **kwargs)

class CommentsAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = CommentModelSerializer

