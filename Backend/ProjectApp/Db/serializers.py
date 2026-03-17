from rest_framework.serializers import ModelSerializer
from .models import ParentDb,ChildDb
from django.contrib.auth.models import User
class UserSerializer(ModelSerializer):
    class Meta:
        model=User
        fields=['username','password']
class ParentSerializer(ModelSerializer):
    class Meta:
        model=ParentDb
        fields='__all__'
class ChildSerializer(ModelSerializer):
    class Meta:
        model=ChildDb
        fields='__all__'
