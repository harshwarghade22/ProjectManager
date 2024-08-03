from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


# import ProjectView To URL
from api.views import ProductViewSet
from accounts.views import SignupView

# import Routers conf from rest frameework
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


route = routers.DefaultRouter()
route.register("", ProductViewSet, basename='projectview')



urlpatterns = [
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
    path('api/accounts/',include('accounts.urls')),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
