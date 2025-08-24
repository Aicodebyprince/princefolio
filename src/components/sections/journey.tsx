"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

const JourneyContent = ({ isVisible }: { isVisible?: boolean }) => {
    if (!isVisible) return null;

    const journeyCards = [
        {
            college: "RMC College",
            degree: "BSc in Information Technology",
            period: "2019 - 2022",
            link: "/rmc-journey"
        },
        {
            college: "Mithibai College",
            degree: "MSc in Computer Science",
            period: "2022 - 2024",
            link: "/mithibai-journey"
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

            <div className="grid md:grid-cols-2 gap-12">
                {journeyCards.map((card, index) => (
                    <div key={index} className="project-card rounded-3xl p-10 h-full flex flex-col justify-between items-center text-center">
                        <div className="mb-6">
                            <GraduationCap className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                            <h3 className="text-3xl font-bold gradient-text">{card.college}</h3>
                            <p className="text-xl text-gray-300 font-semibold mt-2">{card.degree}</p>
                            <p className="text-md text-gray-400 mt-1">{card.period}</p>
                        </div>
                        <Link href={card.link}>
                            <Button className="btn-solve">
                                Explore My {card.college} Journey →
                            </Button>
                        </Link>
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
