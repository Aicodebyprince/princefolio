"use client";

import React from 'react';
import { Rocket } from 'lucide-react';

const TransitionScreen = () => {
    return (
        <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center overflow-hidden">
            <div className="rocket-container">
                <Rocket className="rocket" size={100} />
            </div>
            <div className="blast-wave"></div>

            <style jsx>{`
                .rocket-container {
                    animation: launch 1.5s ease-out forwards;
                }

                .rocket {
                    color: white;
                }

                .blast-wave {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 0;
                    height: 0;
                    background-color: white;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0;
                    animation: blast 1s ease-in forwards 1.5s;
                }

                @keyframes launch {
                    0% {
                        transform: translateY(100vh) scale(0.5);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(0) scale(1);
                        opacity: 1;
                    }
                }

                @keyframes blast {
                    0% {
                        width: 0;
                        height: 0;
                        opacity: 1;
                    }
                    100% {
                        width: 300vmax;
                        height: 300vmax;
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default TransitionScreen;
