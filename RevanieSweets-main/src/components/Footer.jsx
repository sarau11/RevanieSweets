import React from 'react';
import '../styles/components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Revanié Sweets</h3>
          <p>Dërgojmë ëmbëlsira të punuara me dorë dhe deserte artizanale me dashuri, drejtpërdrejt në derën tuaj. Zbuloni një botë shijesh për festa dhe dëfrime të përditshme.</p>
        </div>

        <div className="footer-section">
          <h4>Lidhje të Shpejta</h4>
          <ul>
            <li><a href="/">Ballina</a></li>
            <li><a href="/products">Të ëmblat</a></li>
            <li><a href="/about">Historia jonë</a></li>
            <li><a href="/contact">Kontakti</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Qëndro në Kontakt</h4>
          <p>Regjistrohu për përditësime, oferta sezonale dhe lançime të reja ëmbëlsirash.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Shkruani email-in tuaj" aria-label="Email" />
            <button type="submit">Dërgo</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Revanié Sweets. Të gjitha të drejtat e rezervuara.</div>
    </footer>
  );
}
