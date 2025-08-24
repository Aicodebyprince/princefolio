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
        // Page change logic
        setTimeout(() => {
            router.push(path);
        }, 800); // Corresponds to rumble animation

        // End of animation cleanup
        setTimeout(() => {
            setIsTransitioning(false);
        }, 2000); // Total animation duration
    };

    return (
        <TransitionContext.Provider value={{ isTransitioning, handleTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};
