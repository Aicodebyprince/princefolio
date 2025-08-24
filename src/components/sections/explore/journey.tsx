'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

const JourneySectionExplore = () => {

    const journeyData = [
        {
            college: "Mithibai College",
            degree: "MSc in Computer Science",
            period: "2022 - 2024",
            link: "/mithibai-journey",
            icon: <GraduationCap />,
            description: "Specialized in advanced computer science topics, with a focus on mobile application development and AI."
        },
        {
            college: "RMC College",
            degree: "BSc in Information Technology",
            period: "2019 - 2022",
            link: "/rmc-journey",
            icon: <GraduationCap />,
            description: "Built a strong foundation in IT, covering core concepts of programming, databases, and networking."
        }
    ];

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
                                <Link href={item.link} className="w-full">
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
