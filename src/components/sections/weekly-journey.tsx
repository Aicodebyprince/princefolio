"use client";

import React from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';
import { weeklyJourney } from '@/lib/data';
import { Button } from '../ui/button';

const WeeklyJourneyContent = ({ isVisible }: { isVisible?: boolean }) => {
    if (!isVisible) return null;

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                    My Weekly Learning & <span className="gradient-text">Project Journey</span>
                </h2>
                <p className="text-xl text-gray-300 font-light max-w-4xl mx-auto">
                    As an MSc Computer Science student, I document my weekly progress in both academics and practical projects. From coding challenges to real-world applications, this section reflects how I balance learning with building impactful solutions.
                </p>
            </div>

            <div className="space-y-12">
                {weeklyJourney.map((entry, index) => (
                    <Card3D key={index} className="glass-card rounded-3xl p-10">
                        <h3 className="text-3xl font-bold gradient-text mb-4">Week {entry.week}: {entry.focus}</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold solution-text mb-2">Description:</h4>
                                <p className="text-gray-300">{entry.description}</p>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-bold solution-text mb-2">Project Highlight:</h4>
                                <ul className="space-y-2 list-disc list-inside text-gray-300">
                                    {entry.projectHighlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold solution-text mb-2">Reflection / Next Steps:</h4>
                                <p className="text-gray-300">{entry.reflection}</p>
                            </div>

                            {entry.ctaLink && (
                                <div className="pt-4">
                                     <a href={entry.ctaLink} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                                            See the project live →
                                        </Button>
                                    </a>
                                </div>
                            )}
                        </div>
                    </Card3D>
                ))}
            </div>
        </div>
    );
}

const WeeklyJourneySection = () => (
    <SectionWrapper id="journey" className="py-32 px-6">
        <WeeklyJourneyContent />
    </SectionWrapper>
);

export default WeeklyJourneySection;
