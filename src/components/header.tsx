"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { href: "/#home", label: "Home" },
        { href: "/#about", label: "About" },
        { href: "/#skills", label: "Skills" },
        { href: "/#services", label: "Services" },
        { href: "/#projects", label: "Projects" },
        { href: "/#experience", label: "Experience" },
        { href: "/#journey", label: "Journey" },
    ];

    return (
        <nav className={cn("nav-bar fixed top-0 left-0 right-0 z-50", { scrolled })}>
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="/#home" className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="font-bold text-white text-lg">PS</span>
                        </div>
                        <div>
                            <div className="font-bold text-xl gradient-text">Prince Sherathiya</div>
                            <div className="text-xs text-gray-400 mono">Developer</div>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                             <a key={link.href} href={link.href} className="nav-link text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer">{link.label}</a>
                        ))}
                    </div>
                    
                    <a href="/#contact">
                        <Button className="btn-primary rounded-xl hidden md:block">Contact Me</Button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;