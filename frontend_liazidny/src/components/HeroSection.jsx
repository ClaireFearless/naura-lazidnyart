// src/components/HeroSection.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import backgroundImage from '../assets/image-24.webp';

const HeroSection = () => {
  return (
    <section 
      id="beranda" 
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-no-repeat"
      
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' 
      }}
    >
      {/* Overlay untuk teks agar lebih mudah dibaca */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug drop-shadow-lg mb-4">
            "Karya Seni dalam Setiap Helai"
            
          </h1>
          <p className="text-lg md:text-xl font-light mb-8 drop-shadow-md">
            Perpaduan harmonis antara seni batik tulis, jahitan presisi, dan sulam pita yang menawan.
            
          </p>
          <NavLink
            to="/products"
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 transform hover:scale-105 inline-block"
          >
            Lihat Koleksi
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;