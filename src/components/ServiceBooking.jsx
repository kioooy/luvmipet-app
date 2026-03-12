import React, { useState } from 'react';
import { Search, MapPin, Star, Calendar, Clock } from 'lucide-react';

export default function ServiceBooking() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Grooming', 'Veterinary', 'Pet Hotel', 'Training'];
  
  const services = [
    {
      id: 1,
      name: 'Happy Paws Grooming Spa',
      category: 'Grooming',
      rating: 4.9,
      reviews: 124,
      location: 'Quận 1, TP.HCM',
      price: 'Từ 200.000đ',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Phòng Khám PetCare',
      category: 'Veterinary',
      rating: 4.8,
      reviews: 89,
      location: 'Quận 7, TP.HCM',
      price: 'Khám tổng quát: 150.000đ',
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cbcb8127?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Luxury Pet Resort',
      category: 'Pet Hotel',
      rating: 5.0,
      reviews: 42,
      location: 'Thành phố Thủ Đức',
      price: '250.000đ / ngày',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const filteredServices = activeCategory === 'All' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h1 className="text-h1">Đặt Dịch Vụ</h1>
        <p className="text-caption" style={{ marginTop: '4px' }}>Tìm kiếm spa, phòng khám & khách sạn tốt nhất</p>
      </div>

      <div style={{ position: 'relative', marginBottom: '24px' }}>
        <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
        <input 
          type="text" 
          placeholder="Tìm tên dịch vụ, khu vực..." 
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

      <div className="category-scroll" style={{ marginBottom: '24px' }}>
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

      <div>
        {filteredServices.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-content">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.2, marginBottom: '4px' }}>{service.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#fff7e0', padding: '2px 6px', borderRadius: '4px' }}>
                    <Star size={12} fill="#f59e0b" color="#f59e0b" />
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#b45309' }}>{service.rating}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <MapPin size={12} />
                  <span style={{ fontSize: '12px' }}>{service.location}</span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary)' }}>
                  {service.price}
                </div>
              </div>
              <button 
                className="btn btn-primary" 
                style={{ padding: '8px 16px', fontSize: '13px', marginTop: '12px', alignSelf: 'flex-end', width: '100%' }}
              >
                Đặt Lịch Ngay
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer to allow scrolling above bottom nav */}
      <div style={{ height: '60px' }}></div>
    </div>
  );
}
