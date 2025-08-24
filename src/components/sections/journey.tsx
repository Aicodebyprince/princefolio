"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { journeyData } from '@/lib/data';
import Card3D from '../card-3d';

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

             <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-0">
                {displayJourneyData.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex md:flex-col items-center md:items-start">
                             <div className="w-1/4 md:w-auto">
                                <Card3D className="glass-card rounded-3xl p-6 text-center h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-center mb-6">
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center text-white shadow-lg ring-8 ring-black">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold gradient-text mb-2 h-12 flex items-center justify-center">{item.college}</h3>
                                        <p className="text-sm text-gray-300 font-semibold mb-2 h-10 flex items-center justify-center">{item.degree}</p>
                                    </div>
                                    <p className="text-xs font-semibold text-blue-400 mt-4">{item.period}</p>
                                </Card3D>
                             </div>

                             {/* Vertical connector for mobile */}
                            {index < displayJourneyData.length - 1 && (
                                <div className="md:hidden h-16 w-px bg-gradient-to-b from-blue-500/50 to-purple-600/50 mx-4"></div>
                            )}
                        </div>
                        
                        {/* Horizontal connector for desktop */}
                        {index < displayJourneyData.length - 1 && (
                            <div className="hidden md:flex flex-1 items-center justify-center px-4">
                                <div className="w-full h-px bg-gradient-to-r from-blue-500/50 to-purple-600/50"></div>
                            </div>
                        )}
                   </React.Fragment>
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
