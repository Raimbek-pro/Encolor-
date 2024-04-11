from django.urls import path, include

urlpatterns = [
    path('core/', include('colorpicker.urls')),
    # Other URL patterns
]
