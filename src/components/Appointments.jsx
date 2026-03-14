import React from 'react';
import { Calendar, Clock, MapPin, Search } from 'lucide-react';

const MOCK_APPOINTMENTS = [
  {
    id: 1,
    petName: 'Max',
    type: 'Tiêm phòng - Dại',
    doctor: 'BS. Sarah Wilson',
    clinic: 'Bệnh viện thú y Central',
    date: '12 Thg 4, 2026',
    time: '10:00 Sáng',
    status: 'Sắp tới'
  },
  {
    id: 2,
    petName: 'Luna',
    type: 'Khám tổng quát',
    doctor: 'BS. James Smith',
    clinic: 'Phòng khám Happy Paws',
    date: '10 Thg 3, 2026',
    time: '02:30 Chiều',
    status: 'Hoàn thành'
  }
];

export default function Appointments({ navigateTo }) {
  return (
    <div className="petazy-screen animate-fade-in" style={{ paddingBottom: '120px' }}>
      
      {/* Header */}
      <div className="petazy-dashboard-header" style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', paddingBottom: '30px' }}>
        <h1 className="text-h1" style={{ color: 'white', marginBottom: '8px' }}>Lịch Hẹn</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>Quản lý lịch khám thú y</p>
      </div>

      <div style={{ padding: '24px' }}>
        
        {/* Search Bar */}
        <div style={{ background: 'white', borderRadius: 'var(--radius-pill)', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: 'var(--shadow-sm)', marginBottom: '24px' }}>
          <Search size={20} color="var(--text-muted)" />
          <input 
            type="text" 
            placeholder="Tìm kiếm lịch hẹn..." 
            style={{ border: 'none', background: 'transparent', width: '100%', fontSize: '15px', color: 'var(--text-main)', outline: 'none' }}
          />
        </div>

        {/* Appointment Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {MOCK_APPOINTMENTS.map(appt => (
            <div key={appt.id} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 className="text-h2" style={{ fontSize: '18px', marginBottom: '4px' }}>{appt.type}</h3>
                  <p className="text-body" style={{ color: 'var(--primary)', fontWeight: 800 }}>Cho: {appt.petName}</p>
                </div>
                <div style={{ 
                  background: appt.status === 'Sắp tới' ? 'var(--accent)' : 'var(--success)', 
                  color: appt.status === 'Sắp tới' ? '#8A6D00' : '#1E6E43',
                  padding: '6px 12px', borderRadius: 'var(--radius-pill)', fontSize: '12px', fontWeight: 800 
                }}>
                  {appt.status}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '14px', fontWeight: 600 }}>
                  <Calendar size={16} color="var(--primary)" />
                  <span>{appt.date}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '14px', fontWeight: 600 }}>
                  <Clock size={16} color="var(--secondary)" />
                  <span>{appt.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '14px', fontWeight: 600 }}>
                  <MapPin size={16} color="var(--danger)" />
                  <span>{appt.doctor} • {appt.clinic}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        <button 
          className="btn btn-primary" 
          style={{ width: '100%', padding: '16px', marginTop: '24px', fontSize: '16px' }}
          onClick={() => navigateTo('services')}
        >
          Đặt Lịch Khám Mới
        </button>

      </div>
    </div>
  );
}
