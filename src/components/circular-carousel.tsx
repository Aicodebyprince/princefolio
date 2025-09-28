
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type CircularCarouselProps = {
  images: {
    url: string;
    dataAiHint: string;
  }[];
};

const CircularCarousel: React.FC<CircularCarouselProps> = ({ images }) => {
  const numImages = images.length;
  const radius = 350; // Adjust this for circle size
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
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
                onClick={() => setSelectedImage(image.url)}
              >
                 <div className="orbiting-item-inner rounded-2xl">
                   <Image
                      src={image.url}
                      alt={`EcoReward screenshot ${index + 1}`}
                      width={300}
                      height={300}
                      className="object-cover w-full h-full rounded-2xl cursor-pointer"
                      data-ai-hint={image.dataAiHint}
                    />
                 </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] " onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage}
              alt="Full screen view"
              width={1920}
              height={1080}
              className="object-contain w-full h-full rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-white/20 text-white rounded-full p-2 hover:bg-white/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CircularCarousel;
