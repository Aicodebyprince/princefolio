
'use client';

import React from 'react';
import { projects } from '@/lib/data';
import { notFound, useRouter, useParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ProjectDetails from '@/components/sections/explore/project-details';
import AnimatedBackground from '@/components/animated-background';
import { Button } from '@/components/ui/button';

export default function ProjectPage() {
    const router = useRouter();
    const params = useParams();
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white antialiased">
            <AnimatedBackground />
            <div className="relative z-10 p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <Button variant="ghost" onClick={() => router.back()} className="mb-8 hover:bg-white/10">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to All Projects
                    </Button>
                    <ProjectDetails project={project} />
                </div>
            </div>
        </div>
    );
}
