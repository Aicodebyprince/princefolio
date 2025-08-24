"use client";

import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const TransitionScreen = () => {
    const [animationState, setAnimationState] = useState('start');

    useEffect(() => {
        const timer1 = setTimeout(() => setAnimationState('launching'), 100);
        const timer2 = setTimeout(() => setAnimationState('in-space'), 1500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center overflow-hidden">
            <div
                className={`absolute transition-all duration-1000 ease-in-out ${
                    animationState === 'launching' || animationState === 'in-space'
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-50'
                }`}
            >
                <div className="relative">
                    <Rocket
                        className={`text-white transition-transform duration-1000 ease-in-out ${
                            animationState === 'launching' ? '-translate-y-96 scale-150' : 'translate-y-0'
                        } ${animationState === 'in-space' ? 'opacity-0' : 'opacity-100'}`}
                        size={100}
                    />
                </div>
            </div>

            <div className={`absolute text-white text-2xl font-bold transition-opacity duration-500 ${animationState === 'in-space' ? 'opacity-100' : 'opacity-0'}`}>
                Entering Exploration Mode...
            </div>
            
            {/* Stars */}
            {[...Array(50)].map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2 + 1}px`,
                    height: `${Math.random() * 2 + 1}px`,
                    animation: `twinkle ${Math.random() * 5 + 2}s linear infinite`,
                };
                return <div key={i} className="absolute bg-white rounded-full" style={style}></div>;
            })}

            <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default TransitionScreen;