'use client';

import React from 'react';
import { designTemplates } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const DesignSection = () => {
  return (
    <section id="designs">
       <div className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tighter mb-4">Design Templates</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A collection of UI/UX templates I've designed in Figma.
          </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {designTemplates.map((template, index) => (
          <div key={index} className="glass-card rounded-2xl overflow-hidden group">
            <div className="relative h-60 w-full">
              <Image 
                src={template.imageUrl}
                alt={template.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={template.dataAiHint}
              />
               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{template.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{template.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map(tag => (
                      <span key={tag} className="tech-tag px-2.5 py-1 rounded-full text-xs font-semibold">{tag}</span>
                  ))}
              </div>
              <a href={template.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                      View in Figma
                  </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignSection;