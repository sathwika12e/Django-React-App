from . import views
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
urlpatterns=[
    path("parentapi/",views.ParentAPI.as_view()),
    path("childapi/",views.ChildAPI.as_view()),
    path("modifyparentapi/<int:pk>/",views.ModifyParentAPI.as_view()),
    path("registerapi/",views.RegisterAPI.as_view()),
    path("loginapi/",TokenObtainPairView.as_view())
]