"use client";

import React, { useState, useEffect, useRef } from 'react';
import Card3D from '../card-3d';

const TYPING_TEXTS = ['& Problem Solver', '& System Architect', '& Code Optimizer', '& Tech Innovator'];
const STATS = [
    { label: 'Projects Built', count: 50 },
    { label: 'Years Experience', count: 3 },
    { label: 'Happy Clients', count: 25 },
    { label: 'Problems Solved', count: 100 },
];

const AnimatedCounter = ({ target, isVisible }: { target: number, isVisible: boolean }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        const increment = target / totalFrames;

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(counter);
            } else {
                setCount(Math.ceil(start));
            }
        }, frameRate);

        return () => clearInterval(counter);
    }, [isVisible, target]);

    return <div ref={ref} className="text-3xl font-black gradient-text mb-3">{count}</div>;
};

const HeroSection = () => {
    const [typingText, setTypingText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    useEffect(() => {
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentText = TYPING_TEXTS[textIndex];
            let newText;

            if (isDeleting) {
                newText = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                newText = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            setTypingText(newText);

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % TYPING_TEXTS.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 50 : 100);
            }
        };

        const timeoutId = setTimeout(type, 500);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden section-fade" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(50px)' }}>
            <div className="absolute top-20 left-10 floating-element">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-full blur-xl"></div>
            </div>
            <div className="absolute top-40 right-20 floating-element">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-full blur-xl"></div>
            </div>
            <div className="absolute bottom-40 left-20 floating-element">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-full blur-xl"></div>
            </div>

            <div className="max-w-6xl mx-auto text-center relative z-10">

                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight pt-16">
                    <span className="gradient-text">Full-Stack Developer</span><br />
                    <span className="solution-text typing-cursor">{typingText}</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                    I build scalable web applications and solve complex technical challenges.
                    From React frontends to Node.js backends, I turn ideas into powerful digital solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
                    <a href="#projects" className="btn-solve px-8 py-4 rounded-xl font-bold text-base relative overflow-hidden">
                        <span className="relative z-10">View My Work 🚀</span>
                    </a>
                    <a href="#contact" className="btn-primary px-8 py-4 rounded-xl font-bold text-base">
                        Hire Me
                    </a>
                    <a href="#" className="border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-bold text-base transition-all hover:bg-white/5">
                        Download Resume
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {STATS.map(stat => (
                        <Card3D key={stat.label} className="glass-card rounded-2xl p-6">
                            <AnimatedCounter target={stat.count} isVisible={isVisible} />
                            <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{stat.label}</div>
                        </Card3D>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;