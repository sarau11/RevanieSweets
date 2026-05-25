import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import '../styles/pages.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="shop-header">
        <h1>Connect With Our Team</h1>
        <p>Custom wedding order inquiries, catering consultations, or standard storefront questions.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info-panel">
          <h2>Store Coordinates</h2>
          
          <div className="info-item">
            <FiMapPin />
            <div>
              <h4>Main Pastel Bakery</h4>
              <p>777 Sugar Plum Boulevard, Suite 100, Confection City</p>
            </div>
          </div>

          <div className="info-item">
            <FiPhone />
            <div>
              <h4>Phone Direct</h4>
              <p>+1 (555) 834-SWEET</p>
            </div>
          </div>

          <div className="info-item">
            <FiMail />
            <div>
              <h4>Electronic Mail</h4>
              <p>hello@revanie-sweets.com</p>
            </div>
          </div>

          <div className="info-item">
            <FiClock />
            <div>
              <h4>Kitchen Operation Hours</h4>
              <p>Mon - Sat: 8:00 AM - 9:00 PM<br />Sunday: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          {submitted ? (
            <div className="submission-success">
              <h3>Message Logged Successfully!</h3>
              <p>A gourmet specialist will answer back within 12 standard business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Your Legal Full Name</label>
                <input type="text" required placeholder="Jane Doe" />
              </div>
              <div className="form-group">
                <label>Email Coordinates</label>
                <input type="email" required placeholder="jane@example.com" />
              </div>
              <div className="form-group">
                <label>Message Content</label>
                <textarea rows="5" required placeholder="Tell us about your custom cake sizing or catering requirements..."></textarea>
              </div>
              <button type="submit" className="btn-primary">Dispatch Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}