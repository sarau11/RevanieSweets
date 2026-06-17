import React from 'react';
import { FiX, FiPlus, FiMinus, FiTrash2, FiShoppingBag } from 'react-icons/fi';
import '../styles/components.css';

export default function CartSidebar({ isOpen, onClose, cart, updateQuantity, removeFromCart }) {
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-sidebar" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Your Treat Bag ({cart.reduce((a, b) => a + b.quantity, 0)})</h2>
          <button onClick={onClose} className="close-btn"><FiX size={24} /></button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FiShoppingBag size={48} className="empty-icon" />
              <p>Qanta juaj eshte bosh! Mbush ate me </p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="item-price">€{(item.price * item.quantity).toFixed(2)}</p>
                  <div className="item-controls">
                    <div className="qty-selectors">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><FiMinus /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><FiPlus /></button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn"><FiTrash2 /></button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="summary-row">
              <span>Nëntotali:</span>
              <span className="total-amount">€{subtotal.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}