import React, { useState } from 'react';
import { Settings, ChevronRight, CreditCard, Bell, Shield, HelpCircle, LogOut, Crown, ArrowLeft, Plus, Check, QrCode, Lock, ActivitySquare } from 'lucide-react';

export default function Profile({ selectedPet, pets, onSelectPet, navigateTo, isPremium, setIsPremium }) {
  const [activeTab, setActiveTab] = useState('main'); // 'main', 'pets', 'qr', 'upgrade', etc.
  const [viewingPet, setViewingPet] = useState(null);

  const renderMainProfile = () => (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <h1 className="text-h1" style={{ marginBottom: '24px' }}>Hồ Sơ</h1>

      {/* User Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-light)',
          border: '3px solid white', boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <span style={{ fontSize: '32px' }}>👤</span>
        </div>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>Người dùng Demo</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>demo@luvmipet.com</p>
        </div>
      </div>

      {/* Demo Free/Premium Toggle */}
      <div style={{ background: 'var(--surface)', padding: '16px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', border: '1px solid #eee' }}>
        <div>
          <div style={{ fontWeight: 800, fontSize: '15px' }}>Chế độ Demo Profile</div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Mô phỏng trải nghiệm người dùng</div>
        </div>
        <div 
          onClick={() => setIsPremium(!isPremium)}
          style={{ 
            width: '50px', height: '28px', borderRadius: '20px', 
            background: isPremium ? 'var(--success)' : '#e2e8f0', 
            position: 'relative', cursor: 'pointer', transition: 'all 0.3s ease'
          }}
        >
          <div style={{ 
            width: '24px', height: '24px', borderRadius: '50%', background: 'white', 
            position: 'absolute', top: '2px', left: isPremium ? '24px' : '2px', 
            transition: 'all 0.3s ease', boxShadow: 'var(--shadow-sm)'
          }}></div>
        </div>
      </div>

      {/* Premium Banner */}
      {!isPremium && (
        <div className="premium-banner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Crown size={20} color="#FFD166" />
              <span style={{ fontWeight: 800, fontSize: '18px', color: '#FFD166' }}>LuvMiPet Premium</span>
            </div>
            <p style={{ fontSize: '13px', opacity: 0.9, maxWidth: '200px' }}>Mở khóa báo cáo sức khỏe chi tiết & ưu đãi dịch vụ.</p>
          </div>
          <button
            onClick={() => setActiveTab('upgrade')}
            style={{ background: '#FFD166', color: '#2B2D42', border: 'none', padding: '10px 16px', borderRadius: 'var(--radius-pill)', fontWeight: 800, fontSize: '14px', cursor: 'pointer' }}
          >
            Nâng cấp
          </button>
        </div>
      )}

      {/* Pets Management */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 className="text-h2">Thú Cưng Của Tôi</h3>
        <button onClick={() => setActiveTab('pets')} style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>Xem tất cả</button>
      </div>

      {pets.slice(0, 2).map(pet => (
        <div key={pet.id} className="pet-list-item" onClick={() => { setViewingPet(pet); setActiveTab('qr'); }} style={{ cursor: 'pointer', border: selectedPet?.id === pet.id ? '2px solid var(--primary)' : '2px solid transparent' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {pet.avatar ? (
              <img src={pet.avatar} alt={pet.name} style={{ width: '50px', height: '50px', borderRadius: '12px', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                {pet.type === 'Dog' ? '🐶' : '🐱'}
              </div>
            )}
            <div>
              <div style={{ fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {pet.name} {selectedPet?.id === pet.id && <span style={{ fontSize: '10px', background: 'var(--primary)', color: 'white', padding: '2px 6px', borderRadius: '8px' }}>Đang chọn</span>}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{pet.type} • {pet.breed}</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'var(--background)', padding: '8px', borderRadius: '50%' }}>
              <QrCode size={18} color="var(--text-main)" />
            </div>
          </div>
        </div>
      ))}

      {/* Premium Feature: Blurred Out Section Example */}
      <div className="card" style={{ marginTop: '24px', position: 'relative', overflow: 'hidden' }}>
        <h3 className="text-h2" style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ActivitySquare size={20} color="var(--secondary)" /> Báo cáo chuyên sâu
        </h3>
        
        {!isPremium && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
            <div style={{ background: '#FFD166', color: '#2B2D42', padding: '8px 16px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, cursor: 'pointer' }} onClick={() => setActiveTab('upgrade')}>
              <Lock size={16} /> Mở khóa Premium
            </div>
          </div>
        )}

        <div style={{ padding: '16px 0', filter: !isPremium ? 'blur(3px)' : 'none' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
             <span style={{ color: 'var(--text-muted)' }}>Xu hướng cân nặng</span>
             <span style={{ fontWeight: 700, color: 'var(--success)' }}>Ổn định</span>
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
             <span style={{ color: 'var(--text-muted)' }}>Nguy cơ bệnh lý</span>
             <span style={{ fontWeight: 700, color: 'var(--primary)' }}>Tiêu hóa kém</span>
           </div>
           <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Dựa trên dữ liệu 30 ngày qua, AI phân tích {selectedPet?.name} có hệ tiêu hóa nhạy cảm. Đề xuất đổi hạt sang loại Grain-Free.</p>
        </div>
      </div>

      {/* General Settings */}
      <div className="card" style={{ marginTop: '24px' }}>
        <h3 className="text-h2" style={{ marginBottom: '8px' }}>Cài Đặt</h3>

        <div className="setting-row" onClick={() => setActiveTab('notifications')} style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bell size={18} color="var(--primary)" />
            </div>
            <span style={{ fontWeight: 600 }}>Thông báo</span>
          </div>
          <ChevronRight size={20} color="var(--text-muted)" />
        </div>

        <div className="setting-row" onClick={() => setActiveTab('payment')} style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#e0fcf9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CreditCard size={18} color="var(--secondary)" />
            </div>
            <span style={{ fontWeight: 600 }}>Thanh toán</span>
          </div>
          <ChevronRight size={20} color="var(--text-muted)" />
        </div>
      </div>

      <button style={{ width: '100%', marginTop: '24px', padding: '16px', borderRadius: 'var(--radius-md)', background: 'var(--danger-light)', color: 'var(--danger)', border: 'none', fontWeight: 700, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
        <LogOut size={18} />
        Đăng xuất
      </button>

      {/* Spacer */}
      <div style={{ height: '60px' }}></div>
    </div>
  );

  const renderSubPage = (title, content) => (
    <div className="animate-fade-in" style={{ padding: '24px', minHeight: '100vh', background: 'var(--background)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <button
          onClick={() => setActiveTab('main')}
          style={{ background: 'var(--surface)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}
        >
          <ArrowLeft size={20} color="var(--text-main)" />
        </button>
        <h1 className="text-h2" style={{ margin: 0 }}>{title}</h1>
      </div>
      {content}
      <div style={{ height: '60px' }}></div>
    </div>
  );

  const renderQRTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="card" style={{ width: '100%', maxWidth: '300px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '24px' }}>
        {viewingPet?.avatar ? (
          <img src={viewingPet.avatar} alt="" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--primary-light)', marginBottom: '16px', marginTop: '-60px' }} />
        ) : (
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', border: '4px solid white', marginBottom: '16px', marginTop: '-60px' }}>
            {viewingPet?.type === 'Dog' ? '🐶' : '🐱'}
          </div>
        )}
        <h2 className="text-h1" style={{ marginBottom: '4px' }}>{viewingPet?.name}</h2>
        <p className="text-caption" style={{ marginBottom: '24px' }}>{viewingPet?.breed} • {viewingPet?.weight}</p>
        
        {/* Mock QR Code Image */}
        <div style={{ background: 'white', padding: '16px', borderRadius: '16px', border: '2px solid #eee', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <QrCode size={150} color="var(--dark-teal)" />
        </div>
        
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '24px' }}>
          Đưa mã QR này cho phòng khám để đồng bộ bệnh án và lịch sử tiêm phòng.
        </p>

        <button 
          className="btn btn-primary" 
          style={{ width: '100%', marginTop: '24px' }}
          onClick={() => { onSelectPet(viewingPet.id); setActiveTab('main'); }}
        >
          Chọn thú cưng này
        </button>
      </div>
    </div>
  );

  const renderUpgradeTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <Crown size={48} color="#FFD166" style={{ margin: '0 auto', marginBottom: '16px' }} />
        <h2 className="text-h1">Nâng cấp LuvMiPet</h2>
        <p className="text-muted" style={{ marginTop: '8px' }}>Mở khóa toàn bộ giới hạn và trải nghiệm tốt nhất cho thú cưng của bạn.</p>
      </div>

      {/* Premium Plan */}
      <div className="card" style={{ border: '2px solid #FFD166', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#FFD166', color: '#2B2D42', padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 800 }}>
          PHỔ BIẾN
        </div>
        <h3 className="text-h2" style={{ marginBottom: '8px', color: '#f59e0b' }}>Gói Premium</h3>
        <div style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>
          49.000đ <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 400 }}>/ tháng</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="#FFD166" /><span style={{ fontSize: '15px', fontWeight: 600 }}>Không giới hạn số lượng thú cưng</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="#FFD166" /><span style={{ fontSize: '15px', fontWeight: 600 }}>Báo cáo sức khỏe AI chi tiết</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><Check size={20} color="#FFD166" /><span style={{ fontSize: '15px', fontWeight: 600 }}>Huy hiệu Premium nổi bật</span></div>
        </div>

        <button style={{ width: '100%', marginTop: '24px', padding: '14px', borderRadius: 'var(--radius-md)', background: '#FFD166', color: '#2B2D42', border: 'none', fontWeight: 800, fontSize: '15px', cursor: 'pointer' }}>
          Nâng cấp ngay
        </button>
      </div>
    </div>
  );

  return (
    <>
      {activeTab === 'main' && renderMainProfile()}
      {activeTab === 'upgrade' && renderSubPage('Gói Nâng Cấp', renderUpgradeTab())}
      {activeTab === 'qr' && renderSubPage('Mã QR Thú Cưng', renderQRTab())}
    </>
  );
}
