
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
        setTransitionFinished(true);
    }, [pathname]);

    const handleTransition = (path: string) => {
        if (pathname === path || isTransitioning) return;

        // For anchor links on the same page, just scroll
        if (path.startsWith('/#')) {
            const id = path.substring(2);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            return;
        }

        setTransitionFinished(false);
        setIsTransitioning(true);

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
