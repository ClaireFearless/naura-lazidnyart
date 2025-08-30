// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <section id="kontak" className="py-16 px-6 md:px-12 bg-base text-body">
      <div className="max-w-4xl mx-auto text-center"> {/* Mengatur lebar konten dan menengahkan */}
        <h2 className="text-4xl font-bold text-heading mb-12">Hubungi Kami</h2>
        
        {/* Informasi Kontak Saja */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"> {/* Menambahkan max-w dan mx-auto untuk menengahkan box */}
          <h3 className="text-2xl font-semibold text-body mb-6">Informasi Kontak Lia Zidny Art</h3>
          <ul className="space-y-4 text-body text-base mb-8">
            <li className="flex items-center justify-center"> {/* Menengahkan item */}
              <span className="ml-2">Telepon: 0821-3989-7388</span> {/* Ganti dengan nomor asli */}
            </li>
            <li className="flex items-center justify-center"> {/* Menengahkan item */}
              <span className="ml-2">WhatsApp: 0821-3989-7388</span> {/* Tambahkan WhatsApp langsung jika ingin */}
            </li>
            <li className="flex items-center justify-center"> {/* Menengahkan item */}
              <span className="ml-2">Email: liazidny@gmail.com</span> {/* Ganti dengan email asli */}
            </li>
            <li className="flex items-center justify-center"> {/* Menengahkan item */}
              <span className="ml-2">Alamat: Godeg Kulon, Gading, Kecamatan Krembung, Kabupaten Sidoarjo, Jawa Timur 61275</span> {/* Ganti dengan alamat asli */}
            </li>
          </ul>

          {/* Placeholder untuk Google Maps Embed */}
          <h3 className="text-2xl font-semibold text-body mb-4">Lokasi Kami</h3>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d415.35510086923995!2d112.64758507561771!3d-7.520908587997355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1755068262101!5m2!1sid!2sid" 
                    width="100%"   height="100%"  style={{ border:0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;