import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiSmile, FiGift, FiAward } from 'react-icons/fi';
import { productsData, testimonialsData } from '../data/product';
import ProductCard from '../components/ProductCard';
import '../styles/pages.css';

export default function Home({ onAddToCart }) {
  const featured = productsData.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Mirësevini në Perfeksionin e Ëmbëlsirave</span>
          <h1>Bëjmë Jetën Më Të Ëmbël Çdo Ditë!</h1>
          <p>Çdo produkt përgatitet me përkushtim dhe përbërës cilësorë, duke garantuar freski dhe shije të shkëlqyer. Qoftë për ditëlindje, festa familjare
             apo thjesht për të shijuar diçka të ëmbël, Revanie Sweets është zgjedhja ideale për çdo rast 🍰✨.</p>
          <div className="hero-actions">
            <Link to="/products" className="btn-primary">Shfleto ëmbëlsirat <FiArrowRight /></Link>
            <Link to="/about" className="btn-secondary">Historia e kuzhinës sonë</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="blob-bg"></div>
          <img src="https://www.southernliving.com/thmb/ihcJCtClkU4xfq0LvTUO7BXj8-o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mahogany_-cake_009-9fadbbc87ddf4081879a2db83142c3a1.jpg" alt="Kompozim ëmbëlsirash" />
        </div>
      </header>

      <section className="features-grid">
        <div className="feature-card pink">
          <FiSmile size={32} />
          <h3>100% të Punuar Me Dorë</h3>
          <p>Çdo ëmbëlsirë formohet me receta familjare gourmet në kuzhinën tonë.</p>
        </div>
        <div className="feature-card purple">
          <FiGift size={32} />
          <h3>Tasting Box</h3>
          <p>Nje perzgjedhje shijesh per t'u kenaqur ose per t'ia dhuruar dikujt te vecante.</p>
        </div>
        <div className="feature-card blue">
          <FiAward size={32} />
          <h3>Torte te personalizuara</h3>
          <p>Cdo feste meriton nje torte qe bene momentin edhe me te vecant.</p>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Ëmbëlsirat më të Njohura</h2>
          <p>Klasiket më të votuara nga komuniteti këtë muaj.</p>
        </div>
        <div className="products-grid">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
        <div className="view-all-wrapper">
          <Link to="/products" className="btn-secondary">Shiko Menynë e Plotë</Link>
        </div>
      </section>
    </div>
  );
}