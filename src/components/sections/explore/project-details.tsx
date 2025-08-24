
'use client';

import React from 'react';
import type { Project } from '@/lib/data';
import Image from 'next/image';
import { Target, Zap, Users, GraduationCap, Briefcase, UserShield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const roleIcons: { [key: string]: React.ReactNode } = {
    visitors: <Users className="w-8 h-8" />,
    students: <GraduationCap className="w-8 h-8" />,
    teachers: <Briefcase className="w-8 h-8" />,
    admins: <UserShield className="w-8 h-8" />,
};

const ProjectDetails = ({ project }: { project: Project }) => {
    return (
        <div className="space-y-16">
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

            <div className="grid md:grid-cols-2 gap-12">
                <div className="glass-card rounded-2xl p-8">
                     <h3 className="text-2xl font-bold problem-text mb-6 flex items-center gap-3">
                        <Target className="w-5 h-5" />
                        The Problem
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
                <div className="glass-card rounded-2xl p-8">
                     <h3 className="text-2xl font-bold solution-text mb-6 flex items-center gap-3">
                        <Zap className="w-5 h-5" />
                        The Solution
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
            </div>

            {/* User Role Screenshot Carousels */}
            <div className="space-y-16">
                {project.screenshotsByRole?.map(role => (
                    <div key={role.title} className="space-y-6">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-600/20 rounded-2xl flex items-center justify-center mb-4 border border-white/10">
                                <span className="text-4xl text-accent">{roleIcons[role.role]}</span>
                            </div>
                            <h3 className="text-3xl font-bold gradient-text">{role.title}</h3>
                            <p className="text-gray-400 max-w-2xl">{role.description}</p>
                        </div>
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {role.screenshots.map((ss, index) => (
                                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4">
                                        <div className="p-1">
                                            <div className="glass-card rounded-lg overflow-hidden p-2 aspect-[9/18]">
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
