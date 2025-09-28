
"use client";

import React, { useState, useEffect } from 'react';
import Card3D from '../card-3d';
import SectionWrapper from '../section-wrapper';
import { contactInfo } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactContent = ({ isVisible }: { isVisible?: boolean }) => {
    const [status, setStatus] = useState('idle');
    const { toast } = useToast();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('sending');
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const projectType = formData.get('projectType') as string;
        const details = formData.get('details') as string;

        try {
            await addDoc(collection(db, "contacts"), {
                name,
                email,
                projectType,
                details,
                createdAt: serverTimestamp(),
            });
            
            setStatus('success');
            toast({
                title: "✅ Message Sent!",
                description: "Thanks for reaching out. I'll be in touch soon.",
            });
            form.reset();

        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
            toast({
                title: "❌ Oops! Something went wrong.",
                description: "Could not send your message. Please try again later.",
                variant: 'destructive',
            });
        } finally {
             setTimeout(() => setStatus('idle'), 4000);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                    Let's Work <span className="solution-text">Together</span>
                </h2>
                <p className="text-2xl text-gray-300 font-light">Ready to bring your ideas to life</p>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-10">
                    <Card3D className="glass-card rounded-3xl p-10">
                        <h3 className="text-3xl font-bold mb-10 gradient-text">Get In Touch</h3>
                        <div className="space-y-8">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mr-6">
                                        <span className="text-3xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg">{item.label}</div>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">{item.value}</a>
                                        <div className={`text-sm ${item.color}`}>{item.detail}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card3D>
                </div>

                <Card3D className="glass-card rounded-3xl p-10">
                    <h3 className="text-3xl font-bold mb-10 gradient-text">Send Me a Message</h3>
                    {isMounted && (
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-semibold mb-3 text-gray-300">Your Name</label>
                                    <input type="text" name="name" required className="form-input w-full p-4 rounded-xl text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-3 text-gray-300">Email</label>
                                    <input type="email" name="email" required className="form-input w-full p-4 rounded-xl text-white" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-3 text-gray-300">Project Type</label>
                                <select name="projectType" required className="form-input w-full p-4 rounded-xl text-white">
                                    <option value="" className="text-black">Select project type</option>
                                    <option value="web-app" className="text-black">Web Application</option>
                                    <option value="mobile-app" className="text-black">Mobile App</option>
                                    <option value="api" className="text-black">API Development</option>
                                    <option value="consulting" className="text-black">Technical Consulting</option>
                                    <option value="other" className="text-black">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-3 text-gray-300">Project Details</label>
                                <textarea rows={5} name="details" required placeholder="Tell me about your project..." className="form-input w-full p-4 rounded-xl resize-none text-white"></textarea>
                            </div>
                            <button type="submit" disabled={status === 'sending'} className="w-full btn-solve py-5 rounded-xl font-bold text-lg relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed">
                                <span className="relative z-10">
                                    {status === 'sending' ? 'Sending...' : 'Send Message 🚀'}
                                </span>
                            </button>
                            <div className="text-center text-sm text-gray-400">
                                <span className="text-green-400 font-semibold">✓</span> I'll respond within 24 hours
                                <span className="mx-2">•</span>
                                <span className="text-green-400 font-semibold">✓</span> Free project consultation
                            </div>
                        </form>
                    )}
                </Card3D>
            </div>
        </div>
    );
};

const ContactSection = () => (
    <SectionWrapper id="contact" className="py-32 px-6">
        <ContactContent />
    </SectionWrapper>
);

export default ContactSection;

  