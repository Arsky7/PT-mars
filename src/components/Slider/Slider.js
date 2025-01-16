import React, { useState, useEffect, useCallback } from 'react';  
import './Slider.css';

const Slider = () => {
  const slides = [
    { image: 'api.jpeg', text: 'Welcome to Our Company' },
    { image: 'air.jpeg', text: 'We Deliver Excellence' },
    { image: 'https://via.placeholder.com/1920x600?text=Slide+3', text: 'Your Trusted Partner' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 

    return () => clearInterval(interval);  
  }, [handleNext]);  

  return (
    <div className="slider">
      <div className="slider-container">
        <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
        <div className="slider-text">
          <h2>{slides[currentIndex].text}</h2>
        </div>

        {/* Tombol Prev dan Next */}
        <button className="slider-button prev" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="slider-button next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
