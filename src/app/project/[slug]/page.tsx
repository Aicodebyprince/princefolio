
'use client';

import React from 'react';
import { projects } from '@/lib/data';
import { notFound, useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ProjectDetails from '@/components/sections/explore/project-details';
import AnimatedBackground from '@/components/animated-background';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProjectPage() {
    const params = useParams();
    const router = useRouter();
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white antialiased">
            <AnimatedBackground />
            <div className="relative z-10">
                <div className="max-w-6xl mx-auto px-8 md:px-12 py-8">
                    <Link href="/explore?tab=projects" passHref>
                        <Button variant="ghost" className="mb-8 hover:bg-white/10">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back to All Projects
                        </Button>
                    </Link>
                    <ProjectDetails project={project} />
                </div>
            </div>
        </div>
    );
}
