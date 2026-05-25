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
          <span className="hero-badge">Welcome to Confection Perfection</span>
          <h1>Making Life Sweeter Every Day!</h1>
          <p>Explore our beautiful collections of artisan candies, melt-in-your-mouth chocolates, fluffy donuts, and decadent custom cakes.</p>
          <div className="hero-actions">
            <Link to="/products" className="btn-primary">Explore Sweets <FiArrowRight /></Link>
            <Link to="/about" className="btn-secondary">Our Kitchen Story</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="blob-bg"></div>
          <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80" alt="Assorted treats composition" />
        </div>
      </header>

      {/* Core Value Proportions */}
      <section className="features-grid">
        <div className="feature-card pink">
          <FiSmile size={32} />
          <h3>100% Handcrafted</h3>
          <p>Every single pastry is sculpted using gourmet family recipes in house.</p>
        </div>
        <div className="feature-card purple">
          <FiGift size={32} />
          <h3>Sweet Gifting Box</h3>
          <p>Premium customized boxes wrapped perfectly with custom message inserts.</p>
        </div>
        <div className="feature-card blue">
          <FiAward size={32} />
          <h3>Premium Sourcing</h3>
          <p>We source only high-tier certified organic fruit extractions and single-origin cocoa beans.</p>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Trending Confections</h2>
          <p>Our top voted community classics this month.</p>
        </div>
        <div className="products-grid">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
        <div className="view-all-wrapper">
          <Link to="/products" className="btn-secondary">View Complete Menu</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Happiness from Our Club</h2>
          <p>Real stories from our lovely regulars.</p>
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