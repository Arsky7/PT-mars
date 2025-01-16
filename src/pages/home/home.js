import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link untuk navigasi
import Slider from '../../components/Slider/Slider';
import Logo from '../../components/logo/logo';
import './home.css';

const Home = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const data = [
    {
      title: 'Jasa Software Development',
      description: 'Wujudkan ide Anda menjadi solusi nyata.',
      accordionContent:
        'Sint anim nulla ipsum officia voluptate veniam id aute tempor do occaecat eu proident officia. Ea duis elit ut aute consectetur nulla aliqua et ad commodo quis irure ea. Quis nulla commodo do eiusmod proident..',
      link: '/product-1', // Link untuk produk 1
    },
    {
      title: 'IT Talent Team',
      description: 'Butuh tim IT handal? Kami siap membantu.',
      accordionContent:
        'Mollit in in ut proident do pariatur ullamco cillum pariatur veniam. Deserunt qui consectetur tempor nostrud et quis minim mollit. Qui nulla tempor amet deserunt pariatur velit eu. In aute officia et qui enim labore labore id aliqua exercitation eu. Est aliquip nulla amet ut do nisi reprehenderit aute irure laboris culpa est.',
      link: '/product-2', // Link untuk produk 2
    },
    {
      title: 'Global Development Center',
      description: 'Pengembangan sistem global untuk bisnis Anda.',
      accordionContent:
        'lorem10Ut tempor consectetur excepteur anim adipisicing ad officia amet et laboris sint adipisicing. Dolor officia et nulla proident ea laboris dolore in ad cupidatat. Magna et non ea sit incididunt incididunt sint amet culpa adipisicing ullamco est proident.',
      link: '/product-3', // Link untuk produk 3
    },
  ];

  return (
    <div className="home-container">
      <Slider className="home-slider" />
      <div className="home-text">
        <h2>Solusi IT terbaik untuk Bisnis Anda!</h2>
        <p>
          Mencari solusi IT lengkap dan efektif untuk bisnis Anda? Mars Acme hadir dengan solusi terdepan! Dari Sistem ERP yang mengelola seluruh operasional bisnis, Pengembangan Sistem yang disesuaikan dengan kebutuhan spesifik, hingga Layanan Periklanan Digital untuk meningkatkan visibilitas dan pertumbuhan bisnis Anda—semua kami rancang untuk mempermudah, mempercepat, dan memperkuat keberhasilan bisnis Anda.
        </p>
      </div>
      <Logo />

      <div className="content-grid">
        {data.map((item, index) => (
          <div className={`content-row ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="content-box">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <div className="accordion">
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                <span>{item.title}</span>
                <span>{openAccordion === index ? '▲' : '▼'}</span>
              </div>
              {openAccordion === index && (
                <div className="accordion-body">
                  <p>{item.accordionContent}</p>
                  {/* Tombol Link di dalam Accordion */}
                  <div className="accordion-button-container">
                    <Link to={item.link}>
                      <button className="accordion-button">Lihat Produk Kami</button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
