import React, { useState } from 'react';
import { ShoppingCart, Search, Filter, Star, Crown } from 'lucide-react';

// Mock: isPremium = true for demo to show discount badges
const isPremium = false;

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartCount, setCartCount] = useState(2);
  const [addedId, setAddedId] = useState(null);

  const categories = ['All', 'Thức ăn', 'Đồ chơi', 'Phụ kiện', 'Vệ sinh'];

  const products = [
    {
      id: 1,
      name: 'Thức ăn hạt cho chó Royal Canin',
      price: 350000,
      category: 'Thức ăn',
      rating: 4.8,
      sold: 120,
      discount: 15,
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Đồ chơi gặm xương cao su Dental',
      price: 45000,
      category: 'Đồ chơi',
      rating: 4.5,
      sold: 85,
      discount: 10,
      image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Dây dắt tự động có khóa an toàn',
      price: 120000,
      category: 'Phụ kiện',
      rating: 4.9,
      sold: 230,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1598460592965-9cc72b0c3451?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Sữa tắm khử mùi SOS 500ml',
      price: 180000,
      category: 'Vệ sinh',
      rating: 4.7,
      sold: 400,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1585559700398-1385b3a8aeb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  const formatPrice = (price) =>
    price.toLocaleString('vi-VN') + 'đ';

  const handleAddToCart = (id) => {
    setCartCount(prev => prev + 1);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <h1 className="text-h1">Cửa Hàng</h1>
          <p className="text-caption" style={{ marginTop: '4px' }}>Mua sắm sản phẩm tốt nhất cho thú cưng</p>
        </div>
        <div style={{ position: 'relative', width: '40px', height: '40px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', cursor: 'pointer' }}>
          <ShoppingCart size={20} color="var(--text-main)" />
          {cartCount > 0 && (
            <div style={{ position: 'absolute', top: '-4px', right: '-4px', background: 'var(--danger)', color: 'white', fontSize: '10px', fontWeight: 'bold', width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {cartCount}
            </div>
          )}
        </div>
      </div>

      {/* Premium Banner */}
      {!isPremium && (
        <div style={{
          background: 'linear-gradient(135deg, #2B2D42 0%, #1a1a24 100%)',
          color: 'white', borderRadius: 'var(--radius-md)', padding: '12px 16px',
          marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px'
        }}>
          <Crown size={20} color="#FFD166" />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: '13px', color: '#FFD166' }}>Premium — Giảm 10–20% mọi đơn hàng</div>
            <div style={{ fontSize: '11px', opacity: 0.8, marginTop: '2px' }}>Nâng cấp để nhận ưu đãi ngay hôm nay!</div>
          </div>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#FFD166', whiteSpace: 'nowrap' }}>Xem →</span>
        </div>
      )}

      {/* Search Bar */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Tìm thức ăn, đồ chơi..."
            style={{
              width: '100%', padding: '14px 14px 14px 48px',
              borderRadius: 'var(--radius-md)', border: 'none',
              background: 'white', boxShadow: 'var(--shadow-sm)',
              fontSize: '15px', fontFamily: 'inherit', outline: 'none'
            }}
          />
        </div>
        <button style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', border: 'none', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 14px rgba(255,140,102,0.4)' }}>
          <Filter size={18} />
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
        {filteredProducts.map(product => {
          const discountedPrice = isPremium && product.discount > 0
            ? Math.round(product.price * (1 - product.discount / 100))
            : product.price;
          const isAdded = addedId === product.id;

          return (
            <div key={product.id} className="product-card" style={{ position: 'relative' }}>
              {/* Discount badge */}
              {product.discount > 0 && (
                <div style={{
                  position: 'absolute', top: '8px', left: '8px',
                  background: isPremium ? 'var(--danger)' : '#2B2D42',
                  color: 'white', fontSize: '10px', fontWeight: 800,
                  padding: '3px 7px', borderRadius: '99px',
                  display: 'flex', alignItems: 'center', gap: '3px', zIndex: 1
                }}>
                  {isPremium ? `−${product.discount}%` : (
                    <><Crown size={9} color="#FFD166" />{product.discount}% Premium</>
                  )}
                </div>
              )}
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <Star size={12} fill="#f59e0b" color="#f59e0b" />
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{product.rating} ({product.sold} đã bán)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <div>
                    <span className="product-price">{formatPrice(discountedPrice)}</span>
                    {isPremium && product.discount > 0 && (
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                        {formatPrice(product.price)}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    style={{
                      width: '30px', height: '30px', borderRadius: '50%',
                      background: isAdded ? 'var(--success)' : 'var(--primary-light)',
                      color: isAdded ? 'white' : 'var(--primary)',
                      border: 'none', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', cursor: 'pointer', fontWeight: 'bold',
                      fontSize: '18px', transition: 'all 0.2s'
                    }}
                  >
                    {isAdded ? '✓' : '+'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ height: '60px' }} />
    </div>
  );
}
