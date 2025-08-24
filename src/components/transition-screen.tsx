"use client";

import React, { useContext, useEffect, useState } from 'react';
import { TransitionContext } from '@/context/transition-context';
import { Rocket } from 'lucide-react';

type Star = { id: number; style: React.CSSProperties; };
type Smoke = { id: number; style: React.CSSProperties; };

const TransitionScreen = () => {
    const { isTransitioning } = useContext(TransitionContext);
    const [stars, setStars] = useState<Star[]>([]);
    const [smoke, setSmoke] = useState<Smoke[]>([]);

    useEffect(() => {
        if (isTransitioning) {
            // --- Starfield Generation ---
            const newStars: Star[] = [];
            for (let i = 0; i < 200; i++) {
                const size = Math.random() * 2 + 1;
                newStars.push({
                    id: i,
                    style: {
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${Math.random() * 2 + 1}s`
                    }
                });
            }
            setStars(newStars);

            // --- Smoke Particle System ---
            const smokeInterval = setInterval(() => {
                const newSmoke: Smoke[] = [];
                const burstCount = Math.random() > 0.5 ? 3 : 2;
                for (let i = 0; i < burstCount; i++) {
                    const size = Math.random() * 60 + 20;
                    const duration = Math.random() * 1.5 + 1;
                    newSmoke.push({
                        id: Math.random(),
                        style: {
                            width: `${size}px`,
                            height: `${size}px`,
                            transform: `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random()) * 20}px) scale(0)`,
                            animationDuration: `${duration}s`,
                        }
                    });
                }
                setSmoke(prev => [...prev, ...newSmoke].slice(-50)); // Limit particles
            }, 50);

            const rumbleDuration = 400; 
            const launchDuration = 1000;

            setTimeout(() => clearInterval(smokeInterval), rumbleDuration);
            const smokeCleanup = setTimeout(() => setSmoke([]), rumbleDuration + launchDuration);

            return () => {
                clearInterval(smokeInterval);
                clearTimeout(smokeCleanup);
            };

        } else {
            setStars([]);
            setSmoke([]);
        }
    }, [isTransitioning]);

    if (!isTransitioning) return null;

    return (
        <>
            <div className="scene">
                <div className="star-container">
                    {stars.map(star => <div key={star.id} className="star" style={star.style} />)}
                </div>

                <div className="rocket-container">
                    <div className="rocket">
                        <Rocket className="w-full h-full text-white" style={{ filter: 'drop-shadow(0 0 10px #667eea)'}} />
                    </div>
                </div>

                <div className="smoke-container">
                    {smoke.map(s => <div key={s.id} className="smoke" style={s.style} />)}
                </div>
            </div>
            <style jsx>{`
                .scene {
                    position: fixed;
                    inset: 0;
                    background: #000;
                    z-index: 100;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: fadeIn 0.1s ease-out, camera-shake 0.4s ease-in-out, fadeOut 0.3s ease-in 1s forwards;
                }
                
                .star-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    animation: parallax-scroll 1s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.4s forwards;
                }

                .star {
                    position: absolute;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #fff;
                    animation-name: star-twinkle, star-move;
                    animation-timing-function: infinite;
                }
                
                .rocket-container {
                    z-index: 20;
                    animation: launch 1s cubic-bezier(0.6, 0.04, 0.98, 0.335) 0.4s forwards;
                }

                .rocket {
                    width: 85px;
                    height: 170px;
                    position: relative;
                }

                .smoke-container {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                    z-index: 10;
                }

                .smoke {
                    position: absolute;
                    bottom: -50px;
                    border-radius: 50%;
                    background: radial-gradient(circle, #ddd, #aaa 50%, rgba(150, 150, 150, 0.5) 70%, transparent);
                    animation-name: smoke-plume;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                }

                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }

                @keyframes camera-shake {
                    0% { transform: translate(0, 0); }
                    25% { transform: translate(2px, -3px); }
                    50% { transform: translate(-2px, 3px); }
                    75% { transform: translate(2px, -2px); }
                    100% { transform: translate(0, 0); }
                }

                @keyframes launch {
                    0% { transform: translateY(100vh) scale(0.5); }
                    20% { transform: translateY(0vh) scale(1.1); }
                    30% { transform: translateY(0) scale(1.1); }
                    40% { transform: translateY(-5px) scale(1.1); }
                    50% { transform: translateY(0) scale(1.1); }
                    100% { transform: translateY(-120vh) scale(0.5); }
                }

                @keyframes parallax-scroll {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(50vh); }
                }
                
                @keyframes star-move {
                    from { transform: translateY(0px); }
                    to { transform: translateY(-2000px); }
                }
                
                @keyframes smoke-plume {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(2.5);
                        opacity: 0;
                    }
                }

                @keyframes star-twinkle {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
            `}</style>
        </>
    );
};

export default TransitionScreen;
