import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import '../styles/components.css';

export default function Navbar({ cartCount, toggleCart, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          Revanié Sweets<span>.</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" className="nav-link" onClick={() => setIsOpen(false)}>Sweets</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>Our Story</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>

        <div className="nav-actions">
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          
          <button onClick={toggleCart} className="cart-trigger" aria-label="Open Cart">
            <FiShoppingBag size={22} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle" aria-label="Toggle Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}