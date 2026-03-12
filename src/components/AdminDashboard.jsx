import React from 'react';
import { Users, CalendarCheck, DollarSign, TrendingUp, CheckCircle, XCircle, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Tổng doanh thu', value: '12.500.000đ', icon: <DollarSign size={20} color="white" />, bg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
    { label: 'Lịch khám mới', value: '+15', icon: <CalendarCheck size={20} color="white" />, bg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' },
    { label: 'Khách hàng', value: '128', icon: <Users size={20} color="white" />, bg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
    { label: 'Tăng trưởng', value: '12%', icon: <TrendingUp size={20} color="white" />, bg: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' }
  ];

  const appointments = [
    { id: 1, petName: 'Milu', owner: 'Nguyễn Yến', service: 'Khám tổng quát', time: '09:00 - Hôm nay', status: 'pending', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&w=150&q=80' },
    { id: 2, petName: 'Mimi', owner: 'Trần Khoa', service: 'Tiêm phòng Dại', time: '10:30 - Hôm nay', status: 'approved', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&w=150&q=80' },
    { id: 3, petName: 'Buster', owner: 'Lê Nam', service: 'Cắt tỉa lông', time: '14:00 - Hôm nay', status: 'pending', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&w=150&q=80' },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '24px', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 className="text-h1" style={{ color: '#0f172a' }}>Admin Portal</h1>
          <p className="text-caption" style={{ marginTop: '4px' }}>Phòng Khám PetCare</p>
        </div>
        <div style={{ padding: '8px 16px', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: 'var(--radius-pill)', fontWeight: 800, fontSize: '14px' }}>
          Vai trò: Bác sĩ / Quản lý
        </div>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
        {stats.map((stat, idx) => (
          <div key={idx} className="card" style={{ background: stat.bg, color: 'white', border: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '8px', borderRadius: '10px' }}>
                {stat.icon}
              </div>
            </div>
            <div style={{ fontSize: '13px', opacity: 0.9, fontWeight: 600 }}>{stat.label}</div>
            <div style={{ fontSize: '20px', fontWeight: 800 }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Appointments List */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h2 className="text-h2" style={{ color: '#0f172a' }}>Yêu Cầu Đặt Lịch</h2>
        <span style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer' }}>Xem tất cả</span>
      </div>

      <div>
        {appointments.map(app => (
          <div key={app.id} className="card" style={{ marginBottom: '16px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <img src={app.image} alt={app.petName} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontWeight: 800, fontSize: '16px', color: '#0f172a' }}>{app.petName}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Chủ: {app.owner}</span>
                </div>
                <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14px' }}>{app.service}</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
              <Clock size={16} />
              <span>{app.time}</span>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              {app.status === 'pending' ? (
                <>
                  <button style={{ flex: 1, padding: '10px', borderRadius: 'var(--radius-md)', border: 'none', background: 'var(--success)', color: 'white', fontWeight: 700, fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <CheckCircle size={18} /> Duyệt hẹn
                  </button>
                  <button style={{ padding: '10px 16px', borderRadius: 'var(--radius-md)', border: 'none', background: 'var(--danger-light)', color: 'var(--danger)', fontWeight: 700, cursor: 'pointer' }}>
                    Từ chối
                  </button>
                </>
              ) : (
                <div style={{ width: '100%', padding: '10px', textAlign: 'center', background: '#f0fdf4', color: '#166534', borderRadius: 'var(--radius-md)', fontWeight: 700, fontSize: '14px' }}>
                  Đã xác nhận lịch
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: '80px' }}></div>
    </div>
  );
}
