"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { projects } from '@/lib/data';
import { GitBranch, HelpingHand, BookOpen } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
    college: GitBranch,
    vault: HelpingHand,
    library: BookOpen
};

const ProjectsContent: React.FC<{ isVisible?: boolean }> = ({ isVisible }) => {
    if (!isVisible) return null;
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-black mb-8">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-lg text-gray-300 font-light">A showcase of my passion for building</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => {
                    const ProjectIcon = iconMap[project.icon];
                    return (
                        <div key={index} className="project-showcase project-card rounded-2xl overflow-hidden">
                            <div className="h-48 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-pink-500/10 flex items-center justify-center relative">
                                <div className="text-center">
                                    {ProjectIcon && <ProjectIcon className="text-white mx-auto mb-3" size={48} />}
                                    <div className="text-md font-bold">{project.category}</div>
                                </div>
                                <div className="project-overlay">
                                    <div className="text-center p-4">
                                        <h4 className="text-xl font-bold mb-4">{project.title}</h4>
                                        <p className="text-xs mb-6 opacity-90 leading-relaxed">{project.shortDescription}</p>
                                        <div className="flex gap-3 justify-center">
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2 rounded-lg font-bold text-xs hover:bg-gray-100 transition-all">
                                                GitHub
                                            </a>
                                            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="border-2 border-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-white/10 transition-all">
                                                Live Demo
                                            </a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-md font-bold mb-3 gradient-text">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-xs leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tech-tag px-2.5 py-1 rounded-full text-xs font-semibold">{tag}</span>
                                    ))}
                                </div>
                                {project.stat && <div className="flex items-center text-xs text-green-400">
                                    <GitBranch className="w-4 h-4 mr-2" />
                                    {project.stat}
                                </div>}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="text-center mt-16">
                <a href="https://github.com/Aicodebyprince" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block px-10 py-4 rounded-xl font-bold text-base">
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
