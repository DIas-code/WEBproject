
from django.urls import path
from api.views import CategoryDetailAPIView, category_citatas, category_list
from api.views import CitataDetailAPIView, CitataListAPIView
from api.views import RegisterAPIView
from api.views import CommentListAPIView, CommentDetailAPIView
from .logout import Logout
# from api.views import
from rest_framework_jwt.views import obtain_jwt_token
urlpatterns = [
    path('category/', category_list), #fbv
    path('category/<int:pk>/', CategoryDetailAPIView.as_view()),
    path('category/<int:cat_id>/citatas/', category_citatas),#fbv
    path('citata/', CitataListAPIView.as_view()),
    path('citata/<int:pk>/', CitataDetailAPIView.as_view()),
    path('citata/<int:citatas_id>/comments/', CommentListAPIView.as_view()),
    path('comments/<int:pk>/', CommentDetailAPIView.as_view()),
    path('login/', obtain_jwt_token),
    path('logout/', Logout.as_view()),
    path('register/', RegisterAPIView.as_view())
]