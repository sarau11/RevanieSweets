import React from 'react';
import { FiStar } from 'react-icons/fi';
import '../styles/components.css';

export default function ProductCard({ product }) {
  const { name, price, rating, image, isBestSeller, category } = product;
  const categoryLabels = {
    cheesecakes: 'Cheesecakes',
    cakes: 'Torte',
    cupcakes: 'Cupcakes',
    cookies: 'Biskota',
    sales: 'Ofertat'
  };

  return (
    <div className="product-card animate-fade-in">
      <div className="card-img-wrapper">
        <img src={image} alt={name} loading="lazy" />
        {isBestSeller && <span className="badge-bestseller">Më i Shitur</span>}
        <span className="card-category">{categoryLabels[category] || category}</span>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{name}</h3>
          <div className="card-rating">
            <FiStar className="star-icon" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="card-footer">
          <span className="card-price">${price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}