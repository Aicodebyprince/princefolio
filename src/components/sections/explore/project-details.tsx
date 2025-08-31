
'use client';

import React from 'react';
import type { Project, ScreenshotsByRole, CaseStudyBlock } from '@/lib/data';
import Image from 'next/image';
import { Github, AlertTriangle, Lightbulb, Eye, UserPlus, User, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"


const roleIcons: { [key: string]: React.ElementType } = {
    visitors: Eye,
    signup: UserPlus,
    students: User,
    teachers: Users,
    admins: Shield,
};

const ScreenshotCarousel = ({ screenshotsByRole }: { screenshotsByRole: ScreenshotsByRole }) => {
    const Icon = roleIcons[screenshotsByRole.role];
    return (
        <div className="w-full my-16">
            <div className="text-center mb-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {Icon && <Icon className="w-8 h-8 text-accent" />}
                </div>
                <h3 className="text-3xl font-bold solution-text mb-2">{screenshotsByRole.title}</h3>
                <p className="text-gray-300">{screenshotsByRole.description}</p>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                 plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full"
            >
                <CarouselContent>
                    {screenshotsByRole.screenshots.map((ss, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                            <div className="p-1">
                                 <div className="bg-slate-800/20 p-2 rounded-2xl border border-white/10 aspect-[9/19] flex items-center justify-center">
                                    <Image
                                        src={ss.url}
                                        alt={`${screenshotsByRole.title} screenshot ${index + 1}`}
                                        width={250}
                                        height={500}
                                        className="rounded-lg object-contain w-full h-full"
                                        data-ai-hint={ss.dataAiHint}
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="text-white hover:bg-white/10 hover:text-white" />
                <CarouselNext className="text-white hover:bg-white/10 hover:text-white" />
            </Carousel>
        </div>
    );
}

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

    if (project.problem && project.solution && project.screenshotsByRole) {
        return (
            <div>
                <header className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2 gradient-text">{project.title}</h1>
                    <p className="text-lg md:text-xl text-gray-300 font-semibold">{project.category}</p>
                    {project.githubUrl && project.githubUrl !== '#' && (
                        <div className="mt-8">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="btn-primary">
                                    <Github className="w-5 h-5 mr-2" />
                                    View on GitHub
                                </Button>
                            </a>
                        </div>
                    )}
                </header>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="glass-card rounded-2xl p-8">
                         <h2 className="text-2xl font-bold solution-text mb-6 flex items-center gap-3"><AlertTriangle className="w-6 h-6" /> The Problem</h2>
                         <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.problem}</p>
                    </div>
                     <div className="glass-card rounded-2xl p-8">
                         <h2 className="text-2xl font-bold solution-text mb-6 flex items-center gap-3"><Lightbulb className="w-6 h-6" /> The Solution</h2>
                         <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.solution}</p>
                    </div>
                </div>
                
                {project.screenshotsByRole.map((roleData, index) => (
                    <ScreenshotCarousel key={index} screenshotsByRole={roleData} />
                ))}

            </div>
        )
    }
    
    // Renders the new case study format if available
    if (project.caseStudy && project.caseStudy.length > 0) {
        return (
            <div>
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
    return <div className="text-center text-xl text-gray-400">Project case study content is not available.</div>
};

export default ProjectDetails;

    