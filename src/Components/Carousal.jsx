// Carousel.js

import React, { useState } from 'react';
import photo1 from "../Assets/photo1.jpg"
import photo2 from "../Assets/photo2.jpg"
import photo3 from "../Assets/photo3.jpg"
import photo4 from "../Assets/photo4.jpg"
import "./Carousal.css"
const images = [photo1, photo2,photo3, photo4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousal w-screen h-4/5  flex items-center justify-center relative">
        <button
        onClick={prevSlide}
        className=" mr-10 transform -translate-y-1/2  transparent"
      >
        <p className='arrows font-poppins text-4xl font-normal leading-tight text-left'>{'<'}</p>
      </button>
      {images.map((photo, index) => (
        <div
        key={index}
        className={`flex justify-center w-5/6 h-4/5 items-center ${
          index === currentIndex ? 'block transition-slide' : 'hidden'
        }`}
      >
        <img src={photo} alt={`Slide ${index}`} className="w-4/5 h-full object-cover" />
      </div>
      
      ))}
      
      <button
        onClick={nextSlide}
        className="ml-10 transform -translate-y-1/2  p-2"
      >
        <p className='arrows font-poppins text-4xl font-normal leading-tight text-left'>{'>'}</p>
      </button>
    </div>
  );
};

export default Carousel;
