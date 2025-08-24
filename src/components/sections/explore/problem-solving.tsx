'use client';

import React from 'react';
import { problemSolving } from '@/lib/data';
import { Check, Star, Trophy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const iconMap: { [key: string]: React.ReactNode } = {
    LeetCode: <Check className="w-6 h-6 text-yellow-400" />,
    HackerRank: <Star className="w-6 h-6 text-green-400" />,
    Codeforces: <Trophy className="w-6 h-6 text-red-400" />,
};

const ProblemSolvingSection = () => {
    return (
        <section id="problem-solving">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold tracking-tighter mb-4">Problem Solving Showcase</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    A collection of my achievements on competitive programming platforms, demonstrating my dedication to mastering algorithms and data structures.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problemSolving.map((item, index) => (
                     <div key={index} className="glass-card rounded-2xl p-8 flex flex-col group">
                        <div className="flex-grow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-white/10 p-4 rounded-lg">
                                    {iconMap[item.platform] || <Check className="w-6 h-6 text-gray-400" />}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{item.platform}</h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-lg font-semibold solution-text">{item.stat}</p>
                            </div>
                            <p className="text-gray-400 text-sm mb-6">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span key={tag} className="tech-tag px-2.5 py-1 rounded-full text-xs font-semibold">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                             <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <Button 
                                    variant="outline" 
                                    className="border-accent text-accent hover:bg-accent hover:text-white group-hover:shadow-accent transition-all duration-300"
                                >
                                    View Profile <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProblemSolvingSection;
