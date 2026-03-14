import React, { useState } from 'react';
import { ShieldCheck, Cross, Syringe, BookHeart, Building2, Plus, ArrowRight } from 'lucide-react';

// Reusing mock data for Pet Pharmacy list
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

export default function Dashboard({ navigateTo, isPremium }) {

  return (
    <div className="petazy-screen animate-fade-in">
      
      {/* Top Section (Hero Header) */}
      <div className="petazy-dashboard-header">
        <span className="petazy-dashboard-logo">luvmipet</span>
        
        <h1 className="petazy-dashboard-title">Chăm sóc thông minh</h1>
        <p className="petazy-dashboard-subtitle">Tìm bác sĩ thú y tốt nhất cho thú cưng</p>
        
        <button className="btn btn-primary" style={{ padding: '16px 28px', fontSize: '15px' }} onClick={() => navigateTo('services')}>
          Đặt Lịch Khám
        </button>

        {/* Decorative graphic element (Mockup style) */}
        <div style={{ position: 'absolute', top: '40px', right: '-20px', width: '150px', height: '150px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-40px', right: '40px', width: '200px', height: '200px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '50%' }}></div>
      </div>

      <div style={{ marginTop: '24px' }}>
        {/* Quick Services Section */}
        <div style={{ padding: '0 24px 16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="text-h2" style={{ fontWeight: 800 }}>Dịch Vụ Nhanh</h2>
        </div>

        <div className="petazy-service-grid">
            <div className="petazy-service-icon-wrapper" style={{ background: 'var(--accent)', color: '#8A6D00' }} onClick={() => navigateTo('admin')}>
              <ShieldCheck size={28} />
            </div>
            <span>Bảo Hiểm</span>
        </div>

        <div style={{ padding: '8px 24px 16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="text-h2" style={{ fontWeight: 800 }}>Nhà Thuốc Thú Y</h2>
          <span style={{ fontSize: 13, color: 'var(--dark-teal)', fontWeight: 700, cursor: 'pointer' }} onClick={() => navigateTo('shop')}>Xem tất cả</span>
        </div>

        <div>
          {MOCK_PHARMACY.map(product => (
            <div key={product.id} className="petazy-h-card" style={{ border: isPremium ? '2px solid #FFD166' : '2px solid transparent' }} onClick={() => navigateTo('shop')}>
                {product.oldPrice && (
                  <div style={{ position: 'absolute', top: -10, left: 16, background: isPremium ? 'var(--accent)' : 'var(--danger-light)', color: isPremium ? 'var(--text-main)' : 'var(--danger)', fontSize: 10, fontWeight: 800, padding: '4px 8px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '4px', zIndex: 2, boxShadow: 'var(--shadow-sm)' }}>
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

        {/* Premium Callout */}
        {!isPremium && (
          <div style={{ margin: '8px 24px 24px 24px', background: 'white', borderRadius: 'var(--radius-md)', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.03)', border: '1px solid #FFEBE5', cursor: 'pointer' }} onClick={() => navigateTo('profile')}>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>👑 Mở Khóa Premium</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Giảm 10% tại nhà thuốc & dịch vụ</p>
            </div>
            <ArrowRight size={20} color="var(--primary)" />
          </div>
        )}

      </div>
    </div>
  );
}
