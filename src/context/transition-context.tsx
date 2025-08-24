"use client";

import React, { createContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface TransitionContextProps {
    isTransitioning: boolean;
    handleTransition: (path: string) => void;
}

export const TransitionContext = createContext<TransitionContextProps>({
    isTransitioning: false,
    handleTransition: () => {},
});

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const handleTransition = (path: string) => {
        setIsTransitioning(true);
        // Page change logic - faster
        setTimeout(() => {
            router.push(path);
        }, 400); // Corresponds to rumble animation

        // End of animation cleanup - faster
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1400); // Total animation duration
    };

    return (
        <TransitionContext.Provider value={{ isTransitioning, handleTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};
