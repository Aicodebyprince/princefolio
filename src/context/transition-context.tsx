
"use client";

import React, { createContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface TransitionContextProps {
    isTransitioning: boolean;
    transitionFinished: boolean;
    handleTransition: (path: string) => void;
}

export const TransitionContext = createContext<TransitionContextProps>({
    isTransitioning: false,
    transitionFinished: true,
    handleTransition: () => {},
});

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const handleTransition = (path: string) => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push(path);
        }, 500); 

        setTimeout(() => {
            setIsTransitioning(false);
        }, 1400); 
    };

    return (
        <TransitionContext.Provider value={{ isTransitioning, transitionFinished: !isTransitioning, handleTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};
