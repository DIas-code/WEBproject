from django.db import models
from django.utils import timezone
from .category import Category
class Citata(models.Model):
    content = models.TextField()
    author = models.CharField(max_length=255)
    year = models.DateTimeField(default=timezone.now)
    likes = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='citatas')

    def __str__(self):
        return f'Quote about "{self.category.name}" from {self.author}'