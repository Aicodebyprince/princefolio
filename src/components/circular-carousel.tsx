
'use client';

import React from 'react';
import Image from 'next/image';

type CircularCarouselProps = {
  images: {
    url: string;
    dataAiHint: string;
  }[];
};

const CircularCarousel: React.FC<CircularCarouselProps> = ({ images }) => {
  const numImages = images.length;
  const radius = 300; // Adjust this for circle size

  return (
    <div className="orbital-carousel-wrapper my-16">
      <div className="orbital-container">
        {images.map((image, index) => {
          const angle = (360 / numImages) * index;
          const x = Math.round(radius * Math.cos((angle * Math.PI) / 180));
          const y = Math.round(radius * Math.sin((angle * Math.PI) / 180));
          
          return (
            <div
              key={index}
              className="orbiting-item"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
               <div className="orbiting-item-inner rounded-2xl">
                 <Image
                    src={image.url}
                    alt={`EcoReward screenshot ${index + 1}`}
                    width={250}
                    height={250}
                    className="object-cover w-full h-full rounded-2xl"
                    data-ai-hint={image.dataAiHint}
                  />
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularCarousel;

    