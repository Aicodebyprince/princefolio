
"use client";

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState, Children, cloneElement, isValidElement } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  [key: string]: any;
}

const SectionWrapper = ({ children, id, className, ...props }: SectionWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { isVisible } as { isVisible: boolean });
    }
    return child;
  });

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn('section-fade', { visible: isVisible }, className)}
      {...props}
    >
      {childrenWithProps}
    </section>
  );
};

export default SectionWrapper;

  