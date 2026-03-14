import React, { useState } from 'react';
import { ShoppingBag, ArrowLeft, Heart, Search, CheckCircle2, ChevronRight, Plus, Minus, MapPin, CreditCard } from 'lucide-react';

const MOCK_PRODUCTS = [
  { 
    id: 1, 
    name: 'Merrick Purrfect Bistro Grain Free Weight Control', 
    price: 12.57, 
    oldPrice: 15.00, 
    shop: 'Tamanna Pharmacy Ltd.', 
    deliveryTime: '15 min', 
    deliveryFee: 0, 
    rating: 4.6, 
    reviews: 1248, 
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400', 
    category: 'Pet Food' 
  },
  { 
    id: 2, 
    name: 'Frolic (joint-health) Supplements', 
    price: 50.00, 
    shop: 'Wellbeing Pharmacy', 
    deliveryTime: '12 min', 
    deliveryFee: 5, 
    rating: 4.5, 
    reviews: 204, 
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400', 
    category: 'Pet Food' 
  },
  { 
    id: 3, 
    name: 'Quellin Soft Chewables for Dogs', 
    price: 18.52, 
    shop: 'Tamanna Pharmacy Ltd.', 
    deliveryTime: '15 min', 
    deliveryFee: 0, 
    rating: 4.9, 
    reviews: 580, 
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=400', 
    category: 'Pet Pharmacy' 
  },
  { 
    id: 4, 
    name: 'Royal Canin Mother & Babycat', 
    price: 35.00, 
    shop: 'Cat World', 
    deliveryTime: '20 min', 
    deliveryFee: 2, 
    rating: 4.8, 
    reviews: 512, 
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400', 
    category: 'Pet Food' 
  },
  { 
    id: 5, 
    name: 'Whiskas Tasty Mix Seafood', 
    price: 8.50, 
    oldPrice: 10.00, 
    shop: 'Cat World', 
    deliveryTime: '10 min', 
    deliveryFee: 0, 
    rating: 4.5, 
    reviews: 800, 
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=400', 
    category: 'Pet Food' 
  },
  {
    id: 6,
    name: 'NexGard Chewables for Dogs',
    price: 45.00,
    shop: 'Wellbeing Pharmacy',
    deliveryTime: '15 min',
    deliveryFee: 5,
    rating: 4.9,
    reviews: 2100,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=400',
    category: 'Pet Pharmacy'
  },
  {
    id: 7,
    name: 'Oster Oatmeal Naturals Shampoo',
    price: 15.00,
    shop: 'Tamanna Pharmacy Ltd.',
    deliveryTime: '25 min',
    deliveryFee: 2,
    rating: 4.7,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400',
    category: 'Pet Pharmacy'
  }
];

const CATEGORIES = [
  { name: 'Thức ăn', icon: '🦴', colorClass: 'bg-pastel-green' },
  { name: 'Đồ chơi', icon: '🥎', colorClass: 'bg-pastel-yellow' },
  { name: 'Quần áo', icon: '👕', colorClass: 'bg-pastel-blue' },
  { name: 'Nội thất', icon: '🛏️', colorClass: 'bg-pastel-purple' },
  { name: 'Hiệu thuốc', icon: '⚕️', colorClass: 'bg-pastel-gray' },
  { name: 'Phòng khám', icon: '🏥', colorClass: 'bg-pastel-green' }, // New feature requirement
];

export default function Marketplace({ isPremium }) {
  const [view, setView] = useState('shop'); // shop, pharmacy, details, cart, order_info, my_cards
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [qtyToAdd, setQtyToAdd] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const cartTotalAmount = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product, quantity) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { product, quantity }];
    });
    setView('cart');
  };

  const updateCartQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  // --- RENDERING VIEWS ---

  if (view === 'shop') {
    return (
      <div className="petazy-screen">
        {/* Header */}
        <div className="petazy-header">
          <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 24 }}>
              <div style={{ width: '100%', height: 3, background: 'var(--text-main)', borderRadius: 2 }} />
              <div style={{ width: '70%', height: 3, background: 'var(--text-main)', borderRadius: 2 }} />
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: 'var(--primary)', fontSize: 28, fontWeight: 'bold' }}>petazy</span>
          </div>

          <div style={{ position: 'relative' }} onClick={() => setView('cart')}>
            <ShoppingBag size={24} color="var(--text-main)" />
            {cartTotalItems > 0 && (
              <div style={{ position: 'absolute', top: -6, right: -6, background: 'var(--danger)', color: 'white', fontSize: 10, fontWeight: 'bold', width: 16, height: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cartTotalItems}
              </div>
            )}
          </div>
        </div>

        {/* Hero Title */}
        <div style={{ padding: '0 24px 24px 24px' }}>
          <h1 className="text-h1" style={{ fontSize: 32, fontWeight: 800 }}>Cửa Hàng</h1>
        </div>

        {/* Categories (Horizontal) */}
        <div className="petazy-category-scroll">
          <div className="petazy-cat-block petazy-cat-orange" onClick={() => setView('pharmacy')}>
            <span style={{ fontSize: 32 }}>🦴</span>
            <span>Thức ăn</span>
          </div>
          <div className="petazy-cat-block petazy-cat-yellow" onClick={() => setView('pharmacy')}>
            <span style={{ fontSize: 32 }}>🥎</span>
            <span>Đồ chơi</span>
          </div>
          <div className="petazy-cat-block petazy-cat-blue" onClick={() => setView('pharmacy')}>
            <span style={{ fontSize: 32 }}>👕</span>
            <span>Quần áo</span>
          </div>
          <div className="petazy-cat-block petazy-cat-cyan" onClick={() => setView('pharmacy')}>
            <span style={{ fontSize: 32 }}>🏥</span>
            <span>Phòng khám</span>
          </div>
        </div>

        {/* Single Premium Banner */}
        <div style={{ margin: '0 24px 24px 24px', background: isPremium ? 'var(--dark-teal)' : 'linear-gradient(135deg, #FFD166 0%, #FFB03A 100%)', borderRadius: 'var(--radius-md)', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: isPremium ? 'white' : '#2B2D42', boxShadow: isPremium ? 'var(--shadow-md)' : '0 4px 12px rgba(255, 209, 102, 0.4)', marginTop: 16 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span>{isPremium ? '💎' : '👑'}</span>
              <h3 style={{ fontSize: 16, fontWeight: 800 }}>{isPremium ? 'LuvMiPet VIP Member' : 'LuvMiPet Premium'}</h3>
            </div>
            <p style={{ fontSize: 13, fontWeight: 600, opacity: 0.9, marginBottom: 12 }}>
              {isPremium ? 'Tuyệt vời! Bạn đang nhận ưu đãi giảm thêm 10%.' : 'Đăng ký ngay để giảm 10% toàn shop!'}
            </p>
            {!isPremium && (
              <button style={{ background: '#2B2D42', color: 'white', border: 'none', padding: '6px 12px', borderRadius: 'var(--radius-pill)', fontWeight: 700, fontSize: 12 }}>Đăng ký ngay</button>
            )}
          </div>
          <div style={{ width: 50, height: 50, background: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 24 }}>{isPremium ? '✨' : '💸'}</span>
          </div>
        </div>

        {/* Pet Food Section */}
        <div style={{ padding: '0 24px 16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: 18, fontWeight: 800 }}>Thức ăn thú cưng</h3>
          <span style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 700 }} onClick={() => setView('pharmacy')}>Xem tất cả</span>
        </div>
        
        <div>
          {MOCK_PRODUCTS.filter(p => p.category === 'Pet Food').map(product => (
            <div key={product.id} className="petazy-h-card" style={{ border: isPremium ? '2px solid #FFD166' : '2px solid transparent' }} onClick={() => { setSelectedProduct(product); setQtyToAdd(1); setView('details'); }}>
               {product.oldPrice && (
                  <div style={{ position: 'absolute', top: -10, left: 16, background: isPremium ? '#FFD166' : 'var(--danger-light)', color: isPremium ? '#2B2D42' : 'var(--danger)', fontSize: 10, fontWeight: 800, padding: '4px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2, boxShadow: 'var(--shadow-sm)' }}>
                    {isPremium ? '👑 VIP 20% OFF' : '15% OFF'}
                  </div>
                )}
              <img src={product.image} className="petazy-h-card-img" alt={product.name} />
              <div className="petazy-h-card-content">
                <div className="petazy-h-card-title">{product.name}</div>
                <div className="petazy-h-card-price">${product.price.toFixed(2)}</div>
              </div>
              <div className="petazy-add-btn" onClick={(e) => { e.stopPropagation(); addToCart(product, 1); }}>
                <Plus size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Clinic & Supplements Section */}
        <div style={{ padding: '24px 24px 16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: 18, fontWeight: 800 }}>Phòng Khám & Hiệu Thuốc</h3>
          <span style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 700 }} onClick={() => setView('pharmacy')}>Xem tất cả</span>
        </div>
        
        <div>
          {MOCK_PRODUCTS.filter(p => p.category === 'Pet Pharmacy').map(product => (
            <div key={product.id} className="petazy-h-card" style={{ border: isPremium ? '2px solid #FFD166' : '2px solid transparent' }} onClick={() => { setSelectedProduct(product); setQtyToAdd(1); setView('details'); }}>
               {product.oldPrice && (
                  <div style={{ position: 'absolute', top: -10, left: 16, background: isPremium ? '#FFD166' : 'var(--danger-light)', color: isPremium ? '#2B2D42' : 'var(--danger)', fontSize: 10, fontWeight: 800, padding: '4px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2, boxShadow: 'var(--shadow-sm)' }}>
                    {isPremium ? '👑 VIP 20% OFF' : '15% OFF'}
                  </div>
                )}
              <img src={product.image} className="petazy-h-card-img" alt={product.name} />
              <div className="petazy-h-card-content">
                <div className="petazy-h-card-title">{product.name}</div>
                <div className="petazy-h-card-price">${product.price.toFixed(2)}</div>
              </div>
              <div className="petazy-add-btn" onClick={(e) => { e.stopPropagation(); addToCart(product, 1); }}>
                <Plus size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Premium Registration Banner (Only for Free Users) */}
        {!isPremium && (
          <div style={{ margin: '0 24px 24px 24px', background: 'linear-gradient(135deg, #FFD166 0%, #FFB03A 100%)', borderRadius: 'var(--radius-md)', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#2B2D42', boxShadow: '0 4px 12px rgba(255, 209, 102, 0.4)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span>👑</span>
                <h3 style={{ fontSize: 16, fontWeight: 800 }}>LuvMiPet Premium</h3>
              </div>
              <p style={{ fontSize: 13, fontWeight: 600, opacity: 0.9, marginBottom: 12 }}>Đăng ký ngay để giảm 10% toàn shop!</p>
              <button style={{ background: '#2B2D42', color: 'white', border: 'none', padding: '6px 12px', borderRadius: 'var(--radius-pill)', fontWeight: 700, fontSize: 12 }}>Đăng ký ngay</button>
            </div>
            <div style={{ width: 50, height: 50, background: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 24 }}>💸</span>
            </div>
          </div>
        )}



        <div style={{ height: 100 }} />
      </div>
    );
  }

  if (view === 'pharmacy') {
    return (
      <div className="petazy-screen">
        <div className="petazy-header">
          <ArrowLeft size={24} color="var(--text-main)" onClick={() => setView('shop')} style={{ cursor: 'pointer' }} />
          <h2 className="text-h2" style={{ fontWeight: 800 }}>Hiệu Thuốc Thú Y</h2>
          <Search size={24} color="var(--text-main)" />
        </div>

        <div style={{ padding: '0 24px 24px 24px' }}>
          <h1 className="text-h1" style={{ marginBottom: 8, fontSize: 28, lineHeight: 1.2 }}>Mọi sản phẩm<br/>cho thú cưng</h1>
          <p className="text-caption" style={{ marginBottom: 24, fontSize: 14 }}>Tìm kiếm qua 1000+ sản phẩm</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px 16px 24px' }}>
          <h3 style={{ fontSize: 18, fontWeight: 800 }}>Thực Phẩm Bổ Sung</h3>
          <span style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 700 }}>Xem tất cả</span>
        </div>

        {/* Horizontal Product Cards */}
        <div>
          {MOCK_PRODUCTS.map(product => (
            <div key={product.id} className="petazy-h-card" style={{ border: isPremium ? '2px solid #FFD166' : '2px solid transparent' }} onClick={() => { setSelectedProduct(product); setQtyToAdd(1); setView('details'); }}>
               {product.oldPrice && (
                  <div style={{ position: 'absolute', top: -10, left: 16, background: isPremium ? '#FFD166' : 'var(--danger-light)', color: isPremium ? '#2B2D42' : 'var(--danger)', fontSize: 10, fontWeight: 800, padding: '4px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2, boxShadow: 'var(--shadow-sm)' }}>
                    {isPremium ? '👑 VIP 20% OFF' : '15% OFF'}
                  </div>
                )}
              <img src={product.image} className="petazy-h-card-img" alt={product.name} />
              <div className="petazy-h-card-content">
                <div className="petazy-h-card-title">{product.name}</div>
                <div className="petazy-h-card-price">${product.price.toFixed(2)}</div>
              </div>
              <div className="petazy-add-btn" onClick={(e) => { e.stopPropagation(); addToCart(product, 1); }}>
                <Plus size={16} />
              </div>
            </div>
          ))}
        </div>

        <div style={{ height: 100 }} />
      </div>
    );
  }

  if (view === 'details' && selectedProduct) {
    return (
      <div className="figma-screen" style={{ backgroundColor: 'var(--dark-teal)' }}>
        <div style={{ padding: '40px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
          <ArrowLeft size={24} color="var(--primary)" onClick={() => setView('pharmacy')} style={{ cursor: 'pointer' }} />
          <h2 style={{ color: 'white', fontSize: 16, fontWeight: 600 }}>Chi Tiết Sản Phẩm</h2>
          <div style={{ position: 'relative' }} onClick={() => setView('cart')}>
            <ShoppingBag size={24} color="var(--primary)" />
            {cartTotalItems > 0 && (
              <div style={{ position: 'absolute', top: -6, right: -6, background: 'white', color: 'var(--dark-teal)', fontSize: 10, fontWeight: 'bold', width: 16, height: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cartTotalItems}
              </div>
            )}
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <img src={selectedProduct.image} alt="" style={{ width: '60%', maxHeight: 250, objectFit: 'contain', zIndex: 2 }} />
          
          {/* Quantity Selector Floating */}
          <div style={{ background: 'white', borderRadius: 20, display: 'flex', alignItems: 'center', padding: '6px 12px', gap: 16, marginTop: 24, boxShadow: 'var(--shadow-lg)' }}>
            <Minus size={18} onClick={() => setQtyToAdd(Math.max(1, qtyToAdd - 1))} style={{ cursor: 'pointer', color: 'var(--text-main)' }} />
            <span style={{ fontWeight: 800, fontSize: 16, minWidth: 20, textAlign: 'center' }}>{qtyToAdd}</span>
            <Plus size={18} onClick={() => setQtyToAdd(qtyToAdd + 1)} style={{ cursor: 'pointer', color: 'var(--danger)' }} />
          </div>
        </div>

        <div className="figma-body" style={{ flex: 'none', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 32, marginTop: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <h1 className="text-h1" style={{ fontSize: 22, maxWidth: '70%' }}>{selectedProduct.name}</h1>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
              <Heart size={20} color="var(--text-muted)" fill="transparent" />
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
            <MapPin size={14} color="var(--text-muted)" />
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Cửa hàng gần bạn</span>
            <Star size={14} color="#FFD166" fill="#FFD166" style={{ marginLeft: 12 }} />
            <span style={{ fontSize: 13, fontWeight: 700 }}>{selectedProduct.rating} <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>({selectedProduct.reviews} Đánh giá)</span></span>
          </div>

          {/* Pharmacy Options */}
          <div className="card" style={{ border: '2px solid var(--primary)', position: 'relative', marginBottom: 12 }}>
            <div style={{ position: 'absolute', top: -10, right: 10, background: 'var(--primary)', color: 'white', borderRadius: '50%', padding: 2 }}>
              <CheckCircle2 size={16} color="white" fill="var(--primary)" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <h4 style={{ fontSize: 14 }}>{selectedProduct.shop}</h4>
              <span style={{ color: 'var(--danger)', fontWeight: 800 }}>${selectedProduct.price.toFixed(2)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
              <span style={{ color: 'var(--text-muted)' }}>Thời gian giao: {selectedProduct.deliveryTime}</span>
              <span style={{ color: 'var(--success)', fontWeight: 700 }}>{selectedProduct.deliveryFee === 0 ? 'Giao hàng miễn phí' : `Phí ship $${selectedProduct.deliveryFee}`}</span>
            </div>
          </div>

          <button className="btn btn-primary" style={{ width: '100%', marginTop: 24, padding: 18, fontSize: 16 }} onClick={() => addToCart(selectedProduct, qtyToAdd)}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }

  if (view === 'cart') {
    return (
      <div className="figma-screen" style={{ backgroundColor: 'var(--dark-teal)' }}>
        <div style={{ padding: '40px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ color: 'var(--primary)', fontSize: 24, fontWeight: 'bold' }}>etazy</div>
        </div>

        <div className="figma-body" style={{ flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 24, display: 'flex', flexDirection: 'column' }}>
          <h1 className="text-h1" style={{ marginBottom: 24, fontSize: 24 }}>Giỏ Hàng Của Bạn</h1>
          
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {cart.map(item => (
              <div key={item.product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 24, gap: 16 }}>
                <img src={item.product.image} alt="" style={{ width: 50, height: 60, objectFit: 'contain' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.2, marginBottom: 4 }}>{item.product.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>${(item.product.price * item.quantity).toFixed(2)}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Minus size={16} onClick={() => updateCartQty(item.product.id, -1)} style={{ cursor: 'pointer' }} />
                  <span style={{ fontWeight: 800 }}>{String(item.quantity).padStart(2, '0')}</span>
                  <Plus size={16} onClick={() => updateCartQty(item.product.id, 1)} style={{ cursor: 'pointer' }} />
                </div>
              </div>
            ))}
            {cart.length === 0 && <p className="text-muted" style={{ textAlign: 'center', marginTop: 40 }}>Giỏ hàng đang trống.</p>}
          </div>
        </div>

        <div className="figma-bottom-sheet">
          {isPremium && (
            <div style={{ background: 'rgba(255, 209, 102, 0.2)', padding: '8px 16px', borderRadius: '12px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFD166' }}>
              <span>👑</span> <span style={{ fontSize: '13px', fontWeight: 700 }}>Ưu đãi Premium: Giảm 10% tổng hóa đơn!</span>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>Tạm tính</span>
            <span style={{ fontSize: 22, fontWeight: 800 }}>${isPremium ? (cartTotalAmount * 0.9).toFixed(2) : cartTotalAmount.toFixed(2)}</span>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', padding: 18 }} onClick={() => setView('order_info')} disabled={cart.length === 0}>
            Thanh toán
          </button>
        </div>
      </div>
    );
  }

  if (view === 'order_info') {
    return (
      <div className="figma-screen" style={{ backgroundColor: 'var(--dark-teal)' }}>
        <div style={{ padding: '40px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <ArrowLeft size={24} color="var(--primary)" onClick={() => setView('cart')} style={{ cursor: 'pointer' }} />
          <h2 style={{ color: 'white', fontSize: 18, fontWeight: 600 }}>Thông Tin Đơn Hàng</h2>
        </div>

        <div className="figma-body" style={{ flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 24, paddingBottom: 200, overflowY: 'auto' }}>
          
          {/* Shipping To */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <h4 style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: 1, textTransform: 'uppercase' }}>Giao Hàng Đến</h4>
            <span style={{ fontSize: 12, color: 'var(--text-main)', fontWeight: 700 }}>Thay đổi</span>
          </div>
          <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 32 }}>Banasree, Block-B, Road-3, Rampura,<br/>Dhaka, Dhaka</p>

          <div style={{ height: 1, background: '#eee', marginBottom: 32 }} />

          {/* Payment Method */}
          <div style={{ marginBottom: 12 }}>
            <h4 style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: 1, textTransform: 'uppercase' }}>Phương Thức Thanh Toán</h4>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }} onClick={() => setView('my_cards')} cursor="pointer">
            {paymentMethod ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <CreditCard size={20} color="var(--dark-teal)" />
                <span style={{ fontSize: 15, fontWeight: 700 }}>•••• {paymentMethod}</span>
              </div>
            ) : (
              <span style={{ color: 'var(--success)', fontWeight: 700 }}>Vui lòng chọn</span>
            )}
            <ChevronRight size={20} color="var(--text-muted)" />
          </div>

          <div style={{ height: 1, background: '#eee', marginBottom: 32 }} />

          {/* Order Details */}
          <div style={{ marginBottom: 16 }}>
            <h4 style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: 1, textTransform: 'uppercase' }}>Chi Tiết Đơn Hàng</h4>
          </div>
          
          {cart.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <img src={item.product.image} alt="" style={{ width: 40, height: 40, objectFit: 'contain' }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{item.product.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{item.quantity}x</div>
                </div>
              </div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>
                ${(item.product.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

        </div>

        {/* Floating Bottom Sheet */}
        <div className="figma-bottom-sheet">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
            <span>Tạm tính</span>
            <span style={{ fontWeight: 700, color: 'white' }}>${cartTotalAmount.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
            <span>Phí giao hàng</span>
            <span style={{ fontWeight: 700, color: 'var(--success)' }}>Miễn phí</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
            <span style={{ fontSize: 15 }}>Tổng thanh toán</span>
            <span style={{ fontSize: 20, fontWeight: 800 }}>${cartTotalAmount.toFixed(2)}</span>
          </div>
          <button className="btn btn-primary" style={{ width: '100%', padding: 18 }} onClick={() => {
            alert('Đặt Hàng Thành Công!');
            setCart([]);
            setView('shop');
          }}>
            Đặt Hàng
          </button>
        </div>
      </div>
    );
  }

  if (view === 'my_cards') {
    return (
      <div className="figma-screen" style={{ backgroundColor: 'var(--dark-teal)' }}>
        <div style={{ padding: '40px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
          <ArrowLeft size={24} color="var(--primary)" onClick={() => setView('order_info')} style={{ cursor: 'pointer' }} />
          <h2 style={{ color: 'white', fontSize: 18, fontWeight: 600 }}>Thẻ Của Tôi</h2>
        </div>

        {/* Colorful Card Graphic */}
        <div style={{ margin: '0 24px 32px 24px', height: 200, background: 'linear-gradient(135deg, #FFD166 0%, #FF8C66 100%)', borderRadius: 20, position: 'relative', overflow: 'hidden', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ position: 'absolute', right: -40, bottom: -40, width: 200, height: 200, background: '#FFAB9B', borderRadius: '50%', opacity: 0.8 }}></div>
          <div style={{ position: 'absolute', left: 0, bottom: 0, width: 140, height: 100, background: '#A1C4FD', borderTopRightRadius: 100 }}></div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', opacity: 0.8 }}>Số dư</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#1a1a1a' }}>$62,358.77</div>
            </div>
            <div style={{ fontWeight: 800, fontSize: 18, color: '#1a1a1a' }}>amazon</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 2 }}>
            <div style={{ color: 'white', fontWeight: 700, letterSpacing: 2 }}>10/30</div>
            <div style={{ color: '#1a1a1a', fontWeight: 600 }}>John Smith</div>
          </div>
        </div>

        <div className="figma-body" style={{ flex: 1, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 32, display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Số Thẻ</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>1234 5783 1231 9123</div>
          </div>
          <div style={{ height: 1, background: '#eee', margin: '16px 0' }} />

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Tên Chủ Thẻ</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Darlene Robertson</div>
          </div>
          <div style={{ height: 1, background: '#eee', margin: '16px 0' }} />

          <div style={{ display: 'flex', gap: 32, marginBottom: 24 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Tháng</div>
              <div style={{ fontSize: 16, fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                01 <ChevronRight size={16} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Năm</div>
              <div style={{ fontSize: 16, fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                2021 <ChevronRight size={16} />
              </div>
            </div>
          </div>
          <div style={{ height: 1, background: '#eee', margin: '16px 0' }} />

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Mã CVC</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>3124</div>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: 24 }}>
            <button className="btn btn-primary" style={{ width: '100%', padding: 18 }} onClick={() => {
              setPaymentMethod('9123');
              setView('order_info');
            }}>
              Hoàn tất
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return null;
}
