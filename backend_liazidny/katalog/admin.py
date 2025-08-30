# katalog/admin.py
from django.contrib import admin
from .models import Kategori, Produk

@admin.register(Kategori)
class KategoriAdmin(admin.ModelAdmin):
    list_display = ('nama',)

@admin.register(Produk)
class ProdukAdmin(admin.ModelAdmin):
    list_display = ('nama', 'kategori', 'is_terlaris')
    list_filter = ('kategori', 'is_terlaris')
    search_fields = ('nama', 'deskripsi')