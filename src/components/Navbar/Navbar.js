import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); 
  
  const handleScroll = () => setIsScrolled(window.scrollY > 60);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveTab = () => {
    if (location.pathname === '/home') return 'home';
    if (location.pathname === '/company-profile') return 'company-profile';
    if (['/product-1', '/product-2', '/product-3'].includes(location.pathname)) return 'our-products';
    if (location.pathname === '/contact-us') return 'contact-us';
    return '';
  };

  const activeTab = getActiveTab();

  const handleLogoClick = () => {
    window.location.href = '/home'; // Memuat ulang halaman dan kembali ke home
  };

  return (
    <nav className={`navbar ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src="marsl.png" alt="Logo PT Mars Acme Perkasa" className="logo" />
        <h1 className="company-name">PT Mars Acme Perkasa</h1>
      </div>
      <ul>
        <li className={activeTab === 'home' ? 'active' : ''}>
          <Link to="/home">Home</Link>
        </li>
        <li className={activeTab === 'company-profile' ? 'active' : ''}>
          <Link to="/company-profile">Company Profile</Link>
        </li>
        <li className={`dropdown ${activeTab === 'our-products' ? 'active' : ''}`}>
          <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Our Products</span>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/product-1">Product 1</Link>
              </li>
              <li>
                <Link to="/product-2">Product 2</Link>
              </li>
              <li>
                <Link to="/product-3">Product 3</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={activeTab === 'contact-us' ? 'active' : ''}>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
