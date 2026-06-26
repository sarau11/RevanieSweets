import React, { useEffect, useState } from 'react';
import { productsData } from '../data/product';

export default function Admin() {
  // Admin accessible directly at `/admin` route. Remove query-key requirement.

  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('productsData');
      return saved ? JSON.parse(saved) : productsData;
    } catch (e) {
      return productsData;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('productsData', JSON.stringify(products));
    } catch (e) {}
  }, [products]);

  const clearAll = () => {
    if (!window.confirm('Clear all products?')) return;
    setProducts([]);
  };

  const resolveCategory = (formData) => {
    const selected = formData.get('categorySelect');
    if (selected === '__new__') {
      return (formData.get('newCategory') || '').trim();
    }
    return selected || '';
  };

  const handleAdd = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const category = resolveCategory(formData);
    const price = parseFloat(formData.get('price')) || 0;
    const image = formData.get('image') || '';
    const description = formData.get('description') || '';
    const isBestSeller = formData.get('isBestSeller') === 'on';
    const maxId = products.length ? Math.max(...products.map(p => p.id)) : 0;
    const newProduct = {
      id: maxId + 1,
      name,
      category,
      price,
      rating: 0,
      image,
      isBestSeller,
      description
    };
    setProducts(prev => [newProduct, ...prev]);
    form.reset();
  };

  const handleDelete = (id) => {
    if (!window.confirm('Delete this product?')) return;
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const handleUpdate = (id, updates) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  // simple inline editing state
  const [editingId, setEditingId] = useState(null);


  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel — Manage Products</h1>

      <section style={{ marginTop: 20 }}>
        <h3>Add Product</h3>
        <form onSubmit={handleAdd} style={{ display: 'grid', gap: 8, maxWidth: 600 }}>
          <input name="name" placeholder="Name" required />
          {/* Category selector: existing categories + option to add new */}
          <select name="categorySelect" defaultValue="" onChange={(e) => {
            const sel = e.target.value;
            const newField = document.getElementById('new-category-field');
            if (sel === '__new__') {
              newField.style.display = 'block';
            } else {
              newField.style.display = 'none';
            }
          }}>
            <option value="" disabled>-- Zgjidh kategori --</option>
            {Array.from(new Set(products.map(p => p.category).filter(Boolean))).map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
            <option value="__new__">Shto kategori të re</option>
          </select>
          <input id="new-category-field" name="newCategory" placeholder="Shto kategori të re" style={{ display: 'none' }} />
          <input name="price" placeholder="Price" type="number" step="0.01" required />
          <input name="image" placeholder="Image URL" />
          <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input name="isBestSeller" type="checkbox" /> Is Best Seller
          </label>
          <textarea name="description" placeholder="Description" rows={3} />
          <div>
            <button type="submit">Add</button>
            <button type="button" onClick={clearAll} style={{ marginLeft: 8 }}>Clear All</button>
          </div>
        </form>
      </section>

      <section style={{ marginTop: 30 }}>
        <h3>Products ({products.length})</h3>
        <div style={{ display: 'grid', gap: 12 }}>
          {products.map(product => (
            <div key={product.id} style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
              {editingId === product.id ? (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.target);
                  handleUpdate(product.id, {
                    name: fd.get('name'),
                    category: resolveCategory(fd),
                    price: parseFloat(fd.get('price')) || 0,
                    image: fd.get('image'),
                    description: fd.get('description'),
                    isBestSeller: fd.get('isBestSeller') === 'on'
                  });
                  setEditingId(null);
                }} style={{ display: 'grid', gap: 8 }}>
                  <input name="name" defaultValue={product.name} />
                  <select name="categorySelect" defaultValue={product.category}>
                    {Array.from(new Set(products.map(p => p.category).filter(Boolean))).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                    <option value="__new__">Shto kategori të re</option>
                  </select>
                  <input name="newCategory" placeholder="Shto kategori të re" style={{ display: 'none' }} />
                  <input name="price" type="number" step="0.01" defaultValue={product.price} />
                  <input name="image" defaultValue={product.image} />
                  <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <input name="isBestSeller" type="checkbox" defaultChecked={product.isBestSeller} /> Is Best Seller
                  </label>
                  <textarea name="description" defaultValue={product.description} rows={3} />
                  <div>
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setEditingId(null)} style={{ marginLeft: 8 }}>Cancel</button>
                  </div>
                </form>
              ) : (
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <img src={product.image} alt={product.name} style={{ width: 120, height: 80, objectFit: 'cover', borderRadius: 6 }} />
                  <div style={{ flex: 1 }}>
                    <strong>{product.name}</strong>
                    <div>Category: {product.category} • Price: €{product.price}</div>
                    <div style={{ marginTop: 8 }}>{product.description}</div>
                    <div style={{ marginTop: 8 }}>
                      <button onClick={() => setEditingId(product.id)}>Edit</button>
                      <button onClick={() => handleDelete(product.id)} style={{ marginLeft: 8 }}>Delete</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
