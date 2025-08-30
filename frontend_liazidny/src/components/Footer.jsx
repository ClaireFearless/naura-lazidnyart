// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-footer text-footerText py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">

        {/* Kolom 1: Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-brandTitleFooter mb-2">Lia Zidny Art</h3>
          <p className="mb-2">Setiap helai kain, setiap tusuk jahitan, adalah cerita yang kami rajut dengan cinta dan ketelitian.</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} Lia Zidny Art. All Rights Reserved.</p>
        </div>

        {/* Kolom 2: Kontak */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-footerText mb-3">Hubungi Kami</h4>
          <ul className="space-y-1">
            <li>Telepon: 0821-3989-7388</li>
            <li>Email: liazidny@gmail.com</li>
            <li>Alamat: Godeg Kulon, Gading, Kecamatan Krembung, Kabupaten Sidoarjo, Jawa Timur 61275</li>
          </ul>
        </div>

        {/* Kolom 3: Navigasi & Sosial Media */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-footerText mb-3">Tautan Cepat</h4>
          <ul className="space-y-1 mb-4">
            <li><a href="#beranda" className="hover:text-brandTitleFooter transition-colors">Beranda</a></li>
            <li><a href="#produk" className="hover:text-brandTitleFooter transition-colors">Produk</a></li>
            <li><a href="#tentang-kami" className="hover:text-brandTitleFooter transition-colors">Tentang Kami</a></li>
          </ul>

          <h4 className="text-lg font-semibold text-footerText mb-3">Ikuti Kami</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com/lia.griyazidny" target="_blank" rel="noopener noreferrer" className="hover:text-brandTitleFooter transition-colors">Facebook</a>
            <a href="https://instagram.com/aw_batiksidoarjo" target="_blank" rel="noopener noreferrer" className="hover:text-brandTitleFooter transition-colors">Instagram</a>
            <a href="https://wa.me/6282139897388" target="_blank" rel="noopener noreferrer" className="hover:text-brandTitleFooter transition-colors">WhatsApp</a>
            <a href="https://tiktok.com/@liazidnyart" target="_blank" rel="noopener noreferrer" className="hover:text-brandTitleFooter transition-colors">Tiktok</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;