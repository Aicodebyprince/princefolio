"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { journeyData } from '@/lib/data';
import Card3D from '../card-3d';

const JourneyContent: React.FC<{ isVisible?: boolean, onExploreClick: () => void }> = ({ isVisible, onExploreClick }) => {
    if (!isVisible) return null;

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    My Academic <span className="gradient-text">Journey</span>
                </h2>
                <p className="text-lg text-gray-300 font-light">From foundational principles to advanced specialization.</p>
            </div>

            <div className="journey-timeline">
                {journeyData.map((item, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                        <Card3D className="glass-card rounded-3xl p-6 text-left">
                            <div className="flex items-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 flex items-center justify-center text-white shadow-lg ring-4 ring-black mr-4">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold gradient-text">{item.college}</h3>
                                    <p className="text-md text-gray-300 font-semibold">{item.degree}</p>
                                </div>
                            </div>
                             <p className="text-sm font-semibold text-blue-400 mb-2">{item.period}</p>
                            <p className="text-xs text-gray-400">{item.description}</p>
                        </Card3D>
                    </div>
                ))}
            </div>

            <div className="text-center mt-20">
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
