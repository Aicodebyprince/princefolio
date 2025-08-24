"use client";

import React from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';
import { experiences } from '@/lib/data';

const ExperienceContent = () => (
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-8">
                Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-2xl text-gray-300 font-light">Building solutions across different industries</p>
        </div>

        <div className="space-y-12">
            {experiences.map((exp, index) => (
                <Card3D key={index} className="glass-card rounded-3xl p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                        <div>
                            <h3 className="text-3xl font-bold gradient-text mb-2">{exp.role}</h3>
                            <p className="text-xl text-gray-300 font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-left md:text-right mt-4 md:mt-0">
                            <p className="text-lg font-semibold text-blue-400">{exp.period}</p>
                            <p className="text-gray-400">{exp.location}</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-bold mb-4 solution-text">Key Achievements:</h4>
                            <ul className="space-y-3 text-gray-300">
                                {exp.achievements.map((ach, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-green-400 mr-3 mt-1">✓</span>
                                        {ach}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-4 solution-text">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map(tech => (
                                    <span key={tech} className="tech-tag px-3 py-1 rounded-full text-xs">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card3D>
            ))}
        </div>
    </div>
);


const ExperienceSection = () => (
    <SectionWrapper id="experience" className="py-32 px-6">
        <ExperienceContent />
    </SectionWrapper>
);

export default ExperienceSection;
