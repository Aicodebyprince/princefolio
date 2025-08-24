'use client';

import React from 'react';
import { services } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const AllServicesSection = () => {
    return (
        <section id="all-services">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold tracking-tighter mb-4">What I Offer</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    From concept to deployment, I provide a range of services to bring your digital products to life.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <AccordionItem key={index} value={`item-${index}`} className="glass-card rounded-xl border-none">
                                <AccordionTrigger className="text-left hover:no-underline p-6">
                                    <div className="flex items-center gap-4 w-full">
                                        <div className="bg-white/10 p-3 rounded-lg text-accent">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold solution-text flex-grow">{service.title}</h3>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="p-6 pt-0 pl-16">
                                    <div className="space-y-4">
                                         <p className="text-gray-300 text-sm">{service.description}</p>

                                        <div>
                                            <h4 className="text-sm font-bold text-gray-200 mb-3">Key Features:</h4>
                                            <ul className="space-y-2">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start text-sm text-gray-400">
                                                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        </section>
    );
};

export default AllServicesSection;
