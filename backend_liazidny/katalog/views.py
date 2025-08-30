# katalog/views.py
from rest_framework import viewsets
from .models import Kategori, Produk
from .serializers import KategoriSerializer, ProdukSerializer

class KategoriViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Kategori.objects.all()
    serializer_class = KategoriSerializer

class ProdukViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Produk.objects.all()
    serializer_class = ProdukSerializer
    ordering_fields = ['harga', 'tanggal_dibuat', 'is_terlaris'] 

    def get_queryset(self):
        """
        Filter produk berdasarkan query parameter 'is_terlaris'.
        Contoh: /api/produk/?is_terlaris=true
        """
        queryset = Produk.objects.all()
        terlaris = self.request.query_params.get('is_terlaris')
        if terlaris is not None and terlaris.lower() == 'true':
            queryset = queryset.filter(is_terlaris=True)
        return queryset