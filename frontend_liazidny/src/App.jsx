import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/produk/:id" element={<ProductDetail />} />
        <Route path="/about-us" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;