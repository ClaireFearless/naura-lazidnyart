// src/components/Header.jsx
import React, { useState } from 'react'; 
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <header className="bg-base shadow-md py-4 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      
      {/* Logo & Brand */}
      <div className="flex items-center"> 
        <a href="/" className="flex items-center"> 
          <img 
            src={Logo} 
            alt="Logo Lia Zidny Art" 
            className="h-10 mr-3" 
          />
          <span className="text-2xl font-bold text-heading hover:text-brandTitleFooter transition-colors duration-300">
            Lia Zidny Art
          </span>
        </a>
      </div>

      {/* Navigasi Desktop */}
      <nav className="hidden md:flex space-x-8">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ${
              isActive ? 'text-amber-600' : 'text-body hover:text-brandTitleFooter'
            }`
          }
        >
          Beranda
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ${
              isActive ? 'text-amber-600' : 'text-body hover:text-brandTitleFooter'
            }`
          }
        >
          Produk
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `font-medium transition-colors duration-300 ${
              isActive ? 'text-amber-600' : 'text-body hover:text-brandTitleFooter'
            }`
          }
        >
          Tentang Kami
        </NavLink>
      </nav>


      {/* Tombol Menu Mobile */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-body hover:text-brandTitleFooter focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          )}
        </button>
      </div>

      {/* Navigasi Mobile */}
      <nav
        className={`fixed top-0 left-0 h-full w-full bg-base md:hidden transform
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out p-6 flex flex-col items-center justify-center space-y-6 z-40`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-6 text-body hover:text-brandTitleFooter focus:outline-none"
          aria-label="Close navigation"
        >
          <svg className="w-8 h-8" /* icon close */ />
        </button>
        <NavLink to="/" end onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">
          Beranda
        </NavLink>
        <NavLink to="/products" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">
          Produk
        </NavLink>
        <NavLink to="/about-us" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">
          Tentang Kami
        </NavLink>
      </nav>

    </header>
  );
};

export default Header;