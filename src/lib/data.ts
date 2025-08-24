export const skills = {
    mobile: [
        { name: 'Flutter & Dart', level: 90 },
        { name: 'Firebase', level: 85 },
        { name: 'REST APIs & JSON', level: 88 },
    ],
    tools: [
        { name: 'Git & GitHub', level: 93 },
        { name: 'Figma & Canva', level: 80 },
        { name: 'Python (Django)', level: 75 },
    ],
    collaboration: [
        { name: 'Agile Development', level: 85 },
        { name: 'Team Collaboration', level: 95 },
        { name: 'Code Reviews', level: 90 },
    ],
};

export const technologies = [
    'Flutter', 'Dart', 'Firebase', 'Python', 'Django', 'REST APIs', 'JSON', 'Git', 'GitHub', 'Figma', 'Canva', 'Agile'
];

export const projects = [
    {
        icon: 'college',
        title: 'College Management App',
        description: 'A complete college management app using Flutter & Firebase, integrating real-time student-teacher interactions, attendance, and notification systems.',
        category: 'Mobile App',
        shortTitle: 'College App',
        shortDescription: 'Real-time college management system',
        githubUrl: 'https://github.com/Aicodebyprince/College-Management-App',
        liveUrl: '',
        tags: ['Flutter', 'Firebase', 'Dart'],
        stat: 'Full-cycle Flutter development',
    },
    {
        icon: 'vault',
        title: 'Helpful Vault - AI Secure Storage',
        description: 'A personal productivity app fully built with AI assistance. The app allows secure storage and quick retrieval of passwords, notes, and links, using OpenAI tools.',
        category: 'Productivity Tool',
        shortTitle: 'Helpful Vault',
        shortDescription: 'AI-powered secure storage',
        githubUrl: 'https://github.com/Aicodebyprince/helpful_vault',
        liveUrl: '',
        tags: ['Flutter', 'OpenAI', 'Secure Storage'],
        stat: 'Conceptualized and deployed',
    },
    {
        icon: 'library',
        title: 'AI Library Book Recommender',
        description: 'An internal AI tool to suggest relevant books and chapters to employees based on keywords, improving knowledge access within limited time.',
        category: 'Internal Tool',
        shortTitle: 'Book Recommender',
        shortDescription: 'AI-powered book suggestions',
        githubUrl: 'https://github.com/Aicodebyprince',
        liveUrl: '',
        tags: ['AI', 'Automation', 'Internal Tool'],
        stat: 'Reduced manual work by 8 hours',
    },
];

export const experiences = [
    {
        role: 'Intern - Process Automation & Quality Documentation',
        company: 'Cunix Infotech Pvt. Ltd.',
        period: 'Nov 2024 - June 2025',
        achievements: [
            'Contributed to CMMI documentation.',
            'Gained hands-on exposure to SDLC processes in a corporate environment.',
        ],
    }
];

export const contactInfo = [
    { icon: '📧', label: 'Email', value: 'princesher321@gmail.com', detail: 'Usually respond within 24 hours', color: 'text-green-400', link: 'mailto:princesher321@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/princesherathiya', detail: 'Professional networking', color: 'text-blue-400', link: 'https://www.linkedin.com/in/princesherathiya/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/Aicodebyprince', detail: 'Check out my code', color: 'text-purple-400', link: 'https://github.com/Aicodebyprince' },
];

export const rmcJourney = {
    period: '2019 - 2022',
    highlights: [
        {
            type: 'academic',
            title: 'Graduated with First Class Honors',
            description: 'Completed my BSc in Information Technology with a strong academic record, focusing on foundational computer science principles and software development.',
        },
        {
            type: 'project',
            title: 'Library Management System',
            description: 'Developed a comprehensive library management system as a final year project. This application streamlined book-keeping, member management, and lending processes.',
            details: [
                'Built with Java and MySQL.',
                'Featured a user-friendly interface for both librarians and members.',
                'Included search, tracking, and reporting functionalities.'
            ],
        },
        {
            type: 'event',
            title: 'Coding Club Activities',
            description: 'As an active member of the college coding club, I participated in and helped organize multiple events, fostering a culture of collaborative learning and competition.',
            details: [
                'Organized two intra-college hackathons.',
                'Conducted workshops on introductory Python and web development.',
                'Mentored junior students in competitive programming.'
            ],
        }
    ]
};

export const mithibaiJourney = {
    period: '2022 - 2024',
    highlights: [
        {
            type: 'academic',
            title: 'Specialization in Mobile Development',
            description: 'Focused my MSc on advanced algorithms and mobile application development, gaining deep expertise in building cross-platform applications with Flutter.',
        },
        {
            type: 'project',
            title: 'Campus Event Management App',
            description: 'Led a team to develop a campus-wide event management application. The app served as a central hub for all college events, announcements, and student registrations.',
            details: [
                'Developed using Flutter and Firebase for real-time data synchronization.',
                'Features included event calendars, push notifications, and a user feedback system.',
                'Successfully managed a team of four developers, following Agile methodologies.'
            ],
            ctaLink: 'https://github.com/Aicodebyprince/College-Management-App'
        },
        {
            type: 'academic',
            title: 'Published Research Paper',
            description: 'Co-authored and published a research paper on the applications of AI in data analysis, exploring new models for predictive analytics.',
            details: [
                'Paper focused on AI-driven data analysis techniques.',
                'Presented at a national-level computer science conference.',
            ],
        }
    ]
};
