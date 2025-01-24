import React, { useState, useEffect, useCallback } from 'react';
import './Slider.css';

const Slider = () => {
  const slides = [
    { image: 'orang.png', text: 'Welcome to Our Company' },
    { image: 'api.jpeg', text: 'We Deliver Excellence' },
    { image: 'orang.png', text: 'Your Trusted Partner' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle Next slide
  const handleNext = useCallback(() => {
    if (isAnimating) return; // Prevent animation during transition
    setIsAnimating(true);

    setCurrentIndex((prevIndex) => {
      if (prevIndex === slides.length - 1) {
        // For last slide, continue to the first slide directly
        return 0; 
      }
      return prevIndex + 1; // Move to next slide normally
    });
  }, [isAnimating, slides.length]);

  // Handle Prev slide
  const handlePrev = () => {
    if (isAnimating) return; // Prevent animation during transition
    setIsAnimating(true);

    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return prevIndex; // Stay on the first slide
      }
      return prevIndex - 1; // Move to previous slide
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, [handleNext]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false); // Re-enable animation after delay
    }, 500); // Adjust this time based on transition duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="slider">
      <div
        className="slider-container"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
        }}
      >
        {slides.map((slide, index) => (
          <div className="slider-slide" key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
            <div className="slider-text">
              <h2>{slide.text}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Prev and Next buttons */}
      <button className="slider-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="slider-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
