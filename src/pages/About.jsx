import React from 'react';
import '../styles/pages.css';

export default function About() {
  return (
    <div className="about-page animate-fade-in">
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>Crafting Sweet Memories Since 2012</h1>
          <p>Revanié Sweets started in a small home garage kitchen with a single pastry bag and a massive vision: to turn natural ingredients into vibrant edible works of art.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="story-block">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80" alt="Kitchen operations profile" />
          <div className="story-text">
            <h2>The Natural Sweet Philosophy</h2>
            <p>We reject industrial corn syrup formulas and heavy hyper-processing methodologies. Our kitchens run exclusively on raw cane extractions, dairy butter fusions, and pure fruit essences.</p>
            <p>Every recipe undergoes hours of temperature calibrations to secure the ultimate density and textural experience prior to boxing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}