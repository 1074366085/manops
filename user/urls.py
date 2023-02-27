from django.urls import path
from . import views
urlpatterns = [
    path('', views.user_page.as_view(), name='user-page')
]