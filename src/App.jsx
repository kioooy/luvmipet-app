import React, { useEffect } from 'react';
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
import { Home, ShoppingBag, Calendar, Users, User, Plus, ShieldCheck } from 'lucide-react';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.substring(1) || 'home';

  const navigateTo = (page) => {
    navigate(`/${page === 'home' ? '' : page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Dynamic Page Rendering */}
      <Routes>
        <Route path="/" element={<Dashboard navigateToLog={() => navigateTo('log')} navigateTo={navigateTo} />} />
        <Route path="/shop" element={<Marketplace />} />
        <Route path="/services" element={<ServiceBooking />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile navigateTo={navigateTo} />} />
        <Route path="/log" element={<DailyLog navigateTo={navigateTo} />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/health" element={<HealthRecord onBack={() => navigateTo('profile')} navigateTo={navigateTo} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div 
          className={`nav-item ${['home', 'log', 'insights'].includes(currentPage) ? 'active' : ''}`}
          onClick={() => navigateTo('home')}
        >
          <Home size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Trang chủ</span>
        </div>
        
        <div 
          className={`nav-item ${currentPage === 'shop' ? 'active' : ''}`}
          onClick={() => navigateTo('shop')}
        >
          <ShoppingBag size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Cửa hàng</span>
        </div>

        {/* Floating Action Button / Middle Tab */}
        {!['shop', 'services', 'community', 'profile', 'admin'].includes(currentPage) ? (
          <div className="fab" onClick={() => navigateTo('log')}>
            <Plus size={28} />
          </div>
        ) : (
          <div 
            className={`nav-item ${currentPage === 'services' ? 'active' : ''}`}
            onClick={() => navigateTo('services')}
          >
            <Calendar size={24} />
            <span style={{ fontSize: '10px', fontWeight: 700 }}>Dịch vụ</span>
          </div>
        )}
        
        <div 
          className={`nav-item ${currentPage === 'community' ? 'active' : ''}`}
          onClick={() => navigateTo('community')}
        >
          <Users size={24} />
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Cộng đồng</span>
        </div>

        {currentPage === 'admin' ? (
          <div 
            className={`nav-item active`}
            onClick={() => navigateTo('admin')}
          >
            <ShieldCheck size={24} />
            <span style={{ fontSize: '10px', fontWeight: 700 }}>Admin</span>
          </div>
        ) : (
          <div 
            className={`nav-item ${currentPage === 'profile' ? 'active' : ''}`}
            onClick={() => navigateTo('profile')}
            onDoubleClick={() => navigateTo('admin')} // Secret switch to admin for demo
          >
            <User size={24} />
            <span style={{ fontSize: '10px', fontWeight: 700 }}>Hồ sơ</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
