"use client";

import React from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';
import { skills, technologies } from '@/lib/data';

interface SkillBarProps {
    level: number;
    isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ level, isVisible }) => {
    return (
        <div className="skill-progress">
            <div className="skill-fill" style={{ width: isVisible ? `${level}%` : '0%' }}></div>
        </div>
    );
};

interface SkillsContentProps {
    isVisible?: boolean;
}

const SkillsContent: React.FC<SkillsContentProps> = ({ isVisible = false }) => {
    if (!isVisible) return null;
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-lg text-gray-300 font-light">My toolkit for building and innovation</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <Card3D className="glass-card rounded-3xl p-10">
                    <div className="flex items-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mr-6">
                            <span className="text-3xl">📱</span>
                        </div>
                        <h3 className="text-xl font-bold gradient-text">Mobile Development</h3>
                    </div>
                    <div className="space-y-6">
                        {skills.mobile.map(skill => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-3">
                                    <span className="font-semibold text-sm">{skill.name}</span>
                                    <span className="mono text-xs gradient-text font-bold">{skill.level}%</span>
                                </div>
                                <SkillBar level={skill.level} isVisible={isVisible} />
                            </div>
                        ))}
                    </div>
                </Card3D>

                <Card3D className="glass-card rounded-3xl p-10">
                    <div className="flex items-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-2xl flex items-center justify-center mr-6">
                            <span className="text-3xl">⚙️</span>
                        </div>
                        <h3 className="text-xl font-bold gradient-text">Tools & Platforms</h3>
                    </div>
                    <div className="space-y-6">
                        {skills.tools.map(skill => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-3">
                                    <span className="font-semibold text-sm">{skill.name}</span>
                                    <span className="mono text-xs gradient-text font-bold">{skill.level}%</span>
                                </div>
                                <SkillBar level={skill.level} isVisible={isVisible} />
                            </div>
                        ))}
                    </div>
                </Card3D>

                <Card3D className="glass-card rounded-3xl p-10">
                    <div className="flex items-center mb-10">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl flex items-center justify-center mr-6">
                            <span className="text-3xl">🤝</span>
                        </div>
                        <h3 className="text-xl font-bold gradient-text">Collaboration</h3>
                    </div>
                    <div className="space-y-6">
                        {skills.collaboration.map(skill => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-3">
                                    <span className="font-semibold text-sm">{skill.name}</span>
                                    <span className="mono text-xs gradient-text font-bold">{skill.level}%</span>
                                </div>
                                <SkillBar level={skill.level} isVisible={isVisible} />
                            </div>
                        ))}
                    </div>
                </Card3D>
            </div>

            <div className="mt-20">
                <Card3D className="glass-card rounded-3xl p-12 text-center">
                    <h3 className="text-xl font-bold gradient-text mb-8">Primary Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map(tech => (
                            <span key={tech} className="tech-tag px-4 py-2 rounded-full text-xs font-semibold">{tech}</span>
                        ))}
                    </div>
                </Card3D>
            </div>
        </div>
    );
}

const SkillsSection = () => (
    <SectionWrapper id="skills" className="py-32 px-6">
        <SkillsContent />
    </SectionWrapper>
);

export default SkillsSection;
