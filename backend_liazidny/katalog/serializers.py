# katalog/serializers.py
from rest_framework import serializers
from .models import Kategori, Produk

class ProdukSerializer(serializers.ModelSerializer):
    # Kita tambahkan ini agar nama kategori ikut terkirim, bukan hanya ID
    kategori = serializers.StringRelatedField() 

    class Meta:
        model = Produk
        # Pastikan semua field yang dibutuhkan ada di sini
        fields = ['id', 'kategori', 'nama', 'deskripsi', 'gambar', 'harga', 'is_terlaris', 'tanggal_dibuat', 'sales_count', 'detail_produk', 'spesifikasi', 'ukuran']

class KategoriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kategori
        fields = ['id', 'nama']