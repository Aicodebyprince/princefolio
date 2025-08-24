
"use client";

import React, from 'react';
import { createContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

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
    const [transitionFinished, setTransitionFinished] = useState(true);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // This effect runs on the client after hydration and on route changes.
        // It ensures that when the user navigates, we reset the state to show content.
        setTransitionFinished(true);
    }, [pathname]);

    const handleTransition = (path: string) => {
        if (pathname === path || isTransitioning) return;

        setTransitionFinished(false);
        setIsTransitioning(true);

        // Delay navigation to allow the initial part of the animation to play
        setTimeout(() => {
            router.push(path);
        }, 500);

        // Corresponds to the total animation time before it fades out
        // and we want to stop rendering the transition screen
        setTimeout(() => {
            setIsTransitioning(false);
            // The useEffect for pathname will set transitionFinished to true
        }, 1400); 
    };

    return (
        <TransitionContext.Provider value={{ isTransitioning, transitionFinished, handleTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};
