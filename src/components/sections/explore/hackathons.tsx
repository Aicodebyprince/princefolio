'use client';

import React from 'react';
import { hackathons } from '@/lib/data';
import { Award, Calendar, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HackathonsSection = () => {
    return (
        <section id="hackathons">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold tracking-tighter mb-4">Hackathon Achievements</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    A showcase of my projects and performance in competitive hackathons, where innovation and speed are key.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {hackathons.map((hackathon, index) => (
                    <div key={index} className="glass-card rounded-2xl p-8 group">
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{hackathon.name}</h3>
                            <div className="text-md text-gray-400 font-semibold mt-2 md:mt-0 flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {hackathon.date}
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-yellow-400 mb-6">
                            <Trophy className="w-5 h-5" />
                            <span className="font-bold">{hackathon.outcome}</span>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-200 mb-2 solution-text flex items-center">
                                <Award className="w-5 h-5 mr-2" />
                                Project: {hackathon.project}
                            </h4>
                            <p className="text-gray-300 text-sm mb-4">
                                {hackathon.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {hackathon.tags.map(tag => (
                                    <span key={tag} className="tech-tag px-2.5 py-1 rounded-full text-xs font-semibold">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {hackathon.link && hackathon.link !== '#' && (
                            <div className="mt-6 flex justify-end">
                                <a href={hackathon.link} target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        className="border-accent text-accent hover:bg-accent hover:text-white group-hover:shadow-accent transition-all duration-300"
                                    >
                                        View Project/Submission
                                    </Button>
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HackathonsSection;
