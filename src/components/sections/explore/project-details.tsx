

'use client';

import React from 'react';
import type { Project } from '@/lib/data';
import Image from 'next/image';
import { Target, Zap, Users, GraduationCap, Briefcase, UserCog, UserPlus, Bot, Code, Database, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
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

const techIcons: { [key: string]: React.ReactNode } = {
    "Workflow Automation": <Bot className="w-8 h-8 text-blue-400" />,
    "AI & Language Model": <Zap className="w-8 h-8 text-purple-400" />,
    "Communication Channel": <Users className="w-8 h-8 text-green-400" />,
    "API Configuration": <Settings className="w-8 h-8 text-yellow-400" />,
    "Database": <Database className="w-8 h-8 text-red-400" />,
}

const ProjectDetails = ({ project }: { project: Project }) => {
    const renderContent = () => {
        if (project.slug === 'whatsapp-chatbot') {
            return (
                <div className="space-y-16">
                     <header className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 gradient-text">{project.title}</h1>
                        <p className="text-lg md:text-xl text-gray-300 font-semibold">{project.category}</p>
                        <div className="mt-6">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="btn-primary">
                                    <Github className="w-5 h-5 mr-2" />
                                    View on GitHub
                                </Button>
                            </a>
                        </div>
                    </header>

                    <div className="glass-card rounded-2xl p-6 md:p-8">
                         <h3 className="text-2xl font-bold solution-text mb-6 flex items-center gap-3">
                            <Target className="w-5 h-5" />
                            Project Overview
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.projectOverview}</p>
                    </div>

                    <div className="glass-card rounded-2xl p-6 md:p-8">
                         <h3 className="text-2xl font-bold problem-text mb-6 flex items-center gap-3">
                            <Zap className="w-5 h-5" />
                            The Goal
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.goal}</p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Technologies & Tools</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.techStack?.map((tech, index) => (
                                <div key={index} className="glass-card rounded-xl p-6 flex items-start gap-4">
                                    <div className="bg-white/5 p-3 rounded-lg mt-1">{techIcons[tech.name]}</div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{tech.name}</h4>
                                        <p className="text-sm text-gray-400">{tech.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">System Architecture & Workflow</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-stretch">
                            {project.workflow?.map((step, index) => (
                                <div key={index} className="glass-card rounded-xl overflow-hidden flex flex-col">
                                    <div className="relative h-48 w-full">
                                        <Image src={step.imageUrl} alt={step.title} layout="fill" objectFit="cover" data-ai-hint={step.dataAiHint} />
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h4 className="font-bold text-xl solution-text mb-3">{step.title}</h4>
                                        <p className="text-sm text-gray-300">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="glass-card rounded-2xl p-6 md:p-8">
                         <h3 className="text-2xl font-bold solution-text mb-6 flex items-center gap-3">
                            Conclusion & Future Improvements
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6">{project.conclusion}</p>
                        <h4 className="font-bold text-gray-200 mb-3">Future Improvements:</h4>
                        <ul className="space-y-2 text-gray-300 list-disc list-inside">
                            {project.futureImprovements?.map((imp, i) => <li key={i}>{imp}</li>)}
                        </ul>
                    </div>

                </div>
            )
        }
        
        // Default project details layout
        return (
            <div className="space-y-16">
                <header className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 gradient-text">{project.title}</h1>
                    <p className="text-lg md:text-xl text-gray-300 font-semibold">{project.category}</p>
                    <div className="mt-6">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button className="btn-primary">
                                <Github className="w-5 h-5 mr-2" />
                                View on GitHub
                            </Button>
                        </a>
                    </div>
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
    }

    return renderContent();
};

export default ProjectDetails;
