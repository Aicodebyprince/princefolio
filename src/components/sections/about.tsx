"use client";

import React from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';

const AboutContent = ({ isVisible }: { isVisible?: boolean }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    About <span className="gradient-text">Me</span>
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-start">
                <div className="space-y-8">
                    <Card3D className="glass-card rounded-3xl p-8">
                        <h3 className="text-2xl font-bold gradient-text mb-6">Academic & Career Objective</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Currently pursuing my MSc in Computer Science from Mithibai College, I have hands-on experience in building mobile applications using Flutter and Dart. Alongside academic learning, I've worked on full-stack development projects, focused on clean UI/UX design, and integrated APIs for real-time functionalities. I'm now looking for a Flutter Developer Internship where I can apply my existing skills, gain more practical exposure, and grow by contributing to real-world projects within a collaborative and Agile development environment.
                        </p>
                    </Card3D>
                </div>

                <div className="relative">
                    <Card3D className="glass-card rounded-3xl p-12">
                         <h3 className="text-2xl font-bold gradient-text mb-8 text-center">Soft Skills</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><span className="text-green-400 mr-2">✓</span> Strong team player with experience in Agile collaboration.</li>
                            <li><span className="text-green-400 mr-2">✓</span> Proficient in code reviews and version control using Git.</li>
                            <li><span className="text-green-400 mr-2">✓</span> Passionate about mobile app trends.</li>
                            <li><span className="text-green-400 mr-2">✓</span> Continuously improving UI responsiveness and performance.</li>
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
