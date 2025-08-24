'use client';

import React from 'react';
import { blogs } from '@/lib/data';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const BlogSection = () => {
    return (
        <section id="blog">
             <div className="text-center mb-16">
                <h1 className="text-5xl font-bold tracking-tighter mb-4">My Thoughts & Learnings</h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    A collection of articles on technology, development, and my personal journey in the tech world.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {blogs.map((post, index) => (
                    <a href={post.link} key={index} target="_blank" rel="noopener noreferrer" className="block glass-card rounded-2xl p-6 group">
                        <div className="flex justify-between items-start mb-2">
                             <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{post.title}</h3>
                             <ArrowRight className="w-6 h-6 text-gray-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                       
                        <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                            <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1.5" />
                                {post.date}
                            </div>
                            <div className="flex items-center">
                                <Tag className="w-3 h-3 mr-1.5" />
                                {post.tags.join(', ')}
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm">
                            {post.description}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;