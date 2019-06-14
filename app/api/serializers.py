from rest_framework import serializers
from . import models

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Posting
        fields = (
            'id',
            'title',
            'description',
            'favorite',
            'created_date'
        )
        