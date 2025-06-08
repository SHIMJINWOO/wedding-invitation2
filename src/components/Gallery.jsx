import React, { useState, useRef } from 'react';
import './Gallery.css';
import cover1 from '../assets/cover1.jpg';
import cover2 from '../assets/cover2.jpg';
import cover3 from '../assets/cover3.jpg';
import cover4 from '../assets/cover4.jpg';
import cover5 from '../assets/cover5.jpg';
import cover6 from '../assets/cover6.jpg';
import cover7 from '../assets/cover7.jpg';
import cover8 from '../assets/cover8.jpg';
import cover9 from '../assets/cover9.jpg';
import cover10 from '../assets/cover10.jpg';

const images = [
  cover1, cover2, cover3, cover4, cover5,
  cover6, cover7, cover8, cover9, cover10
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const carouselRef = useRef(null);

  const scrollLeft = () => carouselRef.current.scrollBy({ left: -100, behavior: 'smooth' });
  const scrollRight = () => carouselRef.current.scrollBy({ left: 100, behavior: 'smooth' });

  return (
    <div className="gallery-wrapper">
      <div className="section-divider">
        <hr />
        <h2 className="section-title">갤러리</h2>
        <hr />
      </div>

      <div className="main-image-wrapper">
        <img src={selectedImage} alt="selected" className="main-image" />
      </div>

      <div className="carousel-container">
        <button className="arrow left" onClick={scrollLeft}>&lt;</button>
        <div className="thumbnail-carousel" ref={carouselRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`thumb${index + 1}`}
              className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
}

export default Gallery;