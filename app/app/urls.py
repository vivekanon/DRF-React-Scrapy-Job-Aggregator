"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api.views import ListJob, DetailJob, FavoriteJob, FavoriteList, SearchList, ListCompany, CompanyCount

urlpatterns = [
    path('admin/', admin.site.urls),
    path("jobs/", ListJob.as_view(), name="jobs"),
    path("jobs/<int:pk>", DetailJob.as_view(), name="job detail"),
    path("company/", CompanyCount.as_view(), name="company list"),
    path("company/<company_name>", ListCompany.as_view(), name="company"),
    path("", SearchList.as_view(), name="search"),
    path("favorite/<id>", FavoriteJob, name="favorite"),
    path('favorite/', FavoriteList, name="favorite jobs"),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls'))
]
