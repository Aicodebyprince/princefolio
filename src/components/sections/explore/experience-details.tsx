'use client';

import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { LucideProps } from 'lucide-react';

type Detail = {
    title: string;
    description: string;
    icon: string;
};

type ExperienceDetailsProps = {
    details: Detail[];
    iconMap: { [key: string]: React.ComponentType<LucideProps> };
};

const ExperienceDetails = ({ details, iconMap }: ExperienceDetailsProps) => {
    return (
        <div className="space-y-8">
            {details.map((detail, index) => {
                const Icon = iconMap[detail.icon];
                return (
                    <div key={index} className="glass-card rounded-2xl p-8">
                        <div className="flex items-start gap-6">
                            <div className="bg-white/10 p-4 rounded-xl">
                               {Icon && <Icon className="w-8 h-8 text-accent" />}
                            </div>
                            <div>
                                 <h3 className="text-2xl font-bold solution-text mb-2">{detail.title}</h3>
                                 <p className="text-gray-300 leading-relaxed">{detail.description}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ExperienceDetails;
