"use client";

import React from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';
import { services } from '@/lib/data';

const ServicesContent = ({ isVisible }: { isVisible?: boolean }) => {
    if (!isVisible) return null;

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    My <span className="gradient-text">Services</span>
                </h2>
                <p className="text-lg text-gray-300 font-light">Crafting solutions to bring your ideas to life.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <Card3D key={index} className="glass-card rounded-3xl p-10 text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                                <span className="text-4xl text-accent">
                                    <Icon />
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-4 solution-text">{service.title}</h3>
                            <p className="text-sm text-gray-400">{service.description}</p>
                        </Card3D>
                    );
                })}
            </div>
        </div>
    );
};

const ServicesSection = () => (
    <SectionWrapper id="services" className="py-32 px-6">
        <ServicesContent />
    </SectionWrapper>
);

export default ServicesSection;
