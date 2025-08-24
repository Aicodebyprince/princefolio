"use client";

import React from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';

const AboutContent = ({ isVisible }: { isVisible?: boolean }) => {
    const whatIDo = [
        { text: 'Build responsive web applications', gradient: 'from-blue-500 to-purple-600' },
        { text: 'Design scalable backend systems', gradient: 'from-purple-600 to-pink-500' },
        { text: 'Optimize performance & user experience', gradient: 'from-pink-500 to-red-500' },
        { text: 'Solve complex technical challenges', gradient: 'from-red-500 to-orange-500' },
        { text: 'Mentor junior developers', gradient: 'from-orange-500 to-yellow-500' },
    ];
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    About <span className="gradient-text">Me</span>
                </h2>
                <p className="text-lg text-gray-300 font-light">Developer by day, problem solver by nature</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <Card3D className="glass-card rounded-3xl p-8">
                        <h3 className="text-2xl font-bold gradient-text mb-6">My Story</h3>
                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            I&apos;m a passionate full-stack developer with 3+ years of experience building web applications
                            that solve real-world problems. I specialize in React, Node.js, and modern web technologies,
                            but what sets me apart is my problem-solving mindset.
                        </p>
                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            Whether it&apos;s debugging a complex system, optimizing performance, or architecting scalable solutions,
                            I approach every challenge with curiosity and determination. I believe great code isn&apos;t just functional—it&apos;s elegant, maintainable, and impactful.
                        </p>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source,
                            or helping fellow developers overcome technical challenges.
                        </p>
                    </Card3D>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Card3D className="glass-card rounded-2xl p-6 text-center">
                            <div className="text-2xl mb-4">🎓</div>
                            <h4 className="font-bold text-base mb-2">Education</h4>
                            <p className="text-gray-400 text-xs">Computer Science<br />University of Technology</p>
                        </Card3D>
                        <Card3D className="glass-card rounded-2xl p-6 text-center">
                            <div className="text-2xl mb-4">📍</div>
                            <h4 className="font-bold text-base mb-2">Location</h4>
                            <p className="text-gray-400 text-xs">San Francisco, CA<br />Open to Remote</p>
                        </Card3D>
                    </div>
                </div>

                <div className="relative">
                    <Card3D className="glass-card rounded-3xl p-12 text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl">
                            👨‍💻
                        </div>
                        <h3 className="text-2xl font-bold gradient-text mb-8">What I Do</h3>
                        <div className="space-y-6 text-left">
                            {whatIDo.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className={`w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full mr-4`}></div>
                                    <span className="text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
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
