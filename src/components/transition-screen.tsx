"use client";

import React, { useContext } from 'react';
import { TransitionContext } from '@/context/transition-context';
import { Rocket } from 'lucide-react';

const TransitionScreen = () => {
    const { isTransitioning } = useContext(TransitionContext);

    if (!isTransitioning) return null;

    return (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center transition-opacity duration-300 animate-fadeIn aniamte-fadeOut">
            <div className="relative">
                <Rocket className="w-24 h-24 text-white animate-launch" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4 h-16 bg-gradient-to-t from-white/80 to-transparent animate-exhaust"></div>
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeOut {
                    from { opacity: 1; }
                    to { opacity: 0; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                .animate-fadeOut {
                     animation: fadeOut 0.3s ease-in forwards;
                     animation-delay: 0.6s;
                }

                @keyframes launch {
                    0% { transform: translateY(100vh) scale(0.5) rotate(-45deg); opacity: 0; }
                    25% { opacity: 1; }
                    100% { transform: translateY(-100vh) scale(1.2) rotate(-45deg); opacity: 0; }
                }
                .animate-launch {
                    animation: launch 0.9s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
                }
                
                @keyframes exhaust {
                    0% { transform: scaleY(0); opacity: 0; }
                    25% { transform: scaleY(1); opacity: 1; }
                    100% { transform: scaleY(2) translateY(-20px); opacity: 0; }
                }
                .animate-exhaust {
                    animation: exhaust 0.4s ease-out 0.05s forwards;
                    transform-origin: bottom;
                }
            `}</style>
        </div>
    );
};

export default TransitionScreen;
