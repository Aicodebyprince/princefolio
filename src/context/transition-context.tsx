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
        setTimeout(() => {
            router.push(path);
        }, 800); // Match this to animation duration
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1500); // A bit longer to allow for fade out
    };

    return (
        <TransitionContext.Provider value={{ isTransitioning, handleTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};
