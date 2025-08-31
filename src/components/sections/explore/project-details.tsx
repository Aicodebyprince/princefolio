

'use client';

import React from 'react';
import type { Project, CaseStudyBlock } from '@/lib/data';
import Image from 'next/image';
import { Target, Zap, Users, GraduationCap, Briefcase, UserCog, UserPlus, Bot, Code, Database, Settings, GitBranch, ChevronsRight, CheckCircle, Lightbulb, Rocket, Github, Pilcrow, List, CaseSensitive } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const roleIcons: { [key: string]: React.ReactNode } = {
    visitors: <Users className="w-8 h-8" />,
    students: <GraduationCap className="w-8 h-8" />,
    teachers: <Briefcase className="w-8 h-8" />,
    admins: <UserCog className="w-8 h-8" />,
    signup: <UserPlus className="w-8 h-8" />,
};

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
                 <div key={index} className="my-8 glass-card rounded-2xl p-4">
                    <Image 
                        src={block.url}
                        alt={block.caption || `Project screenshot ${index}`}
                        width={1280}
                        height={720}
                        className="rounded-lg object-contain w-full h-full"
                        data-ai-hint={block.dataAiHint}
                    />
                    {block.caption && <p className="text-xs text-center text-gray-400 mt-3">{block.caption}</p>}
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
        
    // Default project details layout for projects without the new format
    return (
        <div className="space-y-16">
            <header className="text-center">
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

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="glass-card rounded-2xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold problem-text mb-6 flex items-center gap-3">
                        <Target className="w-5 h-5" />
                        The Problem
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.problem}</p>
                </div>
                <div className="glass-card rounded-2xl p-6 md:p-8">
                        <h3 className="text-2xl font-bold solution-text mb-6 flex items-center gap-3">
                        <Zap className="w-5 h-5" />
                        The Solution
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.solution}</p>
                </div>
            </div>

            {/* User Role Screenshot Carousels */}
            <div className="space-y-16">
                {project.screenshotsByRole?.map((role, roleIndex) => (
                    <div key={role.title} className="space-y-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-600/20 rounded-2xl flex items-center justify-center mb-4 border border-white/10">
                                <span className="text-4xl text-accent">{roleIcons[role.role]}</span>
                            </div>
                            <h3 className="text-3xl font-bold gradient-text">{role.title}</h3>
                            <p className="text-gray-400 max-w-2xl px-4">{role.description}</p>
                        </div>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 2000,
                                    stopOnInteraction: false,
                                    stopOnMouseEnter: false,
                                    direction: role.role === 'visitors' || role.role === 'teachers' ? 'backward' : 'forward',
                                })
                            ]}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-2 md:-ml-4">
                                {role.screenshots.map((ss, index) => (
                                    <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 pl-2 md:pl-4">
                                        <div className="p-1">
                                            <div className="glass-card rounded-lg overflow-hidden p-1.5 aspect-[9/18]">
                                                <Image
                                                    src={ss.url}
                                                    alt={`${role.title} Screenshot ${index + 1}`}
                                                    width={250}
                                                    height={500}
                                                    className="rounded-md object-cover w-full h-full"
                                                    data-ai-hint={ss.dataAiHint}
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex" />
                            <CarouselNext className="hidden sm:flex" />
                        </Carousel>
                    </div>
                ))}
            </div>


            <div className="glass-card rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Tech Stack</h3>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="tech-tag px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default ProjectDetails;
