import React from 'react';
import { Flame, Trophy, Bone, Activity, Smile, HeartPulse } from 'lucide-react';

export default function Dashboard({ navigateToLog, navigateTo }) {
  const healthScore = 92;
  const streak = 5;

  // Dynamic greeting based on current time
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Chào buổi sáng' : hour < 18 ? 'Chào buổi chiều' : 'Chào buổi tối';
  const greetingEmoji = hour < 12 ? '☀️' : hour < 18 ? '🌤️' : '🌙';

  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 className="text-h1">{greeting} {greetingEmoji}</h1>
          <p className="text-caption" style={{ marginTop: '4px' }}>Milu đang rất vui vẻ 🐶</p>
        </div>
        <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '3px solid var(--primary)', overflow: 'hidden' }}>
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
            alt="Milu" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Health Score Card */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
        {/* Background blob */}
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--primary-light)', borderRadius: '50%', zIndex: 0, opacity: 0.5 }}></div>
        
        <div style={{ zIndex: 1, position: 'relative', textAlign: 'center' }}>
          <h2 className="text-h2" style={{ marginBottom: '16px' }}>Điểm Sức Khỏe</h2>
          
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'conic-gradient(var(--secondary) 92%, #eef2f5 0)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span className="text-h1" style={{ color: 'var(--secondary)' }}>{healthScore}</span>
              <span className="text-caption">/100</span>
            </div>
          </div>
          
          <p className="text-body" style={{ marginTop: '16px', color: 'var(--success)' }}>
            💖 Tuyệt vời! Cún đang rất khỏe.
          </p>
        </div>
      </div>

      {/* Vaccine Reminder Alert */}
      <div
        className="card"
        onClick={() => navigateTo && navigateTo('health')}
        style={{
          marginBottom: '24px', cursor: 'pointer',
          background: 'linear-gradient(135deg, #fff7e0 0%, #ffe5e5 100%)',
          border: '1px solid #ffd166', display: 'flex', alignItems: 'center', gap: '14px'
        }}
      >
        <div style={{
          width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
          background: '#ffd166', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ fontSize: '22px' }}>💉</span>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, fontSize: '14px', color: '#92400e' }}>Sắp đến: Tiêm phòng Milu!</div>
          <div style={{ fontSize: '12px', color: '#b45309', marginTop: '2px' }}>Phòng bọ chét & ve • Còn 2 ngày</div>
        </div>
        <span style={{ fontSize: '12px', fontWeight: 700, color: '#d97706', whiteSpace: 'nowrap' }}>Xem →</span>
      </div>

      {/* Gamification Streak */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
        <div className="card" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #FF9A76 0%, #FF8C66 100%)', color: 'white' }}>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '10px', borderRadius: '12px' }}>
            <Flame size={24} color="white" />
          </div>
          <div>
            <div style={{ fontSize: '13px', opacity: 0.9, fontWeight: 600 }}>Chuỗi cập nhật</div>
            <div style={{ fontSize: '20px', fontWeight: 800 }}>{streak} Ngày</div>
          </div>
        </div>

        <div className="card" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #FFDA77 0%, #FFD166 100%)', color: 'var(--text-main)' }}>
          <div style={{ background: 'rgba(255,255,255,0.4)', padding: '10px', borderRadius: '12px' }}>
            <Trophy size={24} color="#d97706" />
          </div>
          <div>
            <div style={{ fontSize: '13px', opacity: 0.9, fontWeight: 700, color: '#92400e' }}>Huy hiệu</div>
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#92400e' }}>Tuần Khỏe!</div>
          </div>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <h3 className="text-h2" style={{ marginBottom: '16px' }}>Theo dõi hôm nay</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
        {[
          { icon: <Bone size={20} color="var(--primary)" />, label: 'Lượng ăn', value: 'Bình thường', bg: 'var(--primary-light)' },
          { icon: <Activity size={20} color="var(--secondary)" />, label: 'Vận động', value: '45 Phút', bg: '#e0fcf9' },
          { icon: <Smile size={20} color="var(--accent)" />, label: 'Tâm trạng', value: 'Vui vẻ', bg: '#fff7e0' },
          { icon: <HeartPulse size={20} color="var(--danger)" />, label: 'Nhịp tim', value: '110 bpm', bg: 'var(--danger-light)' },
        ].map((stat, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: stat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {stat.icon}
            </div>
            <div className="text-caption">{stat.label}</div>
            <div className="text-body" style={{ fontSize: '15px' }}>{stat.value}</div>
          </div>
        ))}
      </div>
      
      {/* Spacer to allow scrolling above bottom nav */}
      <div style={{ height: '40px' }}></div>
    </div>
  );
}
