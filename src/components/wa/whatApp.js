import React from 'react';
import './whatApp.css';

const WhatApp = () => {
  const phoneNumber = '6287770701099';

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="whatapp-logo" onClick={handleWhatsAppClick}>
      <img
        src="Whatapp.png" 
        alt="WhatApp Logo"
        className="logo"
      />
    </div>
  );
};

export default WhatApp;
