
"use client";

import React from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';
import Image from 'next/image';
import { GraduationCap, CheckCircle } from 'lucide-react';

const AboutContent = ({ isVisible }: { isVisible?: boolean }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    About <span className="gradient-text">Me</span>
                </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 items-center">
                {/* Image Section */}
                <div className="lg:col-span-1 flex justify-center">
                    <Card3D className="w-full max-w-sm">
                        <div className="glass-card rounded-3xl p-2 aspect-square relative">
                            <Image
                                src="/images/Prince sherathiya.png"
                                alt="Profile Picture of Prince Sherathiya"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-2xl"
                                data-ai-hint="profile picture"
                            />
                        </div>
                    </Card3D>
                </div>

                {/* Text Content Section */}
                <div className="lg:col-span-2">
                    <Card3D className="glass-card rounded-3xl p-8 md:p-10 h-full">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-white/10 p-3 rounded-lg text-accent mt-1">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold gradient-text">Academic & Career Objective</h3>
                                <p className="text-sm text-gray-400">MSc Computer Science Student</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed mb-8">
                            Currently pursuing my MSc in Computer Science from Mithibai College, I have hands-on experience in building mobile applications using Flutter and Dart. Alongside academic learning, I've worked on full-stack development projects, focused on clean UI/UX design, and integrated APIs for real-time functionalities. I'm now looking for a Flutter Developer Internship where I can apply my existing skills, gain more practical exposure, and grow by contributing to real-world projects within a collaborative and Agile development environment.
                        </p>
                        
                        <h3 className="text-xl font-bold solution-text mb-6">Core Competencies</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> Strong team player with experience in Agile collaboration.</li>
                            <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> Proficient in code reviews and version control using Git.</li>
                            <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> Passionate about mobile app trends and performance.</li>
                            <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-green-400" /> Committed to creating responsive and accessible UI.</li>
                        </ul>
                    </Card3D>
                </div>
            </div>
        </div>
    );
};


const AboutSection = () => (
    <SectionWrapper id="about" className="py-32 px-6">
        <AboutContent />
    </SectionWrapper>
);

export default AboutSection;
