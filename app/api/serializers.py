from rest_framework import serializers
from . import models


class JobSerializer(serializers.ModelSerializer):
    created_date = serializers.DateTimeField(format="%Y-%m-%d", required=False, read_only=True)
    class Meta:
        ordering = ['-id']
        model = models.Posting
        fields = (
            'id',
            'company_name',
            'title',
            'description',
            'favorite',
            'created_date',
        )


class CompanySerializer(serializers.ModelSerializer):
    companies = serializers.IntegerField()

    class Meta:

        model = models.Posting
        fields = (
            'id',
            'companies',
            'company_name',
        )
