import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { productsData } from '../data/product';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import '../styles/pages.css';

const categories = ['all', 'candies', 'chocolates', 'donuts', 'cakes', 'cupcakes', 'cookies', 'drinks'];

export default function Products({ onAddToCart }) {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
    // Artificial mock load timeout to trigger the visual spinner asset
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let result = productsData;
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (search.trim()) {
      result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredProducts(result);
  }, [search, selectedCategory]);

  if (loading) return <Loader />;

  return (
    <div className="products-page animate-fade-in">
      <div className="shop-header">
        <h1>The Sweet Universe</h1>
        <p>Filter by custom collections or search for your favorite flavor profiles directly.</p>
      </div>

      <div className="controls-container">
        <div className="search-box-wrapper">
          <FiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search cupcakes, artisan chocolate, sour gummies..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="categories-scroller">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <h3>No sweet combinations found...</h3>
          <p>Try resetting your filter parameters or adjust spelling configurations.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
}