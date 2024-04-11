from django.urls import path
from . import views

urlpatterns = [
    path('colorpicker/', views.color_picker, name='color_picker'),
]
