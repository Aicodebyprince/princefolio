"use client";

import React, { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const particleCount = 50;
      const newParticles = [];
      for (let i = 0; i < particleCount; i++) {
        const style = {
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
          animationDelay: `${Math.random() * 20}s`,
          animationDuration: `${Math.random() * 10 + 15}s`,
        };
        newParticles.push(<div key={i} className="particle" style={style}></div>);
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div className="animated-bg">
      <div className="floating-particles">{particles}</div>
    </div>
  );
};

export default AnimatedBackground;
