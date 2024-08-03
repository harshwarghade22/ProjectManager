from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProjectSerializer
from rest_framework.permissions import IsAuthenticated
# Create your views here.

from.models import Project

class ProductViewSet(viewsets.ModelViewSet):
    # permission_classes=[IsAuthenticated]
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer




