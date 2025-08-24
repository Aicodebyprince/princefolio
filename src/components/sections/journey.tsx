'use client';

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { GraduationCap } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const journeyData = [
    {
        college: "RMC College",
        degree: "BSc in Information Technology",
        period: "2019 - 2022",
    },
    {
        college: "Mithibai College",
        degree: "MSc in Computer Science",
        period: "2022 - 2024",
    }
];

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

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-9 top-0 w-0.5 h-full bg-white/10 md:left-1/2 md:-ml-px" aria-hidden="true"></div>

                {journeyData.map((item, index) => (
                    <div key={index} className={`relative mb-12 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center justify-between`}>
                        {/* Icon */}
                        <div className="absolute md:relative left-0 md:left-auto z-10">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center text-white shadow-lg ring-8 ring-black">
                                <GraduationCap size={32} />
                            </div>
                        </div>
                        
                        {/* Content */}
                        <div className="glass-card rounded-2xl p-8 w-full ml-12 md:ml-0 md:w-5/12">
                            <p className="text-lg font-semibold text-blue-400 mb-2">{item.period}</p>
                            <h3 className="text-2xl font-bold gradient-text mb-2">{item.college}</h3>
                            <p className="text-md text-gray-300 font-semibold">{item.degree}</p>
                        </div>

                        {/* Spacer for large screens */}
                        <div className="hidden md:block md:w-1/12"></div>
                    </div>
                ))}
            </div>

             <div className="text-center mt-16">
                <Link href="/explore">
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
