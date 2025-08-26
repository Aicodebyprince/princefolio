
'use client';

import React from 'react';
import type { Project } from '@/lib/data';
import Image from 'next/image';
import { Target, Zap, Users, GraduationCap, Briefcase, UserCog, UserPlus } from 'lucide-react';
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

const ProjectDetails = ({ project }: { project: Project }) => {
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
    );
};

export default ProjectDetails;
