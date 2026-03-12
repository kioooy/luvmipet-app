import React, { useState } from 'react';
import { Smile, Frown, Meh, Utensils, ActivitySquare, CheckCircle } from 'lucide-react';

export default function DailyLog({ navigateTo }) {
  const [mood, setMood] = useState(null);
  const [food, setFood] = useState(50);
  const [activity, setActivity] = useState(50);
  const [symptoms, setSymptoms] = useState([]);
  
  const allSymptoms = ['Gãi nhiều', 'Phân lỏng', 'Trốn góc tối', 'Ho/Khạc', 'Bỏ ăn', 'Nôn mửa'];

  const toggleSymptom = (sym) => {
    if (symptoms.includes(sym)) {
      setSymptoms(symptoms.filter(s => s !== sym));
    } else {
      setSymptoms([...symptoms, sym]);
    }
  };

  const handleSave = () => {
    alert("Đã lưu nhật ký thành công! +10 Điểm 🍖");
    navigateTo('dashboard');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
        <button onClick={() => navigateTo('dashboard')} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: 'var(--text-main)' }}>
          ←
        </button>
        <h1 className="text-h2">Hôm nay Milu thế nào?</h1>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 className="text-body" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Smile size={18} color="var(--primary)" /> Tâm trạng (Mood)
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
          {[
            { id: 'happy', icon: <Smile size={32} />, label: 'Rất vui', color: 'var(--success)' },
            { id: 'normal', icon: <Meh size={32} />, label: 'Bình thường', color: 'var(--accent)' },
            { id: 'tired', icon: <Frown size={32} />, label: 'Lừ đừ', color: 'var(--text-muted)' }
          ].map((item) => (
            <div 
              key={item.id}
              onClick={() => setMood(item.id)}
              style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                padding: '16px 8px',
                borderRadius: '16px',
                border: mood === item.id ? `2px solid ${item.color}` : '2px solid transparent',
                background: mood === item.id ? `${item.color}20` : 'var(--background)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                transform: mood === item.id ? 'scale(1.05)' : 'scale(1)'
              }}>
              <div style={{ color: mood === item.id ? item.color : 'var(--text-muted)' }}>
                {item.icon}
              </div>
              <span className="text-caption" style={{ marginTop: '8px', color: mood === item.id ? item.color : 'var(--text-muted)' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 className="text-body" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Utensils size={18} color="var(--primary)" /> Lượng ăn
        </h3>
        <input 
          type="range" 
          min="0" max="100" 
          value={food} 
          onChange={(e) => setFood(e.target.value)}
          style={{ width: '100%', accentColor: 'var(--primary)', height: '6px', borderRadius: '4px', outline: 'none' }} 
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          <span className="text-caption">Bỏ ăn</span>
          <span className="text-caption" style={{ color: 'var(--primary)' }}>{food}%</span>
          <span className="text-caption">Ăn khỏe</span>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 className="text-body" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ActivitySquare size={18} color="var(--primary)" /> Vận động & Chơi đùa
        </h3>
        <input 
          type="range" 
          min="0" max="100" 
          value={activity} 
          onChange={(e) => setActivity(e.target.value)}
          style={{ width: '100%', accentColor: 'var(--secondary)', height: '6px', borderRadius: '4px', outline: 'none' }} 
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          <span className="text-caption">Nằm ì</span>
          <span className="text-caption" style={{ color: 'var(--secondary)' }}>{activity}%</span>
          <span className="text-caption">Chạy giỡn liên tục</span>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '32px' }}>
        <h3 className="text-body" style={{ marginBottom: '16px' }}>Dấu hiệu bất thường (nếu có)</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {allSymptoms.map((sym) => {
            const isActive = symptoms.includes(sym);
            return (
              <div 
                key={sym}
                onClick={() => toggleSymptom(sym)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: isActive ? 'var(--primary)' : 'var(--background)',
                  color: isActive ? 'white' : 'var(--text-main)',
                  border: isActive ? '1px solid var(--primary)' : '1px solid #e0e0e0',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                {isActive && <CheckCircle size={14} color="white" />}
                {sym}
              </div>
            );
          })}
        </div>
      </div>

      <button className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '18px' }} onClick={handleSave}>
        Lưu Nhật Ký & Nhận 10 Điểm 🍖
      </button>

      <div style={{ height: '100px' }}></div>
    </div>
  );
}
