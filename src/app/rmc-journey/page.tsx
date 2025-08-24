'use client';

import React from 'react';
import { journeyData } from '@/lib/data';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import JourneyDetails from '@/components/sections/explore/journey-details';
import AnimatedBackground from '@/components/animated-background';
import { Button } from '@/components/ui/button';

const RMCJourneyPage = () => {
    const rmcData = journeyData.find(j => j.college === "RMC College");
    const router = useRouter();

    if (!rmcData) {
        return <div>Journey data not found.</div>;
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
                        <h1 className="text-5xl font-bold tracking-tighter mb-4 gradient-text">{rmcData.college}</h1>
                        <p className="text-lg text-gray-400">{rmcData.degree} ({rmcData.period})</p>
                    </header>
                    
                    <JourneyDetails highlights={rmcData.highlights} />
                </div>
            </div>
        </div>
    );
};

export default RMCJourneyPage;
