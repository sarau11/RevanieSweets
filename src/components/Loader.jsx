import React from 'react';
import '../styles/components.css';

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="candy-spinner"></div>
      <p>Baking sweet calculations...</p>
    </div>
  );
}