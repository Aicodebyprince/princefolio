
"use client";

import React from 'react';
import SectionWrapper from '../section-wrapper';
import { projects } from '@/lib/data';
import { GitBranch, HelpingHand, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const iconMap: { [key: string]: React.ElementType } = {
    college: GitBranch,
    vault: HelpingHand,
    library: BookOpen
};

const ProjectsContent: React.FC<{ isVisible?: boolean, onExploreClick: () => void }> = ({ isVisible, onExploreClick }) => {
    if (!isVisible) return null;
    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-2xl text-gray-300 font-light">A showcase of my passion for building</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => {
                    const ProjectIcon = iconMap[project.icon];
                    return (
                        <div key={index} className="project-card rounded-2xl flex flex-col h-full">
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-center gap-4 mb-4">
                                     <div className="bg-white/10 p-3 rounded-lg">
                                        {ProjectIcon && <ProjectIcon className="w-6 h-6 text-accent" />}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                        <p className="text-sm text-gray-400">{project.category}</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tech-tag px-2.5 py-1 rounded-full text-xs font-semibold">{tag}</span>
                                    ))}
                                </div>
                                {project.stat && <div className="flex items-center text-xs text-green-400 mt-auto">
                                    <GitBranch className="w-4 h-4 mr-2" />
                                    {project.stat}
                                </div>}
                            </div>
                            <div className="p-6 mt-auto border-t border-white/10 space-y-3">
                                {project.slug && (
                                     <Link href={`/project/${project.slug}`} passHref>
                                        <Button className="w-full btn-solve">
                                            View Case Study <ArrowRight />
                                        </Button>
                                    </Link>
                                )}
                                <div className="flex gap-3">
                                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button variant="outline" className="w-full text-gray-300 border-white/20 hover:bg-white/10 hover:text-white">
                                            GitHub <ExternalLink />
                                        </Button>
                                    </a>
                                    {project.liveUrl && (
                                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                                            <Button variant="outline" className="w-full text-gray-300 border-white/20 hover:bg-white/10 hover:text-white">
                                                Live Demo
                                            </Button>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="text-center mt-16">
                 <Button className="btn-primary" onClick={onExploreClick}>
                    Explore All Projects
                </Button>
            </div>
        </div>
    );
}

const ProjectsSection = ({ onExploreClick }: { onExploreClick: () => void }) => (
    <SectionWrapper id="projects" className="py-32 px-6">
        <ProjectsContent onExploreClick={onExploreClick} />
    </SectionWrapper>
);


export default ProjectsSection;
