"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { journeyData } from '@/lib/data';
import Card3D from '../card-3d';

const JourneyContent: React.FC<{ isVisible?: boolean, onExploreClick: () => void }> = ({ isVisible, onExploreClick }) => {
    if (!isVisible) return null;

    // Display in chronological order: St. Jerome -> Mithibai
    const displayJourneyData = [...journeyData].reverse();

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    My Academic <span className="gradient-text">Journey</span>
                </h2>
                <p className="text-lg text-gray-300 font-light">From foundational principles to advanced specialization.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {displayJourneyData.map((item, index) => (
                    <Card3D key={index} className="glass-card rounded-3xl p-6 text-center">
                        <div className="flex justify-center mb-6">
                             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center text-white shadow-lg ring-8 ring-black">
                                {item.icon}
                            </div>
                        </div>
                        <h3 className="text-lg font-bold gradient-text mb-2 h-12 flex items-center justify-center">{item.college}</h3>
                        <p className="text-sm text-gray-300 font-semibold mb-2 h-10 flex items-center justify-center">{item.degree}</p>
                        <p className="text-xs font-semibold text-blue-400">{item.period}</p>
                    </Card3D>
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
