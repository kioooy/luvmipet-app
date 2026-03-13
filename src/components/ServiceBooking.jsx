import React, { useState } from 'react';
import { Search, MapPin, Star, Calendar, Clock, Crown, CheckCircle, ArrowLeft, X } from 'lucide-react';

export default function ServiceBooking() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);

  // Demo: isPremium = false to show upsell
  const isPremium = false;

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
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slots: [
        { time: '09:00', premium: false, available: true },
        { time: '10:00', premium: true,  available: true },
        { time: '11:00', premium: false, available: false },
        { time: '14:00', premium: true,  available: true },
        { time: '15:00', premium: false, available: true },
        { time: '16:00', premium: true,  available: true },
      ]
    },
    {
      id: 2,
      name: 'Phòng Khám PetCare',
      category: 'Veterinary',
      rating: 4.8,
      reviews: 89,
      location: 'Quận 7, TP.HCM',
      price: 'Khám tổng quát: 150.000đ',
      image: 'https://images.unsplash.com/photo-1628009368231-7bb7cbcb8127?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slots: [
        { time: '08:30', premium: true,  available: true },
        { time: '09:30', premium: false, available: true },
        { time: '10:30', premium: true,  available: true },
        { time: '13:30', premium: false, available: false },
        { time: '14:30', premium: false, available: true },
        { time: '15:30', premium: true,  available: true },
      ]
    },
    {
      id: 3,
      name: 'Luxury Pet Resort',
      category: 'Pet Hotel',
      rating: 5.0,
      reviews: 42,
      location: 'Thành phố Thủ Đức',
      price: '250.000đ / ngày',
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      slots: [
        { time: 'Check-in 12:00', premium: false, available: true },
        { time: 'Check-in 14:00', premium: true,  available: true },
        { time: 'Check-in 16:00', premium: false, available: true },
      ]
    }
  ];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  // ── Booking confirmation modal ──
  if (bookingDone && selectedService) {
    return (
      <div className="animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <CheckCircle size={40} color="var(--success)" />
        </div>
        <h2 className="text-h1" style={{ marginBottom: '8px' }}>Đặt lịch thành công! 🎉</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '4px' }}>{selectedService.name}</p>
        <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '24px' }}>
          🕐 {selectedSlot?.time} · {new Date().toLocaleDateString('vi-VN')}
        </p>
        <div className="card" style={{ width: '100%', textAlign: 'left', background: '#f0fdf4', border: '1px solid #a7f3d0' }}>
          <p style={{ fontSize: '13px', color: '#065f46', lineHeight: 1.7 }}>
            ✅ Đã gửi lịch hẹn vào Sổ Sức Khỏe của Milu.<br />
            ✅ Nhắc nhở trước 2 giờ qua thông báo.<br />
            ✅ Có thể hủy/đổi lịch trong vòng 24h.
          </p>
        </div>
        <button
          className="btn btn-primary"
          style={{ width: '100%', marginTop: '20px' }}
          onClick={() => { setBookingDone(false); setSelectedService(null); setSelectedSlot(null); }}
        >
          Về Trang Đặt Dịch Vụ
        </button>
      </div>
    );
  }

  // ── Slot selection screen ──
  if (selectedService) {
    return (
      <div className="animate-fade-in" style={{ padding: '24px', minHeight: '100vh' }}>
        <button
          onClick={() => setSelectedService(null)}
          style={{ background: 'var(--surface)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)', marginBottom: '20px' }}
        >
          <ArrowLeft size={20} color="var(--text-main)" />
        </button>

        <img src={selectedService.image} alt={selectedService.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '16px' }} />
        <h2 className="text-h2">{selectedService.name}</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '20px' }}>
          <MapPin size={13} /> {selectedService.location} · ⭐ {selectedService.rating} ({selectedService.reviews} đánh giá)
        </div>

        <h3 style={{ fontWeight: 800, marginBottom: '12px' }}>Chọn khung giờ</h3>

        {!isPremium && (
          <div style={{ background: 'linear-gradient(135deg, #2B2D42, #1a1a24)', borderRadius: 'var(--radius-md)', padding: '12px 14px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Crown size={18} color="#FFD166" />
            <div style={{ color: 'white', fontSize: '12px' }}>
              <span style={{ color: '#FFD166', fontWeight: 800 }}>Premium</span> — mở khóa <strong>slot ưu tiên</strong> + đặt trước đỉnh giờ cao điểm.
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
          {selectedService.slots.map((slot, i) => {
            const locked = slot.premium && !isPremium;
            const unavailable = !slot.available;
            const isSelected = selectedSlot?.time === slot.time;
            return (
              <div
                key={i}
                onClick={() => !locked && !unavailable && setSelectedSlot(slot)}
                style={{
                  padding: '14px', borderRadius: 'var(--radius-md)', textAlign: 'center',
                  cursor: locked || unavailable ? 'not-allowed' : 'pointer',
                  border: isSelected ? '2px solid var(--primary)' : '2px solid #eee',
                  background: isSelected ? 'var(--primary-light)' : unavailable ? '#f5f5f5' : 'white',
                  opacity: unavailable ? 0.5 : 1,
                  position: 'relative', boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s'
                }}
              >
                {slot.premium && (
                  <Crown size={10} color="#FFD166" style={{ position: 'absolute', top: '6px', right: '6px' }} />
                )}
                <Clock size={14} color={isSelected ? 'var(--primary)' : 'var(--text-muted)'} style={{ marginBottom: '4px' }} />
                <div style={{ fontWeight: 700, fontSize: '14px', color: isSelected ? 'var(--primary)' : locked ? '#aaa' : 'var(--text-main)' }}>{slot.time}</div>
                <div style={{ fontSize: '10px', color: unavailable ? '#ccc' : locked ? '#bbb' : 'var(--text-muted)', marginTop: '2px' }}>
                  {unavailable ? 'Đã đầy' : locked ? '🔒 Premium' : 'Còn chỗ'}
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="btn btn-primary"
          style={{ width: '100%', opacity: selectedSlot ? 1 : 0.5 }}
          disabled={!selectedSlot}
          onClick={() => selectedSlot && setBookingDone(true)}
        >
          {selectedSlot ? `Xác nhận lịch ${selectedSlot.time}` : 'Chọn một khung giờ'}
        </button>
        <div style={{ height: '80px' }} />
      </div>
    );
  }

  // ── Main service list ──
  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 className="text-h1">Đặt Dịch Vụ</h1>
        <p className="text-caption" style={{ marginTop: '4px' }}>Tìm kiếm spa, phòng khám & khách sạn tốt nhất</p>
      </div>

      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
        <input
          type="text"
          placeholder="Tìm tên dịch vụ, khu vực..."
          style={{ width: '100%', padding: '14px 14px 14px 48px', borderRadius: 'var(--radius-md)', border: 'none', background: 'white', boxShadow: 'var(--shadow-sm)', fontSize: '15px', fontFamily: 'inherit', outline: 'none' }}
        />
      </div>

      <div className="category-scroll" style={{ marginBottom: '20px' }}>
        {categories.map(cat => (
          <div key={cat} className={`category-chip ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
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
                <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--primary)' }}>{service.price}</div>
              </div>
              <button
                className="btn btn-primary"
                style={{ padding: '10px 16px', fontSize: '13px', marginTop: '12px', width: '100%' }}
                onClick={() => setSelectedService(service)}
              >
                Xem lịch & Đặt ngay
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ height: '60px' }} />
    </div>
  );
}
