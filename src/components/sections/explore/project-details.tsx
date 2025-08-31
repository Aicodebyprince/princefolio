

'use client';

import React from 'react';
import type { Project, CaseStudyBlock } from '@/lib/data';
import Image from 'next/image';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const renderBlock = (block: CaseStudyBlock, index: number) => {
    switch (block.type) {
        case 'heading':
            const Icon = block.icon;
            const headingClasses = {
                2: 'text-2xl font-bold solution-text mb-6 flex items-center gap-3',
                3: 'text-xl font-bold gradient-text mb-4 mt-8',
                4: 'text-lg font-semibold text-gray-200 mb-3 mt-6',
            };
            const Tag = `h${block.level}` as keyof JSX.IntrinsicElements;
            return (
                <Tag key={index} className={headingClasses[block.level]}>
                   {Icon && <Icon className="w-5 h-5" />} {block.text}
                </Tag>
            );
        case 'paragraph':
            return <p key={index} className="text-gray-300 leading-relaxed text-sm md:text-base mb-4">{block.text}</p>;
        case 'list':
            return (
                <ul key={index} className="space-y-3 text-gray-300 list-disc list-inside mb-6">
                    {block.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            );
        case 'image':
            return (
                 <div key={index} className="my-8 max-w-2xl mx-auto">
                    <div className="glass-card rounded-2xl p-4">
                        <Image 
                            src={block.url}
                            alt={block.caption || `Project screenshot ${index}`}
                            width={800}
                            height={600}
                            className="rounded-lg object-contain w-full h-full"
                            data-ai-hint={block.dataAiHint}
                        />
                        {block.caption && <p className="text-xs text-center text-gray-400 mt-3">{block.caption}</p>}
                    </div>
                </div>
            );
        case 'image_grid':
            return (
                <div key={index} className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {block.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="glass-card rounded-2xl p-2">
                             <Image 
                                src={image.url}
                                alt={image.caption || `Project screenshot ${imgIndex}`}
                                width={800}
                                height={600}
                                className="rounded-lg object-contain w-full h-full"
                                data-ai-hint={image.dataAiHint}
                            />
                            {image.caption && <p className="text-xs text-center text-gray-400 mt-2">{image.caption}</p>}
                        </div>
                    ))}
                </div>
            );
        default:
            return null;
    }
}


const ProjectDetails = ({ project }: { project: Project }) => {
    
    // Renders the new case study format if available
    if (project.caseStudy) {
        return (
            <div className="space-y-4">
                 <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 gradient-text">{project.title}</h1>
                    <p className="text-lg md:text-xl text-gray-300 font-semibold">{project.category}</p>
                    {project.githubUrl && project.githubUrl !== '#' && (
                        <div className="mt-6">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="btn-primary">
                                    <Github className="w-5 h-5 mr-2" />
                                    View on GitHub
                                </Button>
                            </a>
                        </div>
                    )}
                </header>

                <div className="static-glass-card rounded-2xl p-6 md:p-10">
                    {project.caseStudy.map((block, index) => renderBlock(block, index))}
                </div>
            </div>
        )
    }
        
    // Fallback for old project structure (should not be needed for new projects)
    return <div>Project case study not found.</div>
};

export default ProjectDetails;
