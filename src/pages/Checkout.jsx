import React, { useState } from 'react';
import { FiCreditCard, FiLock, FiCheckCircle } from 'react-icons/fi';
import '../styles/pages.css';

export default function Checkout({ cart, clearCart }) {
  const [complete, setComplete] = useState(false);
  const total = cart.reduce((t, i) => t + (i.price * i.quantity), 0);

  const handlePay = (e) => {
    e.preventDefault();
    setComplete(true);
    clearCart();
  };

  if (complete) {
    return (
      <div className="checkout-success animate-fade-in">
        <FiCheckCircle size={64} className="success-icon" />
        <h1>Order Dispatched to the Kitchen!</h1>
        <p>Your payment parameters were processed securely. Prepare for a sweet arrival shortly.</p>
      </div>
    );
  }

  return (
    <div className="checkout-page animate-fade-in">
      <h1>Secure Checkout Sandbox</h1>
      <div className="checkout-layout">
        <form onSubmit={handlePay} className="billing-form">
          <h3><FiLock /> Customer Information</h3>
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Shipping Address Line 1" required />
          
          <h3><FiCreditCard /> Mock Payment Entry</h3>
          <input type="text" placeholder="Cardholder Name" required />
          <input type="text" placeholder="16 Digit Card Number" maxLength="16" required />
          <div className="form-row">
            <input type="text" placeholder="MM/YY" maxLength="5" required />
            <input type="text" placeholder="CVV" maxLength="3" required />
          </div>
          <button type="submit" className="btn-primary checkout-action-btn">Finalize Sandbox Order (${total.toFixed(2)})</button>
        </form>

        <div className="order-summary-panel">
          <h3>Summary Evaluation</h3>
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.id} className="summary-item-row">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-total-footer">
            <span>Total Final Cost:</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}