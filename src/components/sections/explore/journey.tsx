'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

const JourneySectionExplore = () => {

    const journeyData = [
        {
            college: "RMC College",
            degree: "BSc in Information Technology",
            period: "2019 - 2022",
            link: "/rmc-journey",
            icon: <GraduationCap />,
            description: "Built a strong foundation in IT, covering core concepts of programming, databases, and networking."
        },
        {
            college: "Mithibai College",
            degree: "MSc in Computer Science",
            period: "2022 - 2024",
            link: "/mithibai-journey",
            icon: <GraduationCap />,
            description: "Specialized in advanced computer science topics, with a focus on mobile application development and AI."
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

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-white/10" aria-hidden="true"></div>

                {journeyData.map((item, index) => (
                    <div key={index} className="relative flex items-center justify-center mb-12">
                        {/* Left Card */}
                        <div className={`w-[calc(50%-4rem)] ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                             {index % 2 === 0 && (
                                <div className="glass-card p-6 rounded-2xl text-right">
                                    <p className="text-lg font-semibold text-blue-400 mb-2">{item.period}</p>
                                    <h3 className="text-2xl font-bold gradient-text">{item.college}</h3>
                                    <p className="text-lg text-gray-300 font-semibold mt-1">{item.degree}</p>
                                    <p className="text-sm text-gray-400 mt-3">{item.description}</p>
                                    <div className="mt-6">
                                        <Link href={item.link}>
                                            <Button className="btn-solve">
                                                Explore Journey →
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Center Icon */}
                        <div className="relative z-10 order-2 mx-8">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg ring-8 ring-black">
                                {React.cloneElement(item.icon, { size: 32 })}
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className={`w-[calc(50%-4rem)] ${index % 2 === 1 ? 'order-1' : 'order-3'}`}>
                             {index % 2 === 1 && (
                                <div className="glass-card p-6 rounded-2xl text-left">
                                     <p className="text-lg font-semibold text-blue-400 mb-2">{item.period}</p>
                                    <h3 className="text-2xl font-bold gradient-text">{item.college}</h3>
                                    <p className="text-lg text-gray-300 font-semibold mt-1">{item.degree}</p>
                                    <p className="text-sm text-gray-400 mt-3">{item.description}</p>
                                    <div className="mt-6">
                                        <Link href={item.link}>
                                            <Button className="btn-solve">
                                                Explore Journey →
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default JourneySectionExplore;
