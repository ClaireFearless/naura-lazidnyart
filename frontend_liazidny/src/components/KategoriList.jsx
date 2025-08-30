import React from 'react';
import busanaImage from '../assets/Gambar27.webp';
import sulamImage from '../assets/Gambar30.webp';
import batikImage from '../assets/Gambar43.webp';
import kostumImage from '../assets/Gambar44.webp';

const Kategori = () => {
  const kategoriList = [
    {
      id: 1,
      title: "Busana",
      description: "Koleksi busana khas dengan sentuhan etnik dan modern, cocok untuk berbagai acara dan kebutuhan personal.",
      image: busanaImage
    },
    {
      id: 2,
      title: "Sulam",
      description: "Karya sulam tangan yang detail dan elegan, menonjolkan keindahan tekstil lokal dengan teknik tradisional.",
      image: sulamImage
    },
    {
      id: 3,
      title: "Batik",
      description: "Motif batik eksklusif yang menggabungkan filosofi budaya dan desain kontemporer.",
      image: batikImage
    },
    {
      id: 4,
      title: "Kostum",
      description: "Desain kostum tematik untuk pertunjukan, pameran, dan kebutuhan artistik lainnya.",
      image: kostumImage
    }
  ];

  return (
    <section id="kategori" className="py-16 px-6 md:px-12 bg-base text-body">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-heading mb-10">Temukan Karya Kami</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {kategoriList.map((kategori) => (
            <div key={kategori.id} className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 duration-300">
              <img 
                src={kategori.image} 
                alt={kategori.title} 
                className="w-24 h-24 mx-auto mb-4 object-cover rounded-md"
              />
              <h3 className="text-2xl font-semibold text-body mb-3 text-center">{kategori.title}</h3>
              <p className="text-body text-center">{kategori.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Kategori;