# katalog/models.py
from django.db import models
from django.utils import timezone

class Kategori(models.Model):
    nama = models.CharField(max_length=100)
    def __str__(self):
        return self.nama
    class Meta:
        verbose_name_plural = "Kategori"

class Produk(models.Model):
    kategori = models.ForeignKey(Kategori, related_name='produk', on_delete=models.CASCADE)
    nama = models.CharField(max_length=200)
    deskripsi = models.TextField()
    gambar = models.ImageField(upload_to='produk/')
    harga = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    tanggal_dibuat = models.DateTimeField(default=timezone.now)
    is_terlaris = models.BooleanField(default=False, help_text="Centang jika produk ini adalah koleksi terlaris")
    sales_count = models.IntegerField(default=0)
    detail_produk = models.TextField(blank=True, null=True)
    spesifikasi   = models.TextField(blank=True, null=True)
    ukuran        = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.nama
    class Meta:
        verbose_name_plural = "Produk"