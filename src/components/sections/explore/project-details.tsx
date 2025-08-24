
'use client';

import React from 'react';
import type { Project } from '@/lib/data';
import Image from 'next/image';
import { CheckCircle, AlertTriangle, Github, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetails = ({ project }: { project: Project }) => {
    return (
        <div className="space-y-12">
            <header className="text-center">
                <h1 className="text-5xl font-bold tracking-tighter mb-2 gradient-text">{project.title}</h1>
                <p className="text-xl text-gray-300 font-semibold">{project.category}</p>
                <div className="mt-6">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-primary">
                            <Github className="w-5 h-5 mr-2" />
                            View on GitHub
                        </Button>
                    </a>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots?.map((ss, index) => (
                     <div key={index} className="glass-card rounded-lg overflow-hidden p-2">
                        <Image
                            src={ss.url}
                            alt={`${project.title} Screenshot ${index + 1}`}
                            width={1280}
                            height={720}
                            className="rounded-md"
                            data-ai-hint={ss.dataAiHint}
                        />
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="glass-card rounded-2xl p-8">
                     <h3 className="text-2xl font-bold problem-text mb-6 flex items-center gap-3">
                        <Target className="w-6 h-6" />
                        The Problem
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
                <div className="glass-card rounded-2xl p-8">
                     <h3 className="text-2xl font-bold solution-text mb-6 flex items-center gap-3">
                        <Zap className="w-6 h-6" />
                        The Solution
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Key Outcomes & Features</h3>
                <ul className="space-y-4 max-w-4xl mx-auto columns-1 md:columns-2">
                    {project.features?.map((feature, i) => (
                        <li key={i} className="flex items-start text-gray-300 break-inside-avoid">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Tech Stack</h3>
                 <div className="flex flex-wrap justify-center gap-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="tech-tag px-4 py-2 rounded-full text-sm font-semibold">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
