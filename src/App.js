import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Products from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  // Dark/Light Mode Theme persistence pipeline
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // State Handler Actions for E-Commerce Cart Logic
  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically toggle slider view on add execution
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const handleRemoveFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleClearCart = () => setCart([]);

  const handleCheckoutNavigation = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const totalCartUnitsCount = cart.reduce((total, current) => total + current.quantity, 0);

  return (
    <>
      <Navbar 
        cartCount={totalCartUnitsCount} 
        toggleCart={() => setIsCartOpen(!isCartOpen)} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main style={{ minHeight: '70vh' }}>
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={handleClearCart} />} />
        </Routes>
      </main>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeFromCart={handleRemoveFromCart}
        onCheckout={handleCheckoutNavigation}
      />

      <Footer />
    </>
  );
}