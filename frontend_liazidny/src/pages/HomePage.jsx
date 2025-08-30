import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/KategoriList';
import AboutUs from '../components/AboutUs';
import Koleksi from '../components/KoleksiTerlaris';
import Testimoni from '../components/Testimoni';
import ContactUs from '../components/ContactUS';
import Footer from '../components/Footer';
import KoleksiTerlaris from '../components/KoleksiTerlaris';

const HomePage = () => (
  <div className="overflow-x-hidden">
    <Header />
    <HeroSection />
    <Services />
    <AboutUs />
    <KoleksiTerlaris />
    <Testimoni />
    <ContactUs />
    <Footer />
  </div>
);

export default HomePage;