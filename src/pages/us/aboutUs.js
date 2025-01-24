import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="aboutUs-container">
        <h2>Tentang kami</h2>
        <p>
           Exercitation elit elit magna qui laboris eiusmod non. Ex cupidatat qui commodo elit consectetur non reprehenderit sit deserunt nisi. Non eu id tempor ea id minim ipsum incididunt magna culpa officia esse ea. Aliquip aliqua aliquip ipsum ea adipisicing pariatur quis ad velit. Ad labore occaecat esse ea fugiat non nisi dolore labore sint proident commodo laborum laboris.
        </p>
      </div>
      <div className="image-text-container">
        <img src='orang.png' alt="Tim Kami" className="team-image" />
        <div className="text-container">
          <p>
          kami adalah tim yang berdedikasi untuk memberikan solusi terbaik bagi klien kami. Dengan pengalaman bertahun-tahun, kami telah membantu banyak bisnis mencapai kesuksesan. 
          Kami percaya bahwa kolaborasi adalah kunci kesuksesan. Oleh karena itu, kami selalu terbuka untuk bekerja sama dengan klien kami untuk mencapai tujuan bersama.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;