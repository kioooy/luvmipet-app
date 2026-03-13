import React, { useState } from 'react';
import { Settings, ChevronRight, CreditCard, Bell, Shield, HelpCircle, LogOut, Crown, ArrowLeft, Plus, Check } from 'lucide-react';

export default function Profile({ navigateTo }) {
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
        <button
          onClick={() => setActiveTab('upgrade')}
          style={{ background: '#FFD166', color: '#2B2D42', border: 'none', padding: '10px 16px', borderRadius: 'var(--radius-pill)', fontWeight: 800, fontSize: '14px', cursor: 'pointer' }}
        >
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

  const [showAddPet, setShowAddPet] = useState(false);
  const [petForm, setPetForm] = useState({ name: '', species: 'Chó', breed: '', age: '' });
  const [pets, setPets] = useState([
    { id: 1, name: 'Milu', species: 'Chó', breed: 'Corgi', age: '2', status: 'Khỏe mạnh',
      img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' }
  ]);

  const handleAddPet = () => {
    if (!petForm.name.trim()) return;
    setPets(prev => [...prev, {
      id: Date.now(), name: petForm.name, species: petForm.species,
      breed: petForm.breed || '—', age: petForm.age || '?', status: 'Khỏe mạnh', img: null
    }]);
    setPetForm({ name: '', species: 'Chó', breed: '', age: '' });
    setShowAddPet(false);
  };

  const renderPetsTab = () => (
    <div>
      {pets.map((pet) => (
        <div key={pet.id} className="pet-list-item" style={{ marginBottom: '12px', padding: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {pet.img ? (
              <img src={pet.img} alt={pet.name} style={{ width: '60px', height: '60px', borderRadius: '12px', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px' }}>
                {pet.species === 'Chó' ? '🐶' : pet.species === 'Mèo' ? '🐱' : '🐾'}
              </div>
            )}
            <div>
              <div style={{ fontWeight: 800, fontSize: '18px', color: 'var(--text-main)' }}>{pet.name}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>{pet.species} • {pet.breed} • {pet.age} tuổi</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--success)' }}>{pet.status}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Add Pet Form */}
      {showAddPet ? (
        <div className="card" style={{ marginTop: '16px', border: '2px solid var(--primary)' }}>
          <div style={{ fontWeight: 800, fontSize: '16px', marginBottom: '16px' }}>🐾 Thêm thú cưng mới</div>
          {[
            { label: 'Tên thú cưng *', key: 'name', placeholder: 'VD: Bông, Mèo Vàng...' },
            { label: 'Giống', key: 'breed', placeholder: 'VD: Corgi, Poodle...' },
            { label: 'Tuổi (năm)', key: 'age', placeholder: 'VD: 2', type: 'number' }
          ].map(field => (
            <div key={field.key} style={{ marginBottom: '12px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--text-muted)' }}>{field.label}</label>
              <input
                type={field.type || 'text'}
                placeholder={field.placeholder}
                value={petForm[field.key]}
                onChange={e => setPetForm(p => ({ ...p, [field.key]: e.target.value }))}
                style={{ width: '100%', padding: '12px 14px', borderRadius: 'var(--radius-md)', border: '1.5px solid #eee', fontFamily: 'inherit', fontSize: '14px', outline: 'none' }}
              />
            </div>
          ))}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: 700, display: 'block', marginBottom: '6px', color: 'var(--text-muted)' }}>Loài</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Chó', 'Mèo', 'Khác'].map(s => (
                <button key={s} onClick={() => setPetForm(p => ({ ...p, species: s }))}
                  style={{ flex: 1, padding: '10px', borderRadius: 'var(--radius-md)', fontWeight: 700, fontSize: '14px', cursor: 'pointer', border: '2px solid', borderColor: petForm.species === s ? 'var(--primary)' : '#eee', background: petForm.species === s ? 'var(--primary-light)' : 'white', color: petForm.species === s ? 'var(--primary)' : 'var(--text-muted)' }}>
                  {s === 'Chó' ? '🐶 Chó' : s === 'Mèo' ? '🐱 Mèo' : '🐾 Khác'}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setShowAddPet(false)} style={{ flex: 1, padding: '12px', borderRadius: 'var(--radius-md)', border: '2px solid #eee', background: 'white', fontWeight: 700, cursor: 'pointer' }}>Hủy</button>
            <button onClick={handleAddPet} className="btn btn-primary" style={{ flex: 2 }}>Lưu thú cưng 🐾</button>
          </div>
        </div>
      ) : (
        <div
          className="card"
          onClick={() => setShowAddPet(true)}
          style={{
            marginTop: '16px', background: 'linear-gradient(135deg, var(--primary) 0%, #ff8a65 100%)',
            color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '24px', gap: '12px', cursor: 'pointer', boxShadow: '0 8px 24px rgba(255, 111, 97, 0.25)',
            border: 'none', transition: 'transform 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '50%', padding: '12px' }}>
            <Plus size={32} color="white" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '18px', marginBottom: '4px' }}>Thêm thú cưng mới</div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>Càng đông càng vui! Bắt đầu lưu trữ kỷ niệm.</div>
          </div>
        </div>
      )}

      {/* Health Record Quick Link */}
      <div
        className="card"
        onClick={() => navigateTo && navigateTo('health')}
        style={{
          marginTop: '16px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #e0fcf9 0%, #d1fae5 100%)',
          border: '1px solid #a7f3d0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '20px' }}>🏥</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '15px' }}>Sổ Sức Khỏe</div>
            <div style={{ fontSize: '12px', color: '#065f46' }}>Bệnh án • Tiêm phòng • Triệu chứng</div>
          </div>
        </div>
        <ChevronRight size={20} color="var(--success)" />
      </div>
    </div>
  );

  const renderPlaceholder = (icon, text) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center', background: 'var(--surface)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
      {icon}
      <h3 className="text-h2" style={{ marginTop: '16px', marginBottom: '8px' }}>Cài đặt {text}</h3>
      <p className="text-muted" style={{ fontSize: '14px' }}>Tính năng đang được phát triển trong bản demo này.</p>
    </div>
  );

  const renderUpgradeTab = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <Crown size={48} color="#FFD166" style={{ margin: '0 auto', marginBottom: '16px' }} />
        <h2 className="text-h1">Nâng cấp LuvMiPet</h2>
        <p className="text-muted" style={{ marginTop: '8px' }}>Mở khóa toàn bộ giới hạn và trải nghiệm tốt nhất cho thú cưng của bạn.</p>
      </div>

      {/* Basic Plan */}
      <div className="card" style={{ border: '2px solid transparent' }}>
        <h3 className="text-h2" style={{ marginBottom: '8px' }}>Gói Cơ Bản</h3>
        <div style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>Miễn phí</div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Check size={20} color="var(--success)" />
            <span style={{ fontSize: '15px' }}>Tối đa 2 thú cưng</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Check size={20} color="var(--success)" />
            <span style={{ fontSize: '15px' }}>Nhật ký sức khỏe cơ bản</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Check size={20} color="var(--success)" />
            <span style={{ fontSize: '15px' }}>Tham gia cộng đồng</span>
          </div>
        </div>

        <button style={{ width: '100%', marginTop: '24px', padding: '14px', borderRadius: 'var(--radius-md)', background: 'var(--surface)', color: 'var(--text-main)', border: '2px solid var(--border)', fontWeight: 700, fontSize: '15px', cursor: 'default' }}>
          Đang sử dụng
        </button>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Check size={20} color="#FFD166" />
            <span style={{ fontSize: '15px', fontWeight: 600 }}>Không giới hạn số lượng thú cưng</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Check size={20} color="#FFD166" />
            <span style={{ fontSize: '15px', fontWeight: 600 }}>Nhập được nhiều điểm tích lũy hơn</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Check size={20} color="#FFD166" />
            <span style={{ fontSize: '15px', fontWeight: 600 }}>Báo cáo sức khỏe AI chi tiết</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Check size={20} color="#FFD166" />
            <span style={{ fontSize: '15px', fontWeight: 600 }}>Ưu tiên đặt lịch dịch vụ nhanh</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Check size={20} color="#FFD166" />
            <span style={{ fontSize: '15px', fontWeight: 600 }}>Huy hiệu Premium nổi bật</span>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('payment')}
          style={{ width: '100%', marginTop: '24px', padding: '14px', borderRadius: 'var(--radius-md)', background: '#FFD166', color: '#2B2D42', border: 'none', fontWeight: 800, fontSize: '15px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(255, 209, 102, 0.4)' }}
        >
          Nâng cấp ngay
        </button>
      </div>
    </div>
  );

  return (
    <>
      {activeTab === 'main' && renderMainProfile()}
      {activeTab === 'upgrade' && renderSubPage('Gói Nâng Cấp', renderUpgradeTab())}
      {activeTab === 'pets' && renderSubPage('Quản lý Thú Cưng', renderPetsTab())}
      {activeTab === 'notifications' && renderSubPage('Cài đặt Thông Báo', renderPlaceholder(<Bell size={48} color="var(--primary)" />, 'Thông báo'))}
      {activeTab === 'payment' && renderSubPage('Quản lý Thanh Toán', renderPlaceholder(<CreditCard size={48} color="var(--secondary)" />, 'Thanh toán'))}
      {activeTab === 'security' && renderSubPage('Bảo Mật', renderPlaceholder(<Shield size={48} color="#64748b" />, 'Bảo mật'))}
      {activeTab === 'support' && renderSubPage('Trợ Giúp & Hỗ Trợ', renderPlaceholder(<HelpCircle size={48} color="#f59e0b" />, 'Hỗ trợ'))}
    </>
  );
}
