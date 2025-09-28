
"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(2);
        
        // Use requestAnimationFrame to ensure the element is rendered before scrolling.
        requestAnimationFrame(() => {
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });

        if (isMobileMenuOpen) {
            handleCloseMenu();
        }
    };
    
    const handleCloseMenu = () => {
        setIsMobileMenuOpen(false);
    }

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
                    <a href="/#home" onClick={handleSmoothScroll} className="flex items-center space-x-4 cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="font-bold text-white text-lg">PS</span>
                        </div>
                        <div>
                            <div className="font-bold text-xl gradient-text">Prince Sherathiya</div>
                            <div className="text-xs text-gray-400 mono">Developer</div>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                             <a 
                                key={link.href} 
                                href={link.href} 
                                onClick={handleSmoothScroll}
                                className="nav-link text-sm font-medium hover:text-blue-400 transition-colors cursor-pointer"
                             >
                                {link.label}
                             </a>
                        ))}
                    </div>
                    
                    <a href="/#contact" onClick={handleSmoothScroll}>
                        <Button className="btn-primary rounded-xl hidden md:block cursor-pointer">
                            Contact Me
                        </Button>
                    </a>

                    {/* Mobile Navigation Trigger */}
                    <div className="md:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-gray-900/80 backdrop-blur-lg border-l-white/10 text-white p-6">
                                <div className="flex flex-col h-full">
                                    <div className="flex-grow flex flex-col items-center justify-center space-y-6">
                                         {navLinks.map(link => (
                                            <a 
                                                key={link.href} 
                                                href={link.href} 
                                                onClick={handleSmoothScroll}
                                                className="text-2xl font-semibold hover:gradient-text transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                    <a href="/#contact" onClick={handleSmoothScroll}>
                                        <Button className="btn-primary rounded-xl text-lg py-6 mt-8 w-full">
                                            Contact Me
                                        </Button>
                                    </a>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
