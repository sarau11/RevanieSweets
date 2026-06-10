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
          <p>Zbuloni koleksionet tona të bukura me karamele artizanale, çokollata që shkrihen në gojë, krofna të pufosur dhe torta të personalizuara dekadente.</p>
          <div className="hero-actions">
            <Link to="/products" className="btn-primary">Shfleto ëmbëlsirat <FiArrowRight /></Link>
            <Link to="/about" className="btn-secondary">Historia e kuzhinës sonë</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="blob-bg"></div>
          <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80" alt="Kompozim ëmbëlsirash" />
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
          <h3>Kuti Dhuratash Premium</h3>
          <p>Kutitë e personalizuara janë të mbështjellura në mënyrë perfekte me mesazhe unike.</p>
        </div>
        <div className="feature-card blue">
          <FiAward size={32} />
          <h3>Burime Premium</h3>
          <p>Përdorim vetëm ekstrakte frutash organike të certifikuara dhe fara kakao me origjinë të vetme.</p>
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

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Lumturia nga Klubi Ynë</h2>
          <p>Historitë e vërteta nga klientët tanë të dashur.</p>
        </div>
        <div className="testimonials-grid">
          {testimonialsData.map(t => (
            <div key={t.id} className="testimonial-card">
              <div className="stars">{"★".repeat(t.stars)}</div>
              <p className="comment">"{t.comment}"</p>
              <h4 className="name">{t.name}</h4>
              <span className="role">{t.role}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}