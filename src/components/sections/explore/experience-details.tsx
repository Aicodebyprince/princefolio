'use client';

import React from 'react';
import { Code, Users, FileText, Layout, Bank } from 'lucide-react';

type Detail = {
    title: string;
    description: string;
    icon: string;
};

type ExperienceDetailsProps = {
    details: Detail[];
};

const iconMap: { [key: string]: React.ReactNode } = {
    document: <FileText className="w-8 h-8 text-blue-400" />,
    code: <Code className="w-8 h-8 text-green-400" />,
    users: <Users className="w-8 h-8 text-purple-400" />,
    layout: <Layout className="w-8 h-8 text-yellow-400" />,
    bank: <Bank className="w-8 h-8 text-red-400" />,
};

const ExperienceDetails = ({ details }: ExperienceDetailsProps) => {
    return (
        <div className="space-y-8">
            {details.map((detail, index) => (
                <div key={index} className="glass-card rounded-2xl p-8 flex items-start gap-6">
                    <div className="bg-white/5 p-4 rounded-xl">
                        {iconMap[detail.icon] || <FileText className="w-8 h-8 text-gray-400" />}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold solution-text mb-2">{detail.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{detail.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceDetails;
