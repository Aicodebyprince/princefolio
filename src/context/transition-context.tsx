"use client";

import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface TransitionContextType {
    isTransitioning: boolean;
    transitionTo: (path: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const transitionTo = useCallback((path: string) => {
        setIsTransitioning(true);
        setTimeout(() => {
            router.push(path);
        }, 1200); // Duration should match the transition animation
        setTimeout(() => {
            setIsTransitioning(false);
        }, 2000);
    }, [router]);

    return (
        <TransitionContext.Provider value={{ isTransitioning, transitionTo }}>
            {children}
        </TransitionContext.Provider>
    );
};

export const useTransition = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error('useTransition must be used within a TransitionProvider');
    }
    return context;
};

export const useTransitionRouter = () => {
    const context = useContext(TransitionContext);
    if (context === undefined) {
        throw new Error('useTransitionRouter must be used within a TransitionProvider');
    }
    return { transitionTo: context.transitionTo };
};
