import React from 'react';
import { AlertTriangle, TrendingDown, Calendar, Lightbulb } from 'lucide-react';

export default function Insights() {
  return (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <h1 className="text-h1" style={{ marginBottom: '8px' }}>AI Insights</h1>
      <p className="text-caption" style={{ marginBottom: '24px' }}>Phân tích sức khỏe tuần qua</p>

      {/* AI Alert Card */}
      <div className="card" style={{ background: 'var(--danger-light)', border: '1px solid #ffcccc', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
          <div style={{ background: 'var(--danger)', borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AlertTriangle size={20} color="white" />
          </div>
          <div>
            <h3 className="text-body" style={{ color: '#d32f2f', marginBottom: '4px' }}>Cảnh báo từ LuvMi AI ⚠️</h3>
            <p style={{ fontSize: '14px', lineHeight: 1.5, color: '#5f2120' }}>
              Chúng tôi nhận thấy <strong>Milu ăn ít hơn 30%</strong> và bỏ lơ đồ chơi trong 3 ngày qua. Dựa trên dữ liệu thu thập, có nguy cơ cún đang bị stress hoặc gặp vấn đề tiêu hóa.
            </p>
          </div>
        </div>
        
        <div style={{ background: 'rgba(255,255,255,0.6)', padding: '12px', borderRadius: '8px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <Lightbulb size={20} color="#e65100" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ fontSize: '13px', color: '#e65100', fontWeight: 600 }}>
            Gợi ý hành động: Hãy thử đổi sang pate hoặc thức ăn mềm. Dẫn cún đi bộ thêm 15p vào buổi sáng. Nếu bé tiếp tục nôn mửa hoặc ủ rũ thêm 24h, vui lòng liên hệ Thú Y.
          </p>
        </div>
      </div>

      {/* Chart Simulation */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 className="text-body" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <TrendingDown size={18} color="var(--primary)" /> Biểu đồ Lượng ăn
          </h3>
          <select style={{ border: 'none', background: 'var(--background)', padding: '4px 8px', borderRadius: '6px', fontSize: '12px', outline: 'none', cursor: 'pointer' }}>
            <option>Tuần này</option>
            <option>Tháng này</option>
          </select>
        </div>
        
        {/* Fake chart using CSS */}
        <div style={{ height: '150px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
          <div style={{ width: '12%', height: '90%', background: 'var(--secondary)', borderRadius: '4px' }}></div>
          <div style={{ width: '12%', height: '85%', background: 'var(--secondary)', borderRadius: '4px' }}></div>
          <div style={{ width: '12%', height: '95%', background: 'var(--secondary)', borderRadius: '4px' }}></div>
          <div style={{ width: '12%', height: '60%', background: 'var(--primary)', borderRadius: '4px' }}></div>
          <div style={{ width: '12%', height: '50%', background: 'var(--primary)', borderRadius: '4px' }}></div>
          <div style={{ width: '12%', height: '55%', background: 'var(--primary)', borderRadius: '4px' }}></div>
          <div style={{ width: '12%', height: '40%', background: 'var(--danger)', borderRadius: '4px' }}></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map((day, idx) => (
            <span key={idx} className="text-caption" style={{ width: '12%', textAlign: 'center' }}>{day}</span>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-body" style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={18} color="var(--primary)" /> Tóm tắt tuần
        </h3>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)' }}></div>
            <span style={{ fontSize: '14px' }}>Vận động điều độ (trung bình 45p/ngày)</span>
          </li>
          <li style={{ padding: '12px 0', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--warning)', backgroundColor: 'var(--accent)' }}></div>
            <span style={{ fontSize: '14px' }}>Ngủ nhiều hơn bình thường vào cuối tuần</span>
          </li>
          <li style={{ padding: '12px 0', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--danger)' }}></div>
            <span style={{ fontSize: '14px' }}>Lượng ăn giảm sút đáng kể từ T5</span>
          </li>
        </ul>
      </div>

      <div style={{ height: '80px' }}></div>
    </div>
  );
}
