import React, { useState } from 'react';
import { ArrowLeft, Stethoscope, Camera, UploadCloud, AlertCircle, CheckCircle, BrainCircuit } from 'lucide-react';

export default function AIDiagnosis({ selectedPet, onBack, navigateTo }) {
  const [step, setStep] = useState(1); // 1 = input, 2 = analyzing, 3 = result
  const [symptoms, setSymptoms] = useState('');

  const handleAnalyze = () => {
    if (!symptoms.trim()) return;
    setStep(2);
    setTimeout(() => {
      setStep(3);
    }, 2500); // Simulate AI analysis time
  };

  return (
    <div className="animate-fade-in" style={{ padding: '24px', minHeight: '100vh', background: 'var(--surface)', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', gap: '16px' }}>
        <div onClick={onBack} style={{ cursor: 'pointer', display: 'flex', padding: '8px', background: 'var(--background)', borderRadius: '50%' }}>
          <ArrowLeft size={20} color="var(--text-main)" />
        </div>
        <h1 className="text-h2" style={{ margin: 0 }}>Chẩn đoán bằng AI</h1>
      </div>

      {step === 1 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: 'var(--primary-light)', padding: '16px', borderRadius: '12px', marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <BrainCircuit size={24} color="var(--primary)" style={{ flexShrink: 0 }} />
            <p className="text-caption" style={{ color: 'var(--text-main)', margin: 0, fontSize: '13px' }}>
              Hãy mô tả chi tiết các triệu chứng của <strong>{selectedPet?.name}</strong>. Hệ thống AI của chúng tôi sẽ phân tích và đưa ra đánh giá ban đầu. (Lưu ý: Không thay thế ý kiến bác sĩ thú y)
            </p>
          </div>

          <label className="text-body" style={{ marginBottom: '8px', display: 'block' }}>Mô tả triệu chứng</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder={`Vd: ${selectedPet?.name} bỏ ăn từ hôm qua, nôn mửa dịch vàng, có dấu hiệu lờ đờ...`}
            style={{
              width: '100%', height: '140px', padding: '16px', borderRadius: 'var(--radius-md)',
              border: '1px solid #ddd', background: 'var(--background)', fontSize: '15px',
              fontFamily: 'inherit', resize: 'none', marginBottom: '24px'
            }}
          />

          <label className="text-body" style={{ marginBottom: '8px', display: 'block' }}>Đính kèm hình ảnh (tuỳ chọn)</label>
          <div style={{
            border: '2px dashed #ddd', borderRadius: 'var(--radius-md)', padding: '32px 16px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '8px', cursor: 'pointer', marginBottom: '24px'
          }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Camera size={20} color="var(--primary)" />
              </div>
              <div style={{ width: '48px', height: '48px', background: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UploadCloud size={20} color="var(--primary)" />
              </div>
            </div>
            <span className="text-caption">Chụp ảnh hoặc tải lên (Tối đa 3 ảnh)</span>
          </div>

          <div style={{ marginTop: 'auto', marginBottom: '60px' }}>
            <button 
              className="btn btn-primary" 
              style={{ width: '100%', opacity: symptoms.trim() ? 1 : 0.5 }}
              disabled={!symptoms.trim()}
              onClick={handleAnalyze}
            >
              Phân tích ngay
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="fab" style={{ position: 'relative', top: 0, marginBottom: '24px', animation: 'pulse-ring 1s infinite' }}>
            <BrainCircuit size={32} color="white" />
          </div>
          <h2 className="text-h2">AI đang phân tích...</h2>
          <p className="text-caption" style={{ textAlign: 'center', marginTop: '12px', maxWidth: '80%' }}>
            Đang đối chiếu dữ liệu triệu chứng hệ tiêu hóa và hô hấp với hồ sơ của giống chó {selectedPet?.breed}...
          </p>
        </div>
      )}

      {step === 3 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ width: '64px', height: '64px', background: 'var(--danger-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <AlertCircle size={32} color="var(--danger)" />
            </div>
            <h2 className="text-h2" style={{ color: 'var(--danger)' }}>Nguy cơ: Trung bình - Cao</h2>
            <p className="text-caption">Dựa trên triệu chứng nôn mửa và lờ đờ</p>
          </div>

          <div className="card" style={{ marginBottom: '16px' }}>
            <h3 className="text-body" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <BrainCircuit size={18} color="var(--primary)" />
              Chẩn đoán có thể xảy ra:
            </h3>
            <ul style={{ paddingLeft: '24px', fontSize: '14px', lineHeight: 1.6, color: 'var(--text-main)' }}>
              <li><strong>Viêm dạ dày ruột:</strong> Khả năng 75%</li>
              <li><strong>Nhiễm Parvovirus:</strong> Khả năng 45% (nguy hiểm)</li>
              <li><strong>Tắc ruột do dị vật:</strong> Khả năng 30%</li>
            </ul>
          </div>

          <div className="card" style={{ marginBottom: '24px', borderLeft: '4px solid var(--danger)', paddingLeft: '12px' }}>
            <h3 className="text-body" style={{ color: 'var(--danger)', marginBottom: '8px' }}>Lời khuyên từ hệ thống:</h3>
            <p className="text-caption" style={{ color: 'var(--text-main)' }}>
              Các triệu chứng này cần được theo dõi sát sao. Nếu tiếp tục nôn trên 2 lần hoặc lờ đờ không phản ứng, bạn <strong>bắt buộc phải đưa bé đến phòng khám Thú y gần nhất</strong> để truyền dịch và làm xét nghiệm máu. Không tự ý cho uống thuốc ở nhà.
            </p>
          </div>

          <div style={{ marginTop: 'auto', marginBottom: '60px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button className="btn btn-primary" onClick={() => navigateTo('services')}>
              Tìm phòng khám gần nhất
            </button>
            <button className="btn" style={{ background: 'var(--background)', color: 'var(--text-main)', border: '1px solid #ddd' }} onClick={() => setStep(1)}>
              Nhập lại triệu chứng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
