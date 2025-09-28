
"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { journeyData } from '@/lib/data';
import { cn } from '@/lib/utils';

const JourneyContent: React.FC<{ isVisible?: boolean, onExploreClick: () => void }> = ({ isVisible, onExploreClick }) => {
    if (!isVisible) return null;

    return (
        <div className="container mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
                    My Academic <span className="gradient-text">Journey</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto">
                    Transforming curiosity into expertise through continuous learning and academic excellence.
                </p>
            </div>

            <div className="journey-timeline">
                <div className="timeline-line hidden lg:block">
                    <div className="timeline-progress"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 lg:space-x-10 relative z-[2]">
                    {journeyData.map((item, index) => (
                        <div 
                            key={index}
                            className="journey-card"
                            style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                        >
                            <div className="achievement-badge"></div>
                            <div className="relative mx-auto mb-8 w-[90px] h-[90px]">
                                <div className="card-icon">
                                    {React.cloneElement(item.icon, { size: 40 })}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 leading-tight z-[2] relative">{item.college}</h3>
                            <p className="text-base text-gray-400 font-medium mb-5 z-[2] relative">{item.degree}</p>
                            <span className="text-sm font-semibold text-blue-400 z-[2] relative bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
                                {item.period}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

             <div className="text-center mt-20">
                <Button className="btn-solve" onClick={onExploreClick}>
                    Explore Full Journey →
                </Button>
            </div>
        </div>
    );
}

const JourneySection = ({ onExploreClick }: { onExploreClick: () => void }) => (
    <SectionWrapper id="journey" className="py-32 px-6">
        <JourneyContent onExploreClick={onExploreClick} />
    </SectionWrapper>
);

export default JourneySection;

  