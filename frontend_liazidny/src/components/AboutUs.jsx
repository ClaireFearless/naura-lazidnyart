// src/components/AboutUs.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutUs = () => {
  return (
    <section
      id="tentang-kami"
      className="mt-16 py-16 px-6 md:px-12 bg-base text-body"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-heading mb-6">
          Tentang Lia Zidny Art
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Lahir dari eksplorasi motif Nusantara dan teknik jahit mutakhir, setiap  
          karya kami memadukan keahlian tradisional dengan estetika kontemporer.  
          Di workshop Sidoarjo, tim perajin kami menjalankan quality control ketat  
          demi memastikan detail dan kekuatan jahitan sempurna.
        </p>

        {/* Tombol di tengah */}
        <NavLink
          to="/products"
          className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 transform hover:scale-105 inline-block"
        >
          Baca Kisah Lengkap
        </NavLink>
      </div>
    </section>
  )
}

export default AboutUs