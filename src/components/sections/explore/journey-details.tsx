'use client';

import React from 'react';
import { Code, GraduationCap, Rocket } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';

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
    project: <Code className="w-5 h-5 text-blue-400" />,
    event: <Rocket className="w-5 h-5 text-purple-400" />,
    academic: <GraduationCap className="w-5 h-5 text-green-400" />,
};

const JourneyDetails = ({ highlights }: JourneyDetailsProps) => {
    return (
        <Accordion type="single" collapsible className="w-full space-y-4">
            {highlights.map((entry, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-xl border-none">
                    <AccordionTrigger className="text-left hover:no-underline p-6">
                        <div className="flex items-center gap-4 w-full">
                            {iconMap[entry.type]}
                            <h3 className="text-lg font-bold solution-text flex-grow">{entry.title}</h3>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 pl-16">
                        <div className="space-y-4">
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
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default JourneyDetails;
