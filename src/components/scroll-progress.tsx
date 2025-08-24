"use client";

import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / totalHeight) * 100;
    setWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className="scroll-indicator" id="scroll-progress" style={{ width: `${width}%` }} />;
};

export default ScrollProgress;
