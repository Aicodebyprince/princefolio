"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { journeyData } from '@/lib/data';

const JourneyContent: React.FC<{ isVisible?: boolean, onExploreClick: () => void }> = ({ isVisible, onExploreClick }) => {
    if (!isVisible) return null;

    const displayJourneyData = [...journeyData].reverse();

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    My Academic <span className="gradient-text">Journey</span>
                </h2>
                <p className="text-lg text-gray-300 font-light">From foundational principles to advanced specialization.</p>
            </div>

            <div className="relative max-w-2xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-10 top-0 w-0.5 h-full bg-white/10 -translate-x-1/2" aria-hidden="true"></div>

                {displayJourneyData.map((item, index) => (
                    <div key={index} className="relative pl-24 mb-12">
                        {/* Icon */}
                        <div className="absolute left-0 top-0 z-10">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center text-white shadow-lg ring-8 ring-black">
                                {item.icon}
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="glass-card rounded-2xl p-8 w-full">
                            <p className="text-lg font-semibold text-blue-400 mb-2">{item.period}</p>
                            <h3 className="text-2xl font-bold gradient-text mb-2">{item.college}</h3>
                            <p className="text-md text-gray-300 font-semibold">{item.degree}</p>
                        </div>
                    </div>
                ))}
            </div>

             <div className="text-center mt-16">
                <Link href="/explore?tab=journey">
                    <Button className="btn-solve">
                        Explore Full Journey →
                    </Button>
                </Link>
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
