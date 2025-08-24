"use client";

import React from 'react';
import { Rocket } from 'lucide-react';

const TransitionScreen = () => {
    return (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center overflow-hidden screen-shake">
            <div className="rocket-container">
                <Rocket className="rocket" size={100} />
            </div>
            <div className="blast-wave"></div>

            <style jsx>{`
                .screen-shake {
                    animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both 0.6s;
                }
                
                .rocket-container {
                    animation: launch 0.6s cubic-bezier(0.61, 1, 0.88, 1) forwards;
                }

                .rocket {
                    color: white;
                    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7));
                }

                .blast-wave {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0;
                    animation: blast 0.5s ease-in forwards 0.6s;
                }

                @keyframes launch {
                    0% {
                        transform: translateY(100vh) scale(0.5) rotate(-45deg);
                        opacity: 0;
                    }
                    70% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(0) scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }

                @keyframes blast {
                    0% {
                        width: 0;
                        height: 0;
                        opacity: 0.8;
                    }
                    100% {
                        width: 300vmax;
                        height: 300vmax;
                        opacity: 1;
                    }
                }

                @keyframes shake {
                    10%, 90% {
                        transform: translate3d(-1px, 0, 0);
                    }
                    20%, 80% {
                        transform: translate3d(2px, 0, 0);
                    }
                    30%, 50%, 70% {
                        transform: translate3d(-4px, 0, 0);
                    }
                    40%, 60% {
                        transform: translate3d(4px, 0, 0);
                    }
                }
            `}</style>
        </div>
    );
};

export default TransitionScreen;
