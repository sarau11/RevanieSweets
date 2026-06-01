import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { productsData } from '../data/product';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import '../styles/pages.css';

const categories = [
  { value: 'all', label: 'Të gjitha' },
  { value: 'candies', label: 'Karamele' },
  { value: 'chocolates', label: 'Çokollata' },
  { value: 'donuts', label: 'Krofna' },
  { value: 'cakes', label: 'Torta' },
  { value: 'cupcakes', label: 'Kupkaket' },
  { value: 'cookies', label: 'Biskota' },
  { value: 'drinks', label: 'Pije' }
];

export default function Products({ onAddToCart }) {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  useEffect(() => {
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
        <h1>Universi i Ëmbël</h1>
        <p>Filtro sipas koleksioneve ose kërko shijen tënde të preferuar.</p>
      </div>

      <div className="controls-container">
        <div className="search-box-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Kërko kupkake, çokollatë artizanale, xhelqibash të tharta..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="categories-scroller">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`category-chip ${selectedCategory === cat.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <h3>Nuk u gjet asnjë kombinim i ëmbël...</h3>
          <p>Provoni të rivendosni filtrat ose rregulloni drejtshkrimin.</p>
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