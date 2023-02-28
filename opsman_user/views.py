from django.shortcuts import render
from .models import CustomUser

# Create your views here.
def opsman_user(request):
    return render(request, 'opsman_user/opsman_user.html')
