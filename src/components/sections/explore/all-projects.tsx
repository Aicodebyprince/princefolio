
'use client';

import React from 'react';
import { projects } from '@/lib/data';
import { GitBranch, HelpingHand, BookOpen, Code as CodeIcon, BarChart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const iconMap: { [key: string]: React.ElementType } = {
    college: GitBranch,
    vault: HelpingHand,
    library: BookOpen,
    code: CodeIcon,
    'chart-bar': BarChart,
};

const AllProjectsSection = () => {
    return (
        <section id="all-projects">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold tracking-tighter mb-4">All Projects</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    A comprehensive collection of my work, from full-stack applications to UI/UX designs and internal tools.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => {
                    const ProjectIcon = iconMap[project.icon] || CodeIcon;
                    return (
                        <div key={index} className="glass-card rounded-2xl p-6 flex flex-col group h-full">
                            <div className="flex-grow">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-white/10 p-3 rounded-lg">
                                        <ProjectIcon className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tech-tag px-2.5 py-1 rounded-full text-xs font-semibold">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                                {project.slug ? (
                                    <Link href={`/project/${project.slug}`} passHref>
                                        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white transition-all group-hover:shadow-accent">
                                            View Case Study <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                ) : (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="link" className="text-gray-300 hover:text-white p-0">
                                            View on GitHub
                                        </Button>
                                    </a>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <Button variant="secondary" className="bg-accent/80 hover:bg-accent text-white">
                                            Live Demo
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AllProjectsSection;
