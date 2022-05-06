from django.contrib import admin
from .models import category, citata, comment
# Register your models here.
admin.site.register(citata.Citata)
admin.site.register(category.Category)
admin.site.register(comment.Comment)