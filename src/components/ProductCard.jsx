import React from 'react';
import { FiStar, FiPlus } from 'react-icons/fi';
import '../styles/components.css';

export default function ProductCard({ product, onAddToCart }) {
  const { name, price, rating, image, isBestSeller, category } = product;

  return (
    <div className="product-card animate-fade-in">
      <div className="card-img-wrapper">
        <img src={image} alt={name} loading="lazy" />
        {isBestSeller && <span className="badge-bestseller">Best Seller</span>}
        <span className="card-category">{category}</span>
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
          <button 
            onClick={() => onAddToCart(product)} 
            className="add-to-cart-btn"
            title="Add to Cart"
          >
            <FiPlus /> Add
          </button>
        </div>
      </div>
    </div>
  );
}