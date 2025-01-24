import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>PT. Mars Acme</h3>
          <p>Alamat: Jl. Kebon jeruk No. 123, Jakarta, Indonesia</p>
          <p>Email: contact@marsacme.com</p>
          <p> Telepon: +62 959 9406 2048</p>
        </div>

        <div className="footer-links">
          <h4>Navigasi</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 PT. Mars Acme. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
