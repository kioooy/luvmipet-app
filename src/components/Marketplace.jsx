import React, { useState } from 'react';
import { ShoppingCart, Search, Filter, Star } from 'lucide-react';

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Thức ăn', 'Đồ chơi', 'Phụ kiện', 'Vệ sinh'];

  const products = [
    {
      id: 1,
      name: 'Thức ăn hạt cho chó Royal Canin',
      price: '350.000đ',
      category: 'Thức ăn',
      rating: 4.8,
      sold: 120,
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Đồ chơi gặm xương cao su Dental',
      price: '45.000đ',
      category: 'Đồ chơi',
      rating: 4.5,
      sold: 85,
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Dây dắt tự động có khóa an toàn',
      price: '120.000đ',
      category: 'Phụ kiện',
      rating: 4.9,
      sold: 230,
      image: 'https://images.unsplash.com/photo-1598460592965-9cc72b0c3451?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Sữa tắm khử mùi SOS 500ml',
      price: '180.000đ',
      category: 'Vệ sinh',
      rating: 4.7,
      sold: 400,
      image: 'https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 className="text-h1">Cửa Hàng</h1>
          <p className="text-caption" style={{ marginTop: '4px' }}>Mua sắm sản phẩm tốt nhất cho thú cưng</p>
        </div>
        <div style={{ position: 'relative', width: '40px', height: '40px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <ShoppingCart size={20} color="var(--text-main)" />
          <div style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--danger)', color: 'white', fontSize: '10px', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            2
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Tìm thức ăn, đồ chơi..." 
            style={{ 
              width: '100%', 
              padding: '16px 16px 16px 48px', 
              borderRadius: 'var(--radius-md)', 
              border: 'none', 
              background: 'white', 
              boxShadow: 'var(--shadow-sm)',
              fontSize: '15px',
              fontFamily: 'inherit',
              outline: 'none'
            }} 
          />
        </div>
        <button style={{ width: '54px', height: '54px', borderRadius: 'var(--radius-md)', border: 'none', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 14px rgba(255, 140, 102, 0.4)' }}>
          <Filter size={20} />
        </button>
      </div>

      {/* Categories */}
      <div className="category-scroll" style={{ marginBottom: '16px' }}>
        {categories.map(cat => (
          <div 
            key={cat} 
            className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === 'All' ? 'Tất cả' : cat}
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                <Star size={12} fill="#f59e0b" color="#f59e0b" />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{product.rating} ({product.sold} đã bán)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span className="product-price">{product.price}</span>
                <button style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold' }}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div style={{ height: '60px' }}></div>
    </div>
  );
}
