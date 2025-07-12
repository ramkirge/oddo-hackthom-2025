import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Feature from '../components/Feature'
import Product from '../components/Product';
import Categorie from '../components/Categorie';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      

      {/* Hero Section */}
      <Hero/>
      {/* Featured Carousel Placeholder */}
      <Feature/>

      {/* Categories Section */}
      <Categorie/>

      {/* Product Listings */}
      <Product/>
    </div>
  );
};

export default LandingPage;
