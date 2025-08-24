'use client';

import React from 'react';
import { experiences } from '@/lib/data';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, FileText, Code, Users } from 'lucide-react';
import AnimatedBackground from '@/components/animated-background';
import { Button } from '@/components/ui/button';
import ExperienceDetails from '@/components/sections/explore/experience-details';

const iconMap: { [key: string]: React.ElementType } = {
    document: FileText,
    code: Code,
    users: Users,
};


const ExperiencePage = () => {
    const router = useRouter();
    const params = useParams();
    const { slug } = params;

    const experience = experiences.find(exp => exp.slug === slug);

    if (!experience) {
        return (
             <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <p>Experience not found.</p>
                <Button onClick={() => router.push('/')} className="ml-4">Go Home</Button>
            </div>
        );
    }

    return (
         <div className="min-h-screen bg-black text-white antialiased">
            <AnimatedBackground />
            <div className="relative z-10 p-8 md:p-12">
                <div className="max-w-5xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-white/10">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Portfolio
                    </Button>

                    <header className="mb-12">
                        <h1 className="text-5xl font-bold tracking-tighter mb-2 gradient-text">{experience.role}</h1>
                        <p className="text-2xl text-gray-300 font-semibold">{experience.company}</p>
                        <p className="text-lg text-blue-400 mt-2">{experience.period}</p>
                    </header>
                    
                    <ExperienceDetails details={experience.details} iconMap={iconMap} />
                </div>
            </div>
        </div>
    );
};

export default ExperiencePage;
