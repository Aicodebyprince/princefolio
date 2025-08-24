'use client';

import React from 'react';
import { experiences } from '@/lib/data';
import { ArrowRight, Building } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const AllExperiencesSection = () => {
    return (
        <section id="all-experiences">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold tracking-tighter mb-4">My Professional Experience</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    A summary of my roles, responsibilities, and key achievements throughout my career.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="glass-card rounded-2xl p-8 group">
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                             <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                             <div className="text-md text-blue-400 font-semibold mt-2 md:mt-0">{exp.period}</div>
                        </div>
                       
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-6">
                            <div className="flex items-center">
                                <Building className="w-4 h-4 mr-2" />
                                {exp.company}
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-bold text-gray-200 mb-2 solution-text">Key Contributions:</h4>
                            <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                                {exp.achievements.map((ach, i) => (
                                    <li key={i}>{ach}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <Link href={`/experience/${exp.slug}`} passHref>
                                <Button 
                                    variant="outline" 
                                    className="border-accent text-accent hover:bg-accent hover:text-white group-hover:shadow-accent transition-all duration-300"
                                >
                                    Deep Dive <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllExperiencesSection;
