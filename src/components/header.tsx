
"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useActiveSection } from "@/hooks/use-active-section";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const activeSection = useActiveSection([
        "home", "about", "skills", "services", "projects", "experience", "journey", "contact"
    ]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };
    
    const navLinks = [
        { href: "home", label: "Home" },
        { href: "about", label: "About" },
        { href: "skills", label: "Skills" },
        { href: "services", label: "Services" },
        { href: "projects", label: "Projects" },
        { href: "experience", label: "Experience" },
        { href: "journey", label: "Journey" },
    ];

    return (
        <nav className={cn("nav-bar fixed top-0 left-0 right-0 z-50", { scrolled })}>
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <a href="/#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="flex items-center space-x-4 cursor-pointer group">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                            <span className="font-bold text-white text-lg">PS</span>
                        </div>
                        <div>
                            <div className="font-bold text-xl gradient-text">Prince Sherathiya</div>
                            <div className="text-xs text-gray-400 mono">Developer</div>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-sm p-1 rounded-full border border-white/10">
                        {navLinks.map(link => (
                             <a 
                                key={link.href} 
                                href={`/#${link.href}`} 
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                className={cn(
                                    "nav-link text-sm font-medium transition-colors cursor-pointer px-4 py-2 rounded-full",
                                    activeSection === link.href 
                                        ? "bg-white/10 text-white" 
                                        : "text-gray-300 hover:text-white"
                                )}
                             >
                                {link.label}
                             </a>
                        ))}
                    </div>
                    
                    <a href="/#contact" onClick={(e) => handleSmoothScroll(e, 'contact')}>
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
                            <SheetContent side="right" className="bg-gray-950/90 backdrop-blur-lg border-l-white/10 text-white p-0 flex flex-col">
                                <div className="p-6 flex items-center justify-between border-b border-white/10">
                                    <h2 className="text-xl font-bold gradient-text">Navigation</h2>
                                    <SheetClose asChild>
                                        <Button variant="ghost" size="icon"><X/></Button>
                                    </SheetClose>
                                </div>
                                <div className="flex-grow flex flex-col items-center justify-center space-y-6">
                                     {navLinks.map(link => (
                                        <a 
                                            key={link.href} 
                                            href={`/#${link.href}`} 
                                            onClick={(e) => handleSmoothScroll(e, link.href)}
                                            className={cn(
                                                "text-2xl font-semibold transition-colors w-full text-center py-3",
                                                activeSection === link.href ? "gradient-text" : "hover:gradient-text"
                                            )}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                                <div className="p-6 border-t border-white/10">
                                    <a href="/#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="w-full">
                                        <Button className="btn-primary rounded-xl text-lg py-6 w-full">
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
