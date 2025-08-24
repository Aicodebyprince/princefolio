
'use client';

import React from 'react';
import { Construction } from 'lucide-react';

const BlogSection = () => {
    return (
        <section id="blog">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold tracking-tighter mb-4">Blog & Insights</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Thoughts on technology, development, and my learning journey. Coming soon!
                </p>
            </div>

            <div className="flex flex-col items-center justify-center h-96 glass-card rounded-2xl p-8">
                <Construction className="w-24 h-24 text-accent mb-8" />
                <h2 className="text-3xl font-bold text-white mb-4">Content Under Construction</h2>
                <p className="text-gray-400 max-w-md text-center">
                    I'm currently working on some exciting articles and tutorials. Check back soon for updates!
                </p>
            </div>
        </section>
    );
};

export default BlogSection;
