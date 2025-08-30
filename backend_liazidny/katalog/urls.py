# katalog/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import KategoriViewSet, ProdukViewSet

router = DefaultRouter()
router.register(r'kategori', KategoriViewSet)
router.register(r'produk', ProdukViewSet)

urlpatterns = [
    path('', include(router.urls)),
]