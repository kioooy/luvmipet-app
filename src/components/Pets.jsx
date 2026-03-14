import React from 'react';
import { Heart, Activity, Plus, Lock, Crown } from 'lucide-react';

export default function Pets({ pets, selectedPet, onSelectPet, navigateTo, isPremium }) {
  return (
    <div className="petazy-screen animate-fade-in" style={{ paddingBottom: '120px' }}>
      
      {/* Header */}
      <div className="petazy-dashboard-header" style={{ borderBottomLeftRadius: '24px', borderBottomRightRadius: '24px', paddingBottom: '30px' }}>
        <h1 className="text-h1" style={{ color: 'white', marginBottom: '8px' }}>Thú Cưng Của Tôi</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>Quản lý người bạn đồng hành</p>
      </div>

      <div style={{ padding: '24px' }}>
        
        {/* Pet List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {pets.map(pet => {
            const isSelected = selectedPet.id === pet.id;
            return (
              <div 
                key={pet.id} 
                className="card" 
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', cursor: 'pointer',
                  border: isSelected ? '2px solid var(--primary)' : '2px solid transparent',
                  background: isSelected ? 'var(--primary-light)' : 'white'
                }}
                onClick={() => onSelectPet(pet.id)}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--background)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                  {pet.type === 'Dog' ? '🐶' : '🐱'}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 className="text-h2" style={{ fontSize: '18px', marginBottom: '4px' }}>{pet.name}</h3>
                  <p className="text-caption">{pet.breed} • {pet.weight}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <button 
                    onClick={(e) => { e.stopPropagation(); navigateTo('health'); }}
                    style={{ background: 'white', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', cursor: 'pointer' }}
                  >
                    <Heart size={18} color="var(--danger)" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); navigateTo('log'); }}
                    style={{ background: 'white', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)', cursor: 'pointer' }}
                  >
                    <Activity size={18} color="var(--secondary)" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Pet Module - Premium Gated */}
        {!isPremium ? (
          <div style={{ marginTop: '24px', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-lg)', boxShadow: '0 8px 32px rgba(252, 174, 145, 0.15)', border: '1px solid rgba(255, 209, 102, 0.3)' }}>
            
            {/* Frosted Glass Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(252,174,145,0.2) 100%)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', zIndex: 1 }}></div>
            
            {/* Content Content */}
            <div style={{ position: 'relative', zIndex: 2, padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #FFD166 0%, #FCAE91 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '16px', boxShadow: '0 4px 12px rgba(252, 174, 145, 0.4)' }}>
                <Lock size={20} strokeWidth={2.5} />
              </div>

              <div style={{ background: 'rgba(255, 209, 102, 0.2)', color: '#D9A00D', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                <Crown size={12} strokeWidth={3} /> Tính Năng Premium
              </div>

              <h3 className="text-h2" style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)', fontWeight: 800 }}>Thêm Thú Cưng</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px', lineHeight: 1.4 }}>Nâng cấp Premium để thêm thú cưng và mở khóa tính năng sức khỏe.</p>

              <button 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '14px', fontSize: '15px', background: 'linear-gradient(135deg, var(--primary) 0%, #FF9473 100%)', color: 'white' }}
                onClick={() => navigateTo('profile')}
              >
                Mở Khóa Premium
              </button>
            </div>
          </div>
        ) : (
          <button 
            className="btn" 
            style={{ width: '100%', padding: '16px', marginTop: '24px', fontSize: '16px', background: 'transparent', border: '2px dashed var(--primary)', color: 'var(--primary)' }}
          >
            <Plus size={20} />
            Thêm Thú Cưng
          </button>
        )}

      </div>
    </div>
  );
}
