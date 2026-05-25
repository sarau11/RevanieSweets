import React from 'react';
import '../styles/components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Revanié Sweets</h3>
          <p>Delivering handmade sweets and crafted desserts with love, right to your door. Discover a world of flavors made for celebrations and everyday treats.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Sweets</a></li>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Stay in Touch</h4>
          <p>Sign up for updates, seasonal offers, and new dessert drops.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit">Go</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Revanié Sweets. All rights reserved.</div>
    </footer>
  );
}
