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
        <h1>Lidhu me Ekipin Tonë</h1>
        <p>Pyetje për porosi të personalizuara dasmash, konsulencë për katering ose pyetje të përgjithshme të dyqanit.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-info-panel">
          <h2>Të dhëna të dyqanit</h2>
          
          <div className="info-item">
            <FiMapPin />
            <div>
              <h4>Pjekuria Kryesore Pastel</h4>
              <p>Bulevardi Sugar Plum 777, Njësi 100, Qyteti i Ëmbëlsirave</p>
            </div>
          </div>

          <div className="info-item">
            <FiPhone />
            <div>
              <h4>Telefoni</h4>
              <p>+1 (555) 834-SWEET</p>
            </div>
          </div>

          <div className="info-item">
            <FiMail />
            <div>
              <h4>Email</h4>
              <p>hello@revanie-sweets.com</p>
            </div>
          </div>

          <div className="info-item">
            <FiClock />
            <div>
              <h4>Orari i punës</h4>
              <p>Hë - Sht: 8:00 - 21:00<br />Diel: 10:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          {submitted ? (
            <div className="submission-success">
              <h3>Mesazhi u dërgua me sukses!</h3>
              <p>Nje specialist do të përgjigjet brenda 12 orëve të punës.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Emri juaj i plotë</label>
                <input type="text" required placeholder="Jane Doe" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" required placeholder="jane@example.com" />
              </div>
              <div className="form-group">
                <label>Mesazhi</label>
                <textarea rows="5" required placeholder="Na tregoni për madhësinë e tortës ose për kërkesat e kateringut..."></textarea>
              </div>
              <button type="submit" className="btn-primary">Dërgo Mesazhin</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}