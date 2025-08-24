'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ResumePage = () => {
    const router = useRouter();

    return (
        <div className="bg-gray-100 font-sans">
            <div className="absolute top-4 left-4 z-20">
                <Button variant="ghost" onClick={() => router.back()} className="text-gray-600 hover:bg-gray-200">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Portfolio
                </Button>
            </div>
            <div className="resume-container">
                <aside className="resume-sidebar">
                    <header className="resume-header">
                        <h1>PRINCE<br />SHERATHIYA</h1>
                    </header>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Academic &amp; Career Objective</h2>
                        <p>
                            Currently pursuing my MSc in Computer Science from Mithibai College, I have hands-on experience in building mobile applications using Flutter and Dart. Alongside academic learning, I've worked on full-stack development projects, focused on clean UI/UX design, and integrated APIs for real-time functionalities. I'm now looking for a Flutter Developer Internship where I can apply my existing skills, gain more practical exposure, and grow by contributing to real-world projects within a collaborative and Agile development environment.
                        </p>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Soft Skills</h2>
                        <p>
                            Strong team player with experience in Agile collaboration, code reviews, and version control using Git. Passionate about mobile app trends and continuously improving UI responsiveness and performance.
                        </p>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Internship Experience</h2>
                        <h3>Intern - Process Automation &amp; Quality Documentation</h3>
                        <p className="font-semibold text-sm mb-2">Cunix Infotech Pvt. Ltd. | Nov 2024 - June 2025</p>
                        <p>Contributed to CMMI documentation and gained hands-on exposure to SDLC processes in a corporate environment.</p>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Internship Projects</h2>
                        <ul className="space-y-2">
                            <li><strong>AI-Powered Library Book Recommender:</strong> Built an internal AI tool to suggest relevant books and chapters to employees based on keywords, improving knowledge access.</li>
                            <li><strong>Automation Tools Using Macros:</strong> Automated Excel and Word documentation processes, reducing 8 hours of manual work to just 1 hour.</li>
                        </ul>
                    </section>
                    
                    <section className="resume-section">
                        <h2 className="resume-section-title">Technical Skills</h2>
                        <ul>
                            <li>Flutter & Dart (UI development, state management)</li>
                            <li>Firebase, REST APIs, JSON Integration</li>
                            <li>Git & GitHub (Version Control)</li>
                            <li>UI/UX Design using Figma & Canva</li>
                            <li>Agile Development & Team Collaboration</li>
                        </ul>
                    </section>
                </aside>
                
                <main className="resume-main">
                    <section className="resume-section">
                        <h2 className="resume-section-title">Academic History</h2>
                        <div className="entry">
                            <h3>MITHIBAI COLLEGE OF ARTS, CHAUHAN INSTITUTE OF SCIENCE & AMRUTBEN JIVANLAL COLLEGE OF COMMERCE AND ECONOMICS</h3>
                            <p className="sub-heading">Master of Science in Computer Science | 2025-2027 (Ongoing)</p>
                        </div>
                        <div className="entry">
                            <h3>REENA MEHTA COLLEGE OF ARTS, SCIENCE, COMMERCE AND MANAGEMENT STUDIES BHAYANDAR (W)</h3>
                            <p className="sub-heading">Bachelor of Science in Information Technology | 2022-2025</p>
                            <p>Completed undergraduate studies with a strong foundation in programming, software engineering, and system design. Actively participated in tech fests, coding competitions, and practical project-based learning.</p>
                        </div>
                        <div className="entry">
                            <h3>TP BHATIA COLLEGE, KANDIVALI (W)</h3>
                            <p className="sub-heading">Higher Secondary Certificate (HSC) in Science | Completed in 2022</p>
                            <p>Specialized in Science subjects including Physics, Chemistry, and Mathematics.</p>
                        </div>
                    </section>
                    
                    <section className="resume-section">
                        <h2 className="resume-section-title">Projects Work</h2>
                        <div className="entry">
                            <h3>1. College Management App</h3>
                            <p>Developed a complete college management app using Flutter & Firebase, integrating real-time student-teacher interactions, attendance, and notification systems.</p>
                            <ul>
                                <li>Used Dart for frontend logic and Firebase for backend services.</li>
                                <li>Applied UI/UX principles for smooth, responsive design.</li>
                                <li>Deployed real-time features for academic tracking and communication.</li>
                            </ul>
                            <p className="mt-2"><strong>Impact:</strong> Demonstrates full-cycle Flutter development, Firebase integration, and understanding of education-domain applications.</p>
                        </div>
                        <div className="entry">
                            <h3>2. Helpful Vault - AI-Generated Secure Storage Tool</h3>
                            <p>Conceptualized and deployed a personal productivity app fully built with AI assistance. The app allows secure storage and quick retrieval of passwords, notes, and links.</p>
                            <p className="mt-2"><strong>Built Using:</strong> OpenAI tools for complete development, deployed with minor configuration and testing.</p>
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2 className="resume-section-title">Projects Working On</h2>
                        <div className="entry">
                            <h3>1. TechFolio</h3>
                            <p>Currently building a community-driven platform designed for students, coders, and recruiters. It enables users to showcase skills, participate in coding tournaments, track progress levels, and access resume-building tools all in one place. Colleges can also host contests and manage participants through the platform.</p>
                            <ul>
                                <li>Features: Coding tournaments, project showcases, level-based progress system, resume builder, and analytics.</li>
                                <li>Tech Stack: Python(Django), Firebase, AI agents (planned).</li>
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ResumePage;
