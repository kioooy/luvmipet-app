import React, { useState } from 'react';
import {
  ArrowLeft, Stethoscope, Syringe, AlertTriangle,
  CheckCircle, Clock, Plus, ChevronRight
} from 'lucide-react';

// ─────────────── Mock Data ───────────────
const medicalHistory = [
  {
    id: 1,
    date: '10/03/2026',
    clinic: 'Phòng khám Thú Y 247',
    diagnosis: 'Viêm đường ruột nhẹ',
    medication: 'Amoxicillin 250mg (7 ngày), men vi sinh',
    note: 'Cho uống thuốc sau bữa ăn, theo dõi thêm 3 ngày.',
    vet: 'BS. Nguyễn Hữu Tâm',
    status: 'recovered',
  },
  {
    id: 2,
    date: '15/01/2026',
    clinic: 'Animal Care Clinic',
    diagnosis: 'Kiểm tra định kỳ',
    medication: 'Không có',
    note: 'Sức khỏe tổng quát tốt. Cân nặng 8.2kg.',
    vet: 'BS. Trần Thị Mai',
    status: 'healthy',
  },
];

const vaccinations = [
  {
    id: 1,
    name: 'Dại (Rabies)',
    lastDate: '10/01/2026',
    nextDate: '10/01/2027',
    daysLeft: 303,
    status: 'ok',
  },
  {
    id: 2,
    name: 'Viêm gan truyền nhiễm (DHPPiL)',
    lastDate: '20/12/2025',
    nextDate: '20/03/2026',
    daysLeft: 7,
    status: 'soon',
  },
  {
    id: 3,
    name: 'Phòng bọ chét & ve',
    lastDate: '15/02/2026',
    nextDate: '15/03/2026',
    daysLeft: 2,
    status: 'urgent',
  },
];

const dangerSymptoms = [
  { id: 1, text: 'Nôn mửa liên tục (>3 lần/ngày)', severity: 'high' },
  { id: 2, text: 'Không đi tiêu hơn 48 tiếng', severity: 'high' },
  { id: 3, text: 'Co giật hoặc mất thăng bằng', severity: 'critical' },
  { id: 4, text: 'Khó thở hoặc thở gấp', severity: 'critical' },
  { id: 5, text: 'Bỏ ăn liên tục hơn 2 ngày', severity: 'medium' },
  { id: 6, text: 'Tiêu chảy có máu', severity: 'critical' },
  { id: 7, text: 'Phân xanh hoặc đen bất thường', severity: 'high' },
  { id: 8, text: 'Gãi, cắn da đến rụng lông', severity: 'medium' },
];

// ─────────────── Sub-components ───────────────
function MedicalTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {medicalHistory.map((record) => (
        <div
          key={record.id}
          className="card"
          style={{ borderLeft: `4px solid ${record.status === 'healthy' ? 'var(--success)' : 'var(--accent)'}` }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-main)' }}>
                {record.diagnosis}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                {record.date} • {record.clinic}
              </div>
            </div>
            <span style={{
              fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '99px',
              background: record.status === 'healthy' ? '#d1fae5' : '#fff7e0',
              color: record.status === 'healthy' ? 'var(--success)' : '#d97706',
            }}>
              {record.status === 'healthy' ? 'Khỏe mạnh' : 'Đã hồi phục'}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px' }}>
            <div><span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Thuốc: </span>{record.medication}</div>
            <div><span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Ghi chú: </span>{record.note}</div>
            <div><span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Bác sĩ: </span>{record.vet}</div>
          </div>
        </div>
      ))}

      {/* Add Record Button */}
      <button style={{
        width: '100%', padding: '14px', borderRadius: 'var(--radius-md)',
        border: '2px dashed var(--primary)', background: 'var(--primary-light)',
        color: 'var(--primary)', fontWeight: 700, fontSize: '14px',
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer'
      }}>
        <Plus size={18} /> Thêm lần khám mới
      </button>
    </div>
  );
}

function VaccineTab() {
  const statusConfig = {
    ok:     { color: 'var(--success)', bg: '#d1fae5', label: 'Đã tiêm', icon: <CheckCircle size={16} /> },
    soon:   { color: '#d97706',        bg: '#fff7e0', label: 'Sắp đến',  icon: <Clock size={16} /> },
    urgent: { color: 'var(--danger)',  bg: '#ffe5e5', label: 'Khẩn cấp', icon: <AlertTriangle size={16} /> },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* Urgent alert */}
      {vaccinations.some(v => v.status === 'urgent') && (
        <div className="card" style={{ background: 'var(--danger-light)', border: '1px solid #ffcccc' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <AlertTriangle size={22} color="var(--danger)" />
            <div>
              <div style={{ fontWeight: 800, color: 'var(--danger)', fontSize: '14px' }}>Cần tiêm phòng ngay!</div>
              <div style={{ fontSize: '13px', color: '#b91c1c', marginTop: '2px' }}>
                Milu có lịch tiêm <strong>phòng bọ chét & ve</strong> chỉ còn <strong>2 ngày</strong> nữa.
              </div>
            </div>
          </div>
        </div>
      )}

      {vaccinations.map((vax) => {
        const cfg = statusConfig[vax.status];
        return (
          <div key={vax.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px' }}>{vax.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  Lần cuối: {vax.lastDate}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Tiếp theo: <strong style={{ color: cfg.color }}>{vax.nextDate}</strong>
                </div>
              </div>
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                background: cfg.bg, color: cfg.color, padding: '8px 12px',
                borderRadius: 'var(--radius-md)', fontWeight: 700, fontSize: '12px'
              }}>
                {cfg.icon}
                <span>{cfg.label}</span>
                {vax.status !== 'ok' && (
                  <span style={{ fontSize: '11px' }}>{vax.daysLeft} ngày</span>
                )}
              </div>
            </div>
          </div>
        );
      })}

      <button style={{
        width: '100%', padding: '14px', borderRadius: 'var(--radius-md)',
        border: '2px dashed var(--primary)', background: 'var(--primary-light)',
        color: 'var(--primary)', fontWeight: 700, fontSize: '14px',
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer'
      }}>
        <Plus size={18} /> Thêm lịch tiêm mới
      </button>
    </div>
  );
}

function SymptomsTab() {
  const [checked, setChecked] = useState([]);

  const toggle = (id) => {
    setChecked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const severityConfig = {
    critical: { label: '🚨 Nguy hiểm', color: 'var(--danger)', bg: '#ffe5e5' },
    high:     { label: '⚠️ Cần chú ý',  color: '#d97706',       bg: '#fff7e0' },
    medium:   { label: '🔔 Theo dõi',   color: 'var(--primary)', bg: 'var(--primary-light)' },
  };

  const hasCritical = checked.some(id => {
    const s = dangerSymptoms.find(s => s.id === id);
    return s && s.severity === 'critical';
  });

  return (
    <div>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
        Tích vào các triệu chứng Milu đang gặp. Ứng dụng sẽ đánh giá mức độ và tư vấn ngay.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
        {dangerSymptoms.map((sym) => {
          const isChecked = checked.includes(sym.id);
          const cfg = severityConfig[sym.severity];
          return (
            <div
              key={sym.id}
              onClick={() => toggle(sym.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '14px', borderRadius: 'var(--radius-md)', cursor: 'pointer',
                background: isChecked ? cfg.bg : 'var(--surface)',
                border: `2px solid ${isChecked ? cfg.color : '#eee'}`,
                transition: 'all 0.2s',
              }}
            >
              <div style={{
                width: '22px', height: '22px', borderRadius: '6px', flexShrink: 0,
                border: `2px solid ${isChecked ? cfg.color : '#ccc'}`,
                background: isChecked ? cfg.color : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {isChecked && <CheckCircle size={14} color="white" />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{sym.text}</div>
                <div style={{ fontSize: '11px', color: cfg.color, fontWeight: 700, marginTop: '2px' }}>{cfg.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Result banner */}
      {checked.length > 0 && (
        <div className="card" style={{
          background: hasCritical ? 'var(--danger-light)' : '#fff7e0',
          border: `1px solid ${hasCritical ? '#ffcccc' : '#ffd166'}`,
        }}>
          {hasCritical ? (
            <>
              <div style={{ fontWeight: 800, color: 'var(--danger)', fontSize: '15px', marginBottom: '6px' }}>
                🚨 Cần đến phòng khám ngay!
              </div>
              <p style={{ fontSize: '13px', color: '#b91c1c', lineHeight: 1.6 }}>
                Milu đang có triệu chứng nguy hiểm. Đừng chờ đợi, hãy liên hệ thú y hoặc đưa bé đến phòng khám ngay.
              </p>
            </>
          ) : (
            <>
              <div style={{ fontWeight: 800, color: '#d97706', fontSize: '15px', marginBottom: '6px' }}>
                ⚠️ Cần theo dõi kỹ hơn
              </div>
              <p style={{ fontSize: '13px', color: '#92400e', lineHeight: 1.6 }}>
                Hãy ghi vào Nhật ký và theo dõi thêm 24h. Nếu triệu chứng không cải thiện, hãy đưa bé đi khám.
              </p>
            </>
          )}
        </div>
      )}

      {checked.length === 0 && (
        <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)', fontSize: '14px' }}>
          ✅ Chưa có triệu chứng nào được chọn. Milu đang ổn!
        </div>
      )}
    </div>
  );
}

// ─────────────── Main Component ───────────────
export default function HealthRecord({ onBack }) {
  const [activeTab, setActiveTab] = useState('medical');

  const tabs = [
    { id: 'medical',  icon: <Stethoscope size={16} />, label: 'Sổ Bệnh Án' },
    { id: 'vaccine',  icon: <Syringe size={16} />,     label: 'Tiêm Phòng' },
    { id: 'symptoms', icon: <AlertTriangle size={16} />, label: 'Triệu Chứng' },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '24px', minHeight: '100vh', background: 'var(--background)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <button
          onClick={onBack}
          style={{
            background: 'var(--surface)', border: 'none', width: '40px', height: '40px',
            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: 'var(--shadow-sm)', flexShrink: 0
          }}
        >
          <ArrowLeft size={20} color="var(--text-main)" />
        </button>
        <div>
          <h1 className="text-h2" style={{ margin: 0 }}>Sổ Sức Khỏe</h1>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>Milu • Corgi • 2 tuổi</p>
        </div>
      </div>

      {/* Tab switcher */}
      <div style={{
        display: 'flex', background: 'var(--surface)', borderRadius: 'var(--radius-md)',
        padding: '4px', marginBottom: '20px', boxShadow: 'var(--shadow-sm)'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1, padding: '10px 6px', border: 'none', cursor: 'pointer',
              borderRadius: '12px', fontWeight: 700, fontSize: '12px', transition: 'all 0.2s',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
              background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
              color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'medical'  && <MedicalTab />}
      {activeTab === 'vaccine'  && <VaccineTab />}
      {activeTab === 'symptoms' && <SymptomsTab />}

      <div style={{ height: '80px' }} />
    </div>
  );
}
