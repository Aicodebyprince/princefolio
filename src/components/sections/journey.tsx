"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { GraduationCap, Briefcase } from 'lucide-react';

const JourneyContent = ({ isVisible }: { isVisible?: boolean }) => {
    if (!isVisible) return null;

    const journeyData = [
        {
            college: "RMC College",
            degree: "BSc in Information Technology",
            period: "2019 - 2022",
            link: "/rmc-journey",
            icon: <GraduationCap />,
            description: "Built a strong foundation in IT, covering core concepts of programming, databases, and networking."
        },
        {
            college: "Mithibai College",
            degree: "MSc in Computer Science",
            period: "2022 - 2024",
            link: "/mithibai-journey",
            icon: <GraduationCap />,
            description: "Specialized in advanced computer science topics, with a focus on mobile application development and AI."
        }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                    My Academic <span className="gradient-text">Journey</span>
                </h2>
                <p className="text-xl text-gray-300 font-light max-w-4xl mx-auto">
                    A timeline of my educational background, key projects, and milestones. Each step has been a building block in my development career.
                </p>
            </div>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-white/10" aria-hidden="true"></div>

                {journeyData.map((item, index) => (
                    <div key={index} className="relative mb-12">
                        <div className="flex items-center justify-between">
                            <div className={`w-[calc(50%-2rem)] text-right pr-8 ${index % 2 === 1 ? 'order-1' : ''}`}>
                                {/* Content for one side */}
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg ring-8 ring-gray-900">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                            </div>
                            <div className={`w-[calc(50%-2rem)] pl-8 ${index % 2 === 0 ? 'order-1' : ''}`}>
                                {/* Content for the other side */}
                            </div>
                        </div>

                        <div className={`w-[calc(50%-4rem)] mx-auto p-1`}>
                            <div className={`glass-card p-6 rounded-2xl text-center`}>
                                 <p className="text-lg font-semibold text-blue-400 mb-2">{item.period}</p>
                                <h3 className="text-2xl font-bold gradient-text">{item.college}</h3>
                                <p className="text-lg text-gray-300 font-semibold mt-1">{item.degree}</p>
                                <p className="text-sm text-gray-400 mt-3">{item.description}</p>
                                <div className="mt-6">
                                    <Link href={item.link}>
                                        <Button className="btn-solve">
                                            Explore Journey →
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const JourneySection = () => (
    <SectionWrapper id="journey" className="py-32 px-6">
        <JourneyContent />
    </SectionWrapper>
);

export default JourneySection;
