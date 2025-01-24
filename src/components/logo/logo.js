import React from 'react';
import './logo.css';

const Logo = () => {
  return (
    <div className="trusted-companies">
      <h3>Dipercaya oleh Perusahaan Lokal dan Global</h3>
      <div className="logos">
        {/* Logo asli */}
        <div className="logo-wrapper">
          <img src="bajawa.png" alt="Bajawa" />
          <img src="alsozo.png" alt="Alsozo" />
          <img src="arfia.png" alt="Arfia" />
          <img src="fif.png" alt="FIF Global" />
          <img src="igp.png" alt="IGP" />
          <img src="itsri.png" alt="Itsiri" />
          <img src="khasanah.png" alt="Khasanah" />
          <img src="toyobo.png" alt="Toyobo" />
          <img src="global.png" alt="Global" />
          <img src="daco.png" alt="Daco" />
          <img src="otopia.png" alt="Otopia" />
          <img src="adya.png" alt="Adya" />
        </div>
        
        {/* Duplikat logo */}
        <div className="logo-wrapper">
          <img src="bajawa.png" alt="Bajawa" />
          <img src="alsozo.png" alt="Alsozo" />
          <img src="arfia.png" alt="Arfia" />
          <img src="fif.png" alt="FIF Global" />
          <img src="igp.png" alt="IGP" />
          <img src="itsri.png" alt="Itsiri" />
          <img src="khasanah.png" alt="Khasanah" />
          <img src="toyobo.png" alt="Toyobo" />
          <img src="global.png" alt="Global" />
          <img src="daco.png" alt="Daco" />
          <img src="otopia.png" alt="Otopia" />
          <img src="adya.png" alt="Adya" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
