import React, { useState } from 'react';
import './Carousel.css';
import placeholderImg from './placeholder_img.png'; 

function Carousel() {
  const images = [
    placeholderImg,
    placeholderImg,
    placeholderImg,
    placeholderImg,
    placeholderImg
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={handlePrev}>
        &#10094;
      </button>

      <div className="carousel-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? 'active' : ''
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="carousel-btn next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;
