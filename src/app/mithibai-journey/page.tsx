'use client';

import React from 'react';
import { mithibaiJourney } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Card3D from '@/components/card-3d';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { GraduationCap, Code, Rocket } from 'lucide-react';

const MithibaiJourneyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-black mb-8">
              My Journey at <span className="gradient-text">Mithibai College</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-4xl mx-auto">
              {mithibaiJourney.period}
            </p>
          </div>

          <div className="space-y-12">
            {mithibaiJourney.highlights.map((entry, index) => (
              <Card3D key={index} className="glass-card rounded-3xl p-10">
                <div className="flex items-center gap-4 mb-4">
                  {entry.type === 'project' && <Code className="w-8 h-8 text-blue-400" />}
                  {entry.type === 'event' && <Rocket className="w-8 h-8 text-purple-400" />}
                  {entry.type === 'academic' && <GraduationCap className="w-8 h-8 text-green-400" />}
                  <h3 className="text-3xl font-bold gradient-text">{entry.title}</h3>
                </div>
                
                <div className="space-y-6 pl-12">
                  <div>
                    <h4 className="text-lg font-bold solution-text mb-2">Description:</h4>
                    <p className="text-gray-300">{entry.description}</p>
                  </div>
                  
                  {entry.details && (
                    <div>
                      <h4 className="text-lg font-bold solution-text mb-2">Key Details:</h4>
                      <ul className="space-y-2 list-disc list-inside text-gray-300">
                        {entry.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {entry.ctaLink && (
                      <div className="pt-4">
                          <a href={entry.ctaLink} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                                  View Project →
                              </Button>
                          </a>
                      </div>
                  )}
                </div>
              </Card3D>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/#journey">
              <Button className="btn-primary">Back to Main Journey</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MithibaiJourneyPage;
