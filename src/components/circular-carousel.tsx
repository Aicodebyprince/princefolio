
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type CircularCarouselProps = {
  images: {
    url: string;
    dataAiHint: string;
  }[];
};

const CircularCarousel: React.FC<CircularCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % numImages);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [numImages]);

  const getStyle = (index: number) => {
    const angle = (360 / numImages) * (index - activeIndex);
    const radius = 350; // Adjust this for circle size
    const x = Math.round(radius * Math.sin((angle * Math.PI) / 180));
    const z = Math.round(radius * Math.cos((angle * Math.PI) / 180)) - radius;
    
    const perspectiveScale = Math.max(0.5, Math.min(1.2, 1 - z / (radius * 3)));
    const opacity = perspectiveScale > 0.6 ? 1 : 0.4;
    const zIndex = Math.round(perspectiveScale * 100);

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${perspectiveScale})`,
      opacity: opacity,
      zIndex: zIndex,
    };
  };

  return (
    <div className="circular-carousel-wrapper my-16">
      <div className="circular-carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item"
            style={getStyle(index)}
          >
            <Image
              src={image.url}
              alt={`EcoReward screenshot ${index + 1}`}
              width={300}
              height={300}
              className="rounded-full object-cover w-full h-full"
              data-ai-hint={image.dataAiHint}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularCarousel;
