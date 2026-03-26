import React from 'react';
import { ShieldCheck, Syringe, ArrowRight, Plus, Bell, Stethoscope, BookOpen, ShoppingBag, ChevronRight, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';

const MOCK_PHARMACY = [
  {
    id: 3,
    name: 'Quellin Soft Chewables',
    price: 18.52,
    oldPrice: 20.00,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=400',
  },
  {
    id: 6,
    name: 'NexGard Chewables for Dogs',
    price: 45.00,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=400',
  }
];

const QUICK_SERVICES = [
  { icon: <Stethoscope size={22} />, label: 'Khám Bệnh', color: '#FFE0C2', iconColor: '#D9730D', route: 'services' },
  { icon: <Syringe size={22} />, label: 'Tiêm Phòng', color: '#D6E8FF', iconColor: '#0D63D9', route: 'services' },
  { icon: <ShieldCheck size={22} />, label: 'Bảo Hiểm', color: '#F5DC7A', iconColor: '#8A6D00', route: 'admin' },
  { icon: <BookOpen size={22} />, label: 'Hồ Sơ Y Tế', color: '#C2F0F4', iconColor: '#0D8ED9', route: 'health' },
  { icon: <ShoppingBag size={22} />, label: 'Nhà Thuốc', color: '#E3FCEF', iconColor: '#1E6E43', route: 'shop' },
  { icon: <Sparkles size={22} />, label: 'AI Chẩn Đoán', color: '#EAE3FF', iconColor: '#431E8C', route: 'ai' },
];

export default function Dashboard({ navigateTo, isPremium }) {
  return (
    <div className="petazy-screen animate-fade-in">

      {/* === HEADER === */}
      <div className="dash-header">
        {/* Top bar */}
        <div className="dash-topbar">
          <div className="dash-brand">
            <img 
              src={logo} 
              alt="LuvMiPet Logo" 
              className="dash-logo"
            />
            <span className="dash-brand-luv">Luv</span>
            <span className="dash-brand-mi">Mi</span>
            <span className="dash-brand-pet">Pet</span>
          </div>
          <button className="dash-notif-btn" aria-label="Thông báo">
            <Bell size={20} />
            <span className="dash-notif-dot" />
          </button>
        </div>

        {/* Hero text */}
        <div className="dash-hero">
          <h1 className="dash-hero-title">Chăm sóc<br />thông minh 🌟</h1>
          <p className="dash-hero-sub">Tìm bác sĩ thú y tốt nhất<br />cho thú cưng của bạn</p>
          <button className="btn btn-primary dash-cta-btn" onClick={() => navigateTo('services')}>
            Đặt Lịch Khám
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Decorative circles */}
        <div className="dash-deco-circle dash-deco-1" />
        <div className="dash-deco-circle dash-deco-2" />
        <div className="dash-deco-circle dash-deco-3" />
      </div>

      {/* === QUICK SERVICES === */}
      <div style={{ padding: '24px 20px 8px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 className="text-h2" style={{ fontWeight: 800 }}>Dịch Vụ Nhanh</h2>
          <span className="dash-see-all" onClick={() => navigateTo('services')}>Xem tất cả</span>
        </div>
        <div className="dash-service-grid">
          {QUICK_SERVICES.map((s, i) => (
            <div
              key={i}
              className="dash-service-item"
              onClick={() => navigateTo(s.route)}
            >
              <div className="dash-service-icon" style={{ background: s.color, color: s.iconColor }}>
                {s.icon}
              </div>
              <span className="dash-service-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* === PHARMACY === */}
      <div style={{ padding: '16px 20px 8px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h2 className="text-h2" style={{ fontWeight: 800 }}>Nhà Thuốc Thú Y</h2>
          <span className="dash-see-all" onClick={() => navigateTo('shop')}>Xem tất cả</span>
        </div>
        <div>
          {MOCK_PHARMACY.map(product => (
            <div
              key={product.id}
              className="petazy-h-card"
              style={{ border: isPremium ? '2px solid #FFD166' : '2px solid transparent', margin: '0 0 14px 0' }}
              onClick={() => navigateTo('shop')}
            >
              {product.oldPrice && (
                <div style={{
                  position: 'absolute', top: -10, left: 16,
                  background: isPremium ? 'var(--accent)' : 'var(--danger-light)',
                  color: isPremium ? 'var(--text-main)' : 'var(--danger)',
                  fontSize: 10, fontWeight: 800, padding: '4px 8px',
                  borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px',
                  zIndex: 2, boxShadow: 'var(--shadow-sm)'
                }}>
                  {isPremium ? '👑 VIP GIẢM 20%' : 'GIẢM 15%'}
                </div>
              )}
              <img src={product.image} className="petazy-h-card-img" alt={product.name} />
              <div className="petazy-h-card-content">
                <div className="petazy-h-card-title">{product.name}</div>
                <div className="petazy-h-card-price">${product.price.toFixed(2)}</div>
              </div>
              <div className="petazy-add-btn" onClick={(e) => { e.stopPropagation(); navigateTo('shop'); }}>
                <Plus size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === PREMIUM CALLOUT === */}
      {!isPremium && (
        <div className="dash-premium-card" onClick={() => navigateTo('profile')}>
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '3px' }}>👑 Mở Khóa Premium</h4>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', margin: 0 }}>Giảm 10% tại nhà thuốc &amp; dịch vụ</p>
          </div>
          <ArrowRight size={20} color="white" />
        </div>
      )}

    </div>
  );
}
