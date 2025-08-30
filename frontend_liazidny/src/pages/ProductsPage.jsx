import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const ProductsPage = () => (
  <div className="overflow-x-hidden">
    <Header />
    <ProductList />
    <Footer />
  </div>
);

export default ProductsPage;