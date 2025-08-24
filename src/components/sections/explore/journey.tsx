'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { journeyData } from '@/lib/data';
import Link from 'next/link';

const JourneySectionExplore = () => {
    return (
        <section id="journey-explore">
             <div className="text-center mb-16">
                <h1 className="text-5xl font-bold tracking-tighter mb-4">Academic Journey</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    A timeline of my educational background, key projects, and milestones. Each step has been a building block in my development career.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {journeyData.map((item, index) => (
                    <div key={index} className="glass-card rounded-2xl p-8">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg ring-8 ring-black mr-6">
                                    {React.cloneElement(item.icon, { size: 32 })}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold gradient-text">{item.college}</h3>
                                    <p className="text-lg text-gray-300 font-semibold mt-1">{item.degree}</p>
                                    <p className="text-md font-semibold text-blue-400 mt-1">{item.period}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-auto flex-shrink-0">
                                <Link href={item.path}>
                                    <Button className="btn-solve w-full">
                                        Explore Journey →
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 mt-6 pl-22 md:pl-0">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default JourneySectionExplore;
