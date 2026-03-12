import React, { useState } from 'react';
import { Settings, ChevronRight, CreditCard, Bell, Shield, HelpCircle, LogOut, Crown, ArrowLeft, Plus } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('main'); // 'main', 'pets', 'notifications', 'payment', 'security', 'support'

  const renderMainProfile = () => (
    <div className="animate-fade-in" style={{ padding: '24px' }}>
      <h1 className="text-h1" style={{ marginBottom: '24px' }}>Hồ Sơ</h1>

      {/* User Info - Anonymous Demo */}
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

      {/* Premium Banner */}
      <div className="premium-banner">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Crown size={20} color="#FFD166" />
            <span style={{ fontWeight: 800, fontSize: '18px', color: '#FFD166' }}>LuvMiPet Premium</span>
          </div>
          <p style={{ fontSize: '13px', opacity: 0.9, maxWidth: '200px' }}>Mở khóa báo cáo sức khỏe chi tiết & ưu đãi dịch vụ.</p>
        </div>
        <button style={{ background: '#FFD166', color: '#2B2D42', border: 'none', padding: '10px 16px', borderRadius: 'var(--radius-pill)', fontWeight: 800, fontSize: '14px', cursor: 'pointer' }}>
          Nâng cấp
        </button>
      </div>

      {/* Pets Management */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 className="text-h2">Thú Cưng Của Tôi</h3>
        <button onClick={() => setActiveTab('pets')} style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>Quản lý</button>
      </div>
      
      <div className="pet-list-item" onClick={() => setActiveTab('pets')} style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
            alt="Milu" 
            style={{ width: '50px', height: '50px', borderRadius: '12px', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: '16px' }}>Milu</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Chó • Corgi • 2 tuổi</div>
          </div>
        </div>
        <ChevronRight size={20} color="var(--text-muted)" />
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

        <div className="setting-row" onClick={() => setActiveTab('security')} style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={18} color="#64748b" />
            </div>
            <span style={{ fontWeight: 600 }}>Bảo mật</span>
          </div>
          <ChevronRight size={20} color="var(--text-muted)" />
        </div>

        <div className="setting-row" onClick={() => setActiveTab('support')} style={{ cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#fff7e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HelpCircle size={18} color="#f59e0b" />
            </div>
            <span style={{ fontWeight: 600 }}>Trợ giúp & Hỗ trợ</span>
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

  const renderPetsTab = () => (
    <div>
      <div className="pet-list-item" style={{ marginBottom: '16px', padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img 
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
            alt="Milu" 
            style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }}
          />
          <div>
            <div style={{ fontWeight: 800, fontSize: '18px', color: 'var(--text-main)' }}>Milu</div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>Chó • Corgi</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--success)' }}>Khỏe mạnh</div>
          </div>
        </div>
      </div>
      <button style={{ width: '100%', padding: '16px', borderRadius: 'var(--radius-md)', border: '2px dashed var(--primary)', background: 'transparent', color: 'var(--primary)', fontWeight: 700, fontSize: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <Plus size={20} /> Thêm thú cưng mới
      </button>
    </div>
  );

  const renderPlaceholder = (icon, text) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center', background: 'var(--surface)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
      {icon}
      <h3 className="text-h2" style={{ marginTop: '16px', marginBottom: '8px' }}>Cài đặt {text}</h3>
      <p className="text-muted" style={{ fontSize: '14px' }}>Tính năng đang được phát triển trong bản demo này.</p>
    </div>
  );

  return (
    <>
      {activeTab === 'main' && renderMainProfile()}
      {activeTab === 'pets' && renderSubPage('Quản lý Thú Cưng', renderPetsTab())}
      {activeTab === 'notifications' && renderSubPage('Cài đặt Thông Báo', renderPlaceholder(<Bell size={48} color="var(--primary)" />, 'Thông báo'))}
      {activeTab === 'payment' && renderSubPage('Quản lý Thanh Toán', renderPlaceholder(<CreditCard size={48} color="var(--secondary)" />, 'Thanh toán'))}
      {activeTab === 'security' && renderSubPage('Bảo Mật', renderPlaceholder(<Shield size={48} color="#64748b" />, 'Bảo mật'))}
      {activeTab === 'support' && renderSubPage('Trợ Giúp & Hỗ Trợ', renderPlaceholder(<HelpCircle size={48} color="#f59e0b" />, 'Hỗ trợ'))}
    </>
  );
}
