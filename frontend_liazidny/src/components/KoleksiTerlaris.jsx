// src/components/KoleksiTerlaris.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const KoleksiTerlaris = () => {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'http://127.0.0.1:8000';
  const waNumber = '6281234567890';

  useEffect(() => {
    axios
      .get(`${API_URL}/api/produk/?is_terlaris=true`)
      .then(response => {
        setProduk(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Gagal mengambil data produk terlaris:", err);
        setError("Tidak dapat memuat produk.");
        setLoading(false);
      });
  }, []);

  const handleWhatsAppClick = (e, item) => {
    e.stopPropagation();
    const message = encodeURIComponent(`Halo, saya tertarik dengan produk "${item.nama}".`);
    window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
  };

  if (loading)
    return <div className="text-center py-16">Memuat koleksi terlaris...</div>;
  if (error)
    return <div className="text-center py-16 text-red-500">{error}</div>;

  return (
    <section
      id="koleksi-terlaris"
      className="py-16 px-6 md:px-12"
      style={{ backgroundColor: '#fdfcfb' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-heading mb-10">
          Koleksi Terlaris
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {produk.map(item => (
            <Link
              to={`/produk/${item.id}`}
              key={item.id}
              className="bg-white rounded-lg shadow-lg group flex flex-col overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow text-left">
                <h3 className="text-lg text-body font-semibold mb-2 truncate">
                  {item.nama}
                </h3>
                <p className="text-lg font-bold text-amber-600 mb-4">
                  Rp {new Intl.NumberFormat('id-ID').format(item.harga)}
                </p>

                <button
                  onClick={e => handleWhatsAppClick(e, item)}
                  className="mt-auto w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  Beli via WhatsApp
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KoleksiTerlaris;