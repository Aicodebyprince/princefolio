"use client";

import React from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';
import { education } from '@/lib/data';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { GraduationCap } from 'lucide-react';


const EducationContent = ({ isVisible }: { isVisible?: boolean }) => {
    if (!isVisible) return null;
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                    My <span className="gradient-text">Education</span>
                </h2>
                <p className="text-2xl text-gray-300 font-light">My academic journey and milestones</p>
            </div>

            <Card3D className="glass-card rounded-3xl p-10">
                <Accordion type="single" collapsible className="w-full">
                    {education.map((edu, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-xl hover:no-underline">
                                <div className="flex items-center gap-4">
                                    <GraduationCap className="w-8 h-8 text-blue-400" />
                                    <div>
                                        <h3 className="text-2xl font-bold gradient-text">{edu.degree}</h3>
                                        <p className="text-lg text-gray-300 font-semibold">{edu.college}</p>
                                        <p className="text-sm text-gray-400">{edu.period}</p>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4 pl-16">
                                <ul className="space-y-3 text-gray-300">
                                    {edu.details.map((detail, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-green-400 mr-3 mt-1">✓</span>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Card3D>
        </div>
    );
}

const EducationSection = () => (
    <SectionWrapper id="education" className="py-32 px-6">
        <EducationContent />
    </SectionWrapper>
);

export default EducationSection;
