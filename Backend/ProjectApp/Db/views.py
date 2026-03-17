from django.shortcuts import render
from rest_framework.status import HTTP_200_OK,HTTP_201_CREATED,HTTP_400_BAD_REQUEST
from rest_framework .views import APIView
from .models import ParentDb ,ChildDb
from rest_framework.response import Response

from .serializers import *
# Create your views here.
class ParentAPI(APIView):
    def get(self,request):
        parents=ParentDb.objects.all()
        s_obj=ParentSerializer(parents,many=True)
        
        return Response(s_obj.data,HTTP_200_OK)

        
    def post(self,request):
        s_obj=ParentSerializer(data=request.data)
        if s_obj.is_valid()==True:
            s_obj.save()
            return Response(HTTP_201_CREATED)
        else:
            return Response(HTTP_400_BAD_REQUEST)
        
class ChildAPI(APIView):
    def get(self,request):
        childs=ChildDb.objects.all()
        s_obj=ChildSerializer(childs,many=True)
        
        return Response(s_obj.data,HTTP_200_OK)

        
    def post(self,request):
        s_obj=ChildSerializer(data=request.data)
        if s_obj.is_valid()==True:
            s_obj.save()
            return Response(HTTP_201_CREATED)
        else:
            return Response(HTTP_400_BAD_REQUEST)     
class ModifyParentAPI(APIView):
    def get(self,request,pk):
        parent=ParentDb.objects.get(mobileno=pk)
        s_obj=ParentSerializer(parent)
        return Response(s_obj.data)
    def put(self,request,pk):
        parent=ParentDb.objects.get(mobileno=pk)
        s_obj=ParentSerializer(parent,request.data)
        if s_obj.is_valid()==True:
            s_obj.save()
            return Response(HTTP_200_OK)
class RegisterAPI(APIView):
    def  post(self,request):
        s_obj=UserSerializer(data=request.data)
        if s_obj.is_valid()==True:
            u_obj=s_obj.save()
            u_obj.set_password(s_obj.validated_data['password'])
            u_obj.save()
            return  Response(status=HTTP_201_CREATED)
        else:
            return Response(status=HTTP_400_BAD_REQUEST)



        
    




        














    