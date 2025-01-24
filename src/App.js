import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/home';
import CompanyProfile from './pages/us/aboutUs';
import OurProducts from './pages/OurProduct/ourProduct';
import Product1 from './pages/product1/product1';
import Product2 from './pages/product2/product2';
import Product3 from './pages/produck3/product3';
import ContactUs from './pages/contact/contactUs';
import Blog from './pages/Blog/Blog';
import Footer from './components/Footer/Footer';
import Post from './components/Posts';
import WhatApp from './components/wa/WhatApp';


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
        <Route path="/our-products" element={<OurProducts />} /> {/* New route */}
        <Route path="/product-1" element={<Product1 />} />
        <Route path="/product-2" element={<Product2 />} />
        <Route path="/product-3" element={<Product3 />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/posts" element={<Post />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      {showWhatAppLogo && <WhatApp />}
      <Footer />
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
