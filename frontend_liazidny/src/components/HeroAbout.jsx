// src/components/AboutUs.jsx
import React from 'react'
import Gambar45 from '../assets/Gambar45.webp'

const AboutUs = () => (
  <section
    id="tentang-kami"
    className="mt-10 bg-base py-20 px-6 md:px-12"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-heading leading-snug drop-shadow-lg mb-4">
        Kisah di Balik Karya
      </h1>

      <img
        src={Gambar45}
        alt="Potret Lia Zidny"
        className="mx-auto w-full max-w-md rounded-lg shadow-md mb-8"
        loading="lazy"
      />

      <p className="text-lg leading-relaxed mb-6">
        Lahir dari eksplorasi motif Nusantara dan teknik jahit mutakhir, setiap  
        karya kami memadukan keahlian tradisional dengan estetika kontemporer.  
        Di workshop Sidoarjo, tim perajin kami menjalankan quality control ketat  
        demi memastikan detail dan kekuatan jahitan sempurna.
      </p>

      <p className="text-lg leading-relaxed">
        Filosofi kami: “Detail Menghidupkan Cerita.” Kami juga berbagi ilmu melalui  
        workshop dan kolaborasi kreatif, berkomitmen pada keberlanjutan bahan dan  
        nilai komunitas. Mari menjahit cerita baru dengan kain berkualitas dan  
        sentuhan personal.
      </p>
    </div>
  </section>
)

export default AboutUs