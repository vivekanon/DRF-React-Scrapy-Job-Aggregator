from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import generics, status, filters
from rest_framework.response import Response
from rest_framework.exceptions import NotFound as NotFoundError
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import api_view
from .serializers import JobSerializer, CompanySerializer
from .models import Posting
from django.db.models import Count, Sum
# Pagination for job listings


class ListJobPagination(PageNumberPagination):
    page_size = 20  # Number of objects to return in one page

# List view for job postings with job pagination limit of 20


class ListJob(generics.ListAPIView):
    pagination_class = ListJobPagination
    serializer_class = JobSerializer

    def get_queryset(self, **kwargs):
        jobs = Posting.objects.all()
        return jobs

# detail view for job postings


class DetailJob(generics.RetrieveAPIView):
    pagination_class = ListJobPagination
    serializer_class = JobSerializer
    lookup_fields = ('id')

    def get_queryset(self, **kwargs):
        jobs = Posting.objects.all()
        return jobs

# Search view for job postings


class SearchList(generics.ListAPIView):
    pagination_class = ListJobPagination
    queryset = Posting.objects.all()
    serializer_class = JobSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'description')

# view for listing popular companies


class ListCompany(generics.ListAPIView):
    pagination_class = ListJobPagination
    serializer_class = JobSerializer

    def get_queryset(self):
        company = self.kwargs['company_name']
        return Posting.objects.all().filter(company_name=company)


class CompanyCount(generics.ListAPIView):
    pagination_class = ListJobPagination
    serializer_class = CompanySerializer
    queryset = Posting.objects.all()

    def get_queryset(self):
        return Posting.objects.values('company_name').annotate(
            companies=Count('company_name'),
        ).order_by('-companies')[:20]


# View for adding/removing as favorite
@api_view(['GET'])
def FavoriteJob(request, id):
    job = get_object_or_404(Posting, id=id)
    # Check if user is in favorite list on model & remove if so.
    if job.favorite.filter(id=request.user.id).exists():
        job.favorite.remove(request.user)
        return Response({"Favorite": "Removed"}, status=status.HTTP_200_OK)
    # else add if not in favorite list
    else:
        user = request.user
        job.favorite.add(user)
        return Response({"Favorite": "Added"}, status=status.HTTP_200_OK)

# Request current user, get favorite posts for user & filter JobSerializer for posts.
@api_view(['GET'])
def FavoriteList(request):
    user = request.user
    favorite_posts = user.favorite.all()
    serializer = JobSerializer(favorite_posts, many=True)
    return Response({"Favorites": serializer.data}, status=status.HTTP_200_OK)
