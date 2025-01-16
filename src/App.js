import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home.js';
import CompanyProfile from './pages/profile/companyProfile.js';
import Product1 from './pages/product1/product1.js';
import Product2 from './pages/product2/product2.js';
import Product3 from './pages/produck3/product3.js';
import ContactUs from './pages/contact/contactUs.js';
import WhatApp from './components/wa/whatApp.js'; // Import dengan nama baru

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation(); 

  const showWhatAppLogo = location.pathname === '/home' || location.pathname === '/contact-us';

  return (
    <div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/product-1" element={<Product1 />} />
        <Route path="/product-2" element={<Product2 />} />
        <Route path="/product-3" element={<Product3 />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
           {showWhatAppLogo && <WhatApp />}
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
