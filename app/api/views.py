from rest_framework.response import Response
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from .serializers import JobSerializer
from .models import Posting

class ListJobsPagination(PageNumberPagination):
    page_size = 20

class ListJobs(generics.ListAPIView):
    pagination_class = ListJobsPagination
    serializer_class = JobSerializer
    def get_queryset(self):
        jobs = Posting.objects.all()
        return jobs