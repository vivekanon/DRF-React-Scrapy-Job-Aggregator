from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework import generics, status, filters
from rest_framework.response import Response
from rest_framework.exceptions import NotFound as NotFoundError
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import api_view
from .serializers import JobSerializer
from .models import Posting

# Pagination for job listings


class ListJobPagination(PageNumberPagination):
    page_size = 20  # Number of objects to return in one page

# List view for job postings with job pagination limit of 20
@api_view(['GET'])
def ListJob(request):
    jobs = Posting.objects.all()
    serializer = JobSerializer(jobs, many=True)
    pagination_class = ListJobPagination
    return Response(serializer.data)

# detail view for job postings


class DetailJob(generics.RetrieveAPIView):
    pagination_class = ListJobPagination
    serializer_class = JobSerializer
    lookup_fields = ('id')

    def get_queryset(self, **kwargs):
        jobs = Posting.objects.all()
        return jobs

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


class SearchList(generics.ListAPIView):
    queryset = Posting.objects.all()
    serializer_class = JobSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('title', 'description')
