import React, { useState } from "react";

const images = [
  "/docs/images/carousel/carousel-1.svg",
  "/docs/images/carousel/carousel-2.svg",
  "/docs/images/carousel/carousel-3.svg",
  "/docs/images/carousel/carousel-4.svg",
  "/docs/images/carousel/carousel-5.svg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-8">
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 
        dark:bg-gray-800/30 rounded-full p-2 hover:bg-white/50 dark:hover:bg-gray-800/60"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30
         dark:bg-gray-800/30 rounded-full p-2 hover:bg-white/50 dark:hover:bg-gray-800/60"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
