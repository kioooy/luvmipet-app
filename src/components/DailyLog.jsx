import React, { useState } from 'react';
import { Smile, Frown, Meh, Utensils, ActivitySquare, CheckCircle, Plus, Calendar, ChevronDown } from 'lucide-react';

const MOCK_HISTORY = [
  { id: 1, date: 'Hôm nay', time: '08:30', mood: 'Bình thường', moodIcon: <Meh size={16}/>, food: '60%', activity: '40%', symptoms: ['Gãi nhiều'], note: 'Bé hơi lười vận động sáng nay' },
  { id: 2, date: '13/03', time: '19:00', mood: 'Rất vui', moodIcon: <Smile size={16}/>, food: '100%', activity: '90%', symptoms: [], note: 'Ăn hết bát cơm, chạy nhảy vui vẻ' },
  { id: 3, date: '12/03', time: '09:15', mood: 'Lừ đừ', moodIcon: <Frown size={16}/>, food: '30%', activity: '20%', symptoms: ['Bỏ ăn', 'Nôn mửa'], note: 'Sáng ói ra dịch vàng' },
];

export default function DailyLog({ selectedPet, pets, onSelectPet, navigateTo }) {
  const [view, setView] = useState('history'); // 'history' | 'form'
  const [showPetSelector, setShowPetSelector] = useState(false);
  
  // Form State
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
    setView('history');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '24px', background: 'var(--background)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Pet Switcher Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'relative', zIndex: 10 }}>
        <button onClick={() => navigateTo('dashboard')} style={{ background: 'var(--surface)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', cursor: 'pointer' }}>
          ←
        </button>
        
        <div 
          onClick={() => setShowPetSelector(!showPetSelector)}
          style={{ background: 'var(--surface)', padding: '8px 16px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', fontWeight: 700 }}
        >
          {selectedPet?.name} <ChevronDown size={16} />
        </div>

        {showPetSelector && (
          <div style={{ position: 'absolute', top: '50px', left: '50%', transform: 'translateX(-50%)', background: 'var(--surface)', borderRadius: '12px', boxShadow: 'var(--shadow-lg)', width: '200px', overflow: 'hidden' }}>
            {pets.map(p => (
              <div 
                key={p.id} 
                onClick={() => { onSelectPet(p.id); setShowPetSelector(false); }}
                style={{ padding: '12px 16px', borderBottom: '1px solid #eee', background: p.id === selectedPet?.id ? 'var(--primary-light)' : 'transparent', fontWeight: p.id === selectedPet?.id ? 800 : 600, cursor: 'pointer' }}
              >
                {p.name} ({p.type})
              </div>
            ))}
          </div>
        )}
      </div>

      <h1 className="text-h1" style={{ marginBottom: '4px' }}>Nhật ký sức khỏe</h1>
      <p className="text-caption" style={{ marginBottom: '24px' }}>Theo dõi diễn biến hàng ngày của {selectedPet?.name}</p>

      {/* Toggle View Tabs */}
      <div style={{ display: 'flex', background: 'var(--surface)', borderRadius: '12px', padding: '4px', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
        <div 
          onClick={() => setView('history')}
          style={{ flex: 1, textAlign: 'center', padding: '10px 0', borderRadius: '8px', background: view === 'history' ? 'var(--primary)' : 'transparent', color: view === 'history' ? 'white' : 'var(--text-muted)', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
        >
          Lịch sử
        </div>
        <div 
          onClick={() => setView('form')}
          style={{ flex: 1, textAlign: 'center', padding: '10px 0', borderRadius: '8px', background: view === 'form' ? 'var(--primary)' : 'transparent', color: view === 'form' ? 'white' : 'var(--text-muted)', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s' }}
        >
          Ghi nhận mới
        </div>
      </div>

      {view === 'history' && (
        <div style={{ flex: 1 }}>
          <div style={{ position: 'relative', paddingLeft: '16px', borderLeft: '2px solid var(--primary-light)', marginLeft: '8px', display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '80px' }}>
            
            {MOCK_HISTORY.map((log, index) => (
              <div key={log.id} style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-25px', top: 0, width: '16px', height: '16px', borderRadius: '50%', background: index === 0 ? 'var(--primary)' : 'var(--text-muted)', border: '4px solid var(--background)' }}></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Calendar size={14} color="var(--text-muted)" />
                  <span style={{ fontSize: '13px', fontWeight: 800, color: index === 0 ? 'var(--primary)' : 'var(--text-main)' }}>{log.date}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{log.time}</span>
                </div>
                
                <div className="card" style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 700 }}>
                      {log.moodIcon} {log.mood}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      Ăn: {log.food} | Chơi: {log.activity}
                    </div>
                  </div>
                  
                  {log.symptoms.length > 0 && (
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      {log.symptoms.map(s => (
                        <span key={s} style={{ background: 'var(--danger-light)', color: 'var(--danger)', fontSize: '11px', padding: '2px 8px', borderRadius: '10px', fontWeight: 700 }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <p style={{ fontSize: '13px', color: 'var(--text-main)', margin: 0, background: 'var(--background)', padding: '10px', borderRadius: '8px', fontStyle: 'italic' }}>
                    "{log.note}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'form' && (
        <div style={{ paddingBottom: '80px' }}>
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
        </div>
      )}

    </div>
  );
}
