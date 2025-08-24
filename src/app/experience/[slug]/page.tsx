'use client';

import React from 'react';
import { experiences } from '@/lib/data';
import { notFound, useRouter, useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ExperienceDetails from '@/components/sections/explore/experience-details';
import AnimatedBackground from '@/components/animated-background';
import { Button } from '@/components/ui/button';

export default function ExperiencePage() {
    const router = useRouter();
    const params = useParams();
    const experience = experiences.find(exp => exp.slug === params.slug);

    if (!experience) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white antialiased">
            <AnimatedBackground />
            <div className="relative z-10 p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-white/10">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Explore
                    </Button>

                    <header className="mb-12 text-center">
                        <h1 className="text-5xl font-bold tracking-tighter mb-2 gradient-text">{experience.role}</h1>
                        <p className="text-2xl text-gray-300 font-semibold">{experience.company}</p>
                        <p className="text-lg text-blue-400 mt-2">{experience.period}</p>
                    </header>
                    
                    <ExperienceDetails details={experience.details} />
                </div>
            </div>
        </div>
    );
}
