
"use client";

import React from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';
import { experiences } from '@/lib/data';
import { Button } from '../ui/button';
import Link from 'next/link';

const ExperienceContent = ({ isVisible, onExploreClick }: { isVisible?: boolean, onExploreClick: () => void }) => {
    if (!isVisible) return null;
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-2xl text-gray-300 font-light">Professional journey and contributions</p>
            </div>

            <div className="space-y-12">
                {experiences.slice(0, 1).map((exp, index) => (
                    <Card3D key={index} className="glass-card rounded-3xl p-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-bold gradient-text mb-2">{exp.role}</h3>
                                <p className="text-xl text-gray-300 font-semibold">{exp.company}</p>
                            </div>
                            <div className="text-left md:text-right mt-4 md:mt-0">
                                <p className="text-lg font-semibold text-blue-400">{exp.period}</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4 solution-text">Summary of Contributions:</h4>
                            <ul className="space-y-3 text-gray-300 mb-8">
                                {exp.achievements.map((ach, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-green-400 mr-3 mt-1">✓</span>
                                        {ach}
                                    </li>
                                ))}
                            </ul>
                            <Button className="btn-primary" onClick={onExploreClick}>
                                Explore My Work →
                            </Button>
                        </div>
                    </Card3D>
                ))}
            </div>
        </div>
    );
}


const ExperienceSection = ({ onExploreClick }: { onExploreClick: () => void }) => (
    <SectionWrapper id="experience" className="py-32 px-6">
        <ExperienceContent onExploreClick={onExploreClick} />
    </SectionWrapper>
);

export default ExperienceSection;

  