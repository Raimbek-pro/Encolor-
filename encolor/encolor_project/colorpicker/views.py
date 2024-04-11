from django.shortcuts import render

def color_picker(request):
    return render(request, 'color_picker.html')
