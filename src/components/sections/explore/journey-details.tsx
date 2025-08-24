'use client';

import { Button } from '@/components/ui/button';
import { Code, GraduationCap, Rocket } from 'lucide-react';
import React from 'react';

type Highlight = {
    type: 'academic' | 'project' | 'event';
    title: string;
    description: string;
    details?: string[];
    ctaLink?: string;
};

type JourneyDetailsProps = {
    highlights: Highlight[];
};

const iconMap = {
    project: <Code className="w-6 h-6 text-blue-400" />,
    event: <Rocket className="w-6 h-6 text-purple-400" />,
    academic: <GraduationCap className="w-6 h-6 text-green-400" />,
};

const JourneyDetails = ({ highlights }: JourneyDetailsProps) => {
    return (
        <div className="space-y-8">
            {highlights.map((entry, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                        {iconMap[entry.type]}
                        <h3 className="text-xl font-bold solution-text">{entry.title}</h3>
                    </div>

                    <div className="space-y-4 pl-10">
                        <p className="text-gray-300 text-sm">{entry.description}</p>

                        {entry.details && (
                            <div>
                                <h4 className="text-sm font-bold text-gray-200 mb-2">Key Details:</h4>
                                <ul className="space-y-1.5 list-disc list-inside text-gray-400 text-sm">
                                    {entry.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {entry.ctaLink && (
                            <div className="pt-2">
                                <a href={entry.ctaLink} target="_blank" rel="noopener noreferrer">
                                    <Button variant="link" className="p-0 text-accent h-auto">
                                        View Project →
                                    </Button>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default JourneyDetails;
