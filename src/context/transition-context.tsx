
"use client";

import React, { createContext, useState, ReactNode, useEffect } from 'react';
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
        // This effect runs on the client after hydration.
        // It ensures that when the user navigates back/forward, our state is correct.
        setTransitionFinished(true);
    }, [pathname]);

    const handleTransition = (path: string) => {
        if (pathname === path) return;

        setIsTransitioning(true);
        setTransitionFinished(false);

        setTimeout(() => {
            router.push(path);
        }, 500); // Duration of the initial part of the animation

        // Corresponds to the total animation time before it fades out
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1400); 
    };

    return (
        <TransitionContext.Provider value={{ isTransitioning, transitionFinished, handleTransition }}>
            {children}
        </TransitionContext.Provider>
    );
};
