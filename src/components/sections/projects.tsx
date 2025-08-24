"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { projects } from '@/lib/data';
import { TrendUpIcon, UsersIcon, ZapIcon } from '../icons';

const iconMap: { [key: string]: React.ElementType } = {
    trendUp: TrendUpIcon,
    users: UsersIcon,
    zap: ZapIcon
};

const ProjectsContent: React.FC<{ isVisible?: boolean }> = ({ isVisible }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-lg text-gray-300 font-light">Real applications solving real problems</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => {
                    const StatIcon = iconMap[project.statIcon];
                    return (
                        <div key={index} className="project-showcase project-card rounded-3xl overflow-hidden">
                            <div className="h-64 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-pink-500/10 flex items-center justify-center relative">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">{project.icon}</div>
                                    <div className="text-lg font-bold">{project.category}</div>
                                </div>
                                <div className="project-overlay">
                                    <div className="text-center p-4">
                                        <h4 className="text-2xl font-bold mb-6">{project.shortTitle}</h4>
                                        <p className="text-sm mb-8 opacity-90 leading-relaxed">{project.shortDescription}</p>
                                        <div className="flex gap-4 justify-center">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all">
                                                GitHub
                                            </a>
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="border-2 border-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
                                                Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-lg font-bold mb-4 gradient-text">{project.title}</h3>
                                <p className="text-gray-300 mb-6 text-xs leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tech-tag px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex items-center text-sm text-green-400">
                                    {StatIcon && <StatIcon className="w-5 h-5 mr-3" />}
                                    {project.stat}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="text-center mt-16">
                <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block px-12 py-5 rounded-xl font-bold text-lg">
                    View All Projects on GitHub
                </a>
            </div>
        </div>
    );
}

const ProjectsSection = () => (
    <SectionWrapper id="projects" className="py-32 px-6">
        <ProjectsContent />
    </SectionWrapper>
);


export default ProjectsSection;
