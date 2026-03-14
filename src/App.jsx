import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DailyLog from './components/DailyLog';
import Insights from './components/Insights';
import Marketplace from './components/Marketplace';
import ServiceBooking from './components/ServiceBooking';
import Community from './components/Community';
import Profile from './components/Profile';
import AdminDashboard from './components/AdminDashboard';
import HealthRecord from './components/HealthRecord';
import AIDiagnosis from './components/AIDiagnosis';
import Appointments from './components/Appointments';
import Pets from './components/Pets';
import { Home, CalendarHeart, Calendar, Heart, User, ShieldCheck, MessageSquare } from 'lucide-react';

const MOCK_PETS = [
  { id: '1', name: 'Max', breed: 'Golden Retriever', weight: '28.5 kg', dob: '12/05/2021', type: 'Dog' },
  { id: '2', name: 'Luna', breed: 'British Shorthair', weight: '4.2 kg', dob: '01/08/2022', type: 'Cat' }
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.substring(1) || 'home';

  const [pets, setPets] = useState(MOCK_PETS);
  const [selectedPetId, setSelectedPetId] = useState(MOCK_PETS[0].id);
  const selectedPet = pets.find(p => p.id === selectedPetId) || pets[0];
  const [isPremium, setIsPremium] = useState(false); // Demo Free vs Premium

  const navigateTo = (page) => {
    navigate(`/${page === 'home' ? '' : page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Dynamic Page Rendering */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Dashboard selectedPet={selectedPet} pets={pets} onSelectPet={setSelectedPetId} navigateToLog={() => navigateTo('log')} navigateTo={navigateTo} isPremium={isPremium} />} />
          <Route path="/shop" element={<Marketplace isPremium={isPremium} navigateTo={navigateTo} />} />
          <Route path="/services" element={<ServiceBooking />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile selectedPet={selectedPet} pets={pets} onSelectPet={setSelectedPetId} navigateTo={navigateTo} isPremium={isPremium} setIsPremium={setIsPremium} />} />
          <Route path="/log" element={<DailyLog selectedPet={selectedPet} pets={pets} onSelectPet={setSelectedPetId} navigateTo={navigateTo} />} />
          <Route path="/insights" element={<Insights selectedPet={selectedPet} />} />
          <Route path="/ai" element={<AIDiagnosis selectedPet={selectedPet} onBack={() => navigateTo('home')} navigateTo={navigateTo}/>} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/health" element={<HealthRecord selectedPet={selectedPet} onBack={() => navigateTo('profile')} navigateTo={navigateTo} />} />
          <Route path="/appointments" element={<Appointments navigateTo={navigateTo} />} />
          <Route path="/pets" element={<Pets pets={pets} selectedPet={selectedPet} onSelectPet={setSelectedPetId} navigateTo={navigateTo} isPremium={isPremium} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      
      {/* Petazy 5-item Bottom Navigation */}
      <div className="bottom-nav-petazy">
        <div 
          className={`nav-item-petazy ${['home', 'insights', 'ai'].includes(currentPage) ? 'active' : ''}`}
          onClick={() => navigateTo('home')}
        >
          <Home size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Trang Chủ</span>
        </div>
        
        <div 
          className={`nav-item-petazy ${currentPage === 'services' || currentPage === 'shop' ? 'active' : ''}`}
          onClick={() => navigateTo('services')}
        >
          <CalendarHeart size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Dịch Vụ</span>
        </div>

        <div 
          className={`nav-item-petazy ${currentPage === 'appointments' ? 'active' : ''}`}
          onClick={() => navigateTo('appointments')}
        >
          <Calendar size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Lịch Hẹn</span>
        </div>

        <div 
          className={`nav-item-petazy ${currentPage === 'pets' ? 'active' : ''}`}
          onClick={() => navigateTo('pets')}
        >
          <Heart size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Thú Cưng</span>
        </div>

        <div 
          className={`nav-item-petazy ${currentPage === 'community' ? 'active' : ''}`}
          onClick={() => navigateTo('community')}
        >
          <MessageSquare size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Cộng Đồng</span>
        </div>

        {currentPage === 'admin' ? (
          <div className="nav-item-petazy active" onClick={() => navigateTo('admin')}>
            <ShieldCheck size={24} />
            <span style={{ fontSize: '10px', fontWeight: 700 }}>Quản Trị</span>
          </div>
        ) : (
          <div 
            className={`nav-item-petazy ${currentPage === 'profile' ? 'active' : ''}`}
            onClick={() => navigateTo('profile')}
            onDoubleClick={() => navigateTo('admin')}
          >
            <User size={24} />
            <span style={{ fontSize: '10px', fontWeight: 700 }}>Hồ Sơ</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
