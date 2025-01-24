import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import Logo from '../../components/logo/logo';
import './home.css';

const Home = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (boxIndex, accordionIndex) => {
    const id = `${boxIndex}-${accordionIndex}`;
    setOpenAccordion(openAccordion === id ? null : id); // Toggle accordion
  };

  const data = [
    {
      title: 'Jasa Software Development',
      description: 'Wujudkan ide Anda menjadi solusi nyata.',
      accordionContent: [
        'Detail lengkap tentang Jasa Software Development yang kami tawarkan untuk memenuhi kebutuhan bisnis Anda.',
        'Layanan tambahan seperti integrasi dan pemeliharaan sistem.',
        'Keuntungan dari layanan kami dalam meningkatkan efisiensi bisnis.',
      ],
      accordionTitles: [
        'Detail Jasa Pengembangan Perangkat Lunak',
        'Layanan Tambahan dan Integrasi',
        'Keuntungan Layanan Software Development'
      ],
      link: '/product-1',
      Links: ['', '', ''], // Random Links
    },
    {
      title: 'IT Talent Team',
      description: 'Butuh tim IT handal? Kami siap membantu.',
      accordionContent: [
        'Kami menyediakan tim IT profesional untuk mendukung proyek bisnis Anda.',
        'Fleksibilitas dalam memilih spesialisasi tim sesuai kebutuhan.',
        'Dukungan teknis yang selalu siap membantu Anda.',
      ],
      accordionTitles: [
        'Tim Profesional IT yang Kami Tawarkan',
        'Fleksibilitas Spesialisasi Tim IT',
        'Dukungan Teknis 24/7'
      ],
      link: '/product-2',
      Links: ['', '', ''], // Random Links
    },
    {
      title: 'Global Development Center',
      description: 'Pengembangan sistem global untuk bisnis Anda.',
      accordionContent: [
        'Solusi pengembangan sistem global yang dirancang khusus.',
        'Skalabilitas untuk mendukung pertumbuhan bisnis Anda.',
        'Keamanan data tingkat tinggi untuk melindungi aset Anda.',
      ],
      accordionTitles: [
        'Solusi Pengembangan Sistem Global',
        'Skalabilitas dan Pertumbuhan Bisnis',
        'Keamanan Data untuk Perlindungan Aset'
      ],
      link: '/product-3',
      Links: ['', '', ''], // Random Links
    },
  ];

  return (
    <div className="home-container">
      <Slider className="home-slider" />
      <div className="home-text">
        <h2>Solusi IT Terbaik untuk Bisnis Anda!</h2>
        <p>
          Kami menyediakan solusi IT lengkap dan efektif, mulai dari pengembangan perangkat lunak,
          penyediaan tim IT profesional, hingga pengembangan sistem global untuk memenuhi kebutuhan
          bisnis Anda.
        </p>
      </div>
      <Logo />

      {/* Content Grid */}
      <div className="content-grid">
        {data.map((item, boxIndex) => (
          <div
            className={`content-row ${boxIndex % 2 === 0 ? 'left' : 'right'}`}
            key={boxIndex}
          >
            <div className="content-box">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            {/* Accordion */}
            <div className="accordion-container">
              {item.accordionContent.map((content, accordionIndex) => (
                <div
                  className={`accordion ${openAccordion === `${boxIndex}-${accordionIndex}` ? 'open' : ''}`}
                  key={`${boxIndex}-${accordionIndex}`}
                >
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(boxIndex, accordionIndex)}
                  >
                    <span>{item.accordionTitles[accordionIndex]}</span>
                    <span>{openAccordion === `${boxIndex}-${accordionIndex}` ? '▲' : '▼'}</span>
                  </div>
                  {openAccordion === `${boxIndex}-${accordionIndex}` && (
                    <div className="accordion-body">
                      <p>{content}</p>
                      {/* Tombol di dalam Accordion dengan Random Link */}
                      <div className="accordion-button-container">
                        <Link to={item.Links[accordionIndex]}>
                          <button className="accordion-button">Lihat Produk Kami</button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
