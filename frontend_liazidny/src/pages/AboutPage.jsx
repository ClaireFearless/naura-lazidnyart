import React from 'react';
import Header from '../components/Header';
import HeroAbout from '../components/HeroAbout';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

const AboutPage = () => (
  <div className="overflow-x-hidden">
    <Header />
    <HeroAbout />
    <Faq />
    <Footer />
  </div>
);

export default AboutPage;