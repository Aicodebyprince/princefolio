import React from 'react';
import { GithubIcon, LinkedInIcon, MailIcon } from './icons';

const Footer = () => {
    return (
        <footer className="py-16 px-6 border-t border-white/10 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-6 md:mb-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                            <span className="font-bold text-white text-lg">PS</span>
                        </div>
                        <div>
                            <div className="font-bold text-xl gradient-text">Prince Sherathiya</div>
                            <div className="text-sm text-gray-400 mono">Developer</div>
                        </div>
                    </div>

                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="https://github.com/Aicodebyprince" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <GithubIcon className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/princesherathiya/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <LinkedInIcon className="w-6 h-6" />
                        </a>
                        <a href="mailto:princesher321@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <MailIcon className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-gray-400 text-sm font-semibold">© 2024 Prince Sherathiya. All rights reserved.</p>
                        <p className="text-gray-500 text-xs mt-2">Building the future, one line of code at a time</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
