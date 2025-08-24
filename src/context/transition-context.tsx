
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
        // Reset transition state when route change is complete
        setTransitionFinished(true);
    }, [pathname]);

    const handleTransition = (path: string) => {
        if (pathname === path) return;

        setIsTransitioning(true);
        setTransitionFinished(false);

        setTimeout(() => {
            router.push(path);
        }, 500);

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
