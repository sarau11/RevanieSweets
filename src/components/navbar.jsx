import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiShoppingBag, FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import '../styles/components.css';

export default function Navbar({ cartCount, toggleCart, theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)} aria-label="Revanie Sweets">
          <img src="/image.png" alt="Logo i Revanie Sweets" className="nav-logo-img" />
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={() => setIsOpen(false)}>Ballina</NavLink>
          <NavLink to="/products" className="nav-link" onClick={() => setIsOpen(false)}>Të ëmblat</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setIsOpen(false)}>Historia jonë</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Kontakti</NavLink>
        </div>

        <div className="nav-actions">
          <button className="cart-button" onClick={toggleCart} aria-label="Shiko shportën">
            <FiShoppingBag size={20} />
            {typeof cartCount === 'number' && cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Ndrysho temën">
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle" aria-label="Ndrysho menunë">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}