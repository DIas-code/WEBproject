from django.db import models
from django.utils import timezone
from .citata import Citata
from django.contrib.auth.models import User

class Comment(models.Model):
    text = models.TextField()
    date = models.DateTimeField(default=timezone.now)
    likes = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    citatas = models.ForeignKey(Citata, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return f'Comment from {self.user}'