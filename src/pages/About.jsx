import React from 'react';
import '../styles/pages.css';

export default function About() {
  return (
    <div className="about-page animate-fade-in">
      <section className="about-hero">
        <div className="about-hero-text">
          <h1>Krijojmë Kujtime të Ëmbla Që nga 2012</h1>
          <p>Revanié Sweets nisi në një kuzhinë të vogël në garazh me një qese pastiçerie dhe një vizion të madh: të kthente përbërës natyralë në vepra arti të ngrënshme.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="story-block">
          <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&q=80" alt="Proceset e kuzhinës" />
          <div className="story-text">
            <h2>Filozofia e Ëmbël Natyrale</h2>
            <p>Ne refuzojmë formulat industriale të shurupit të misrit dhe metodat e rënda të hiper-procesimit. Kuzhinat tona funksionojnë ekskluzivisht me ekstrakte sheqeri të papërpunuar, gjalpë bulmetesh dhe esenca të pastra frutash.</p>
            <p>Çdo recetë kalon orë të tëra kalibrimi të temperaturës për të siguruar densitetin dhe teksturën perfekte para paketimit.</p>
          </div>
        </div>
      </section>
    </div>
  );
}