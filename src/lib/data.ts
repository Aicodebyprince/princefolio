export const skills = {
    frontend: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
    ],
    backend: [
        { name: 'Node.js / Express', level: 88 },
        { name: 'Python / Django', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 87 },
    ],
    devops: [
        { name: 'AWS / Docker', level: 82 },
        { name: 'Git / GitHub', level: 93 },
        { name: 'CI/CD Pipelines', level: 78 },
    ],
};

export const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB',
    'Redis', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs', 'Tailwind CSS', 'Sass', 'Jest', 'Cypress', 'Git'
];

export const projects = [
    {
        icon: '🛒',
        title: 'ShopSmart E-commerce',
        description: 'Full-featured e-commerce platform with user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Built with React, Node.js, and Stripe.',
        category: 'E-commerce Platform',
        shortTitle: 'ShopSmart',
        shortDescription: 'Full-stack e-commerce with payment integration',
        githubUrl: 'https://github.com/alexchen/shopsmart',
        liveUrl: 'https://shopsmart-demo.com',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        stat: '1000+ Users, $50K+ Revenue',
        statIcon: 'trendUp'
    },
    {
        icon: '📋',
        title: 'TaskFlow Pro',
        description: 'Collaborative task management application with real-time updates, team collaboration, file sharing, and advanced analytics. Built with Next.js and Socket.io.',
        category: 'Task Manager',
        shortTitle: 'TaskFlow Pro',
        shortDescription: 'Collaborative project management tool',
        githubUrl: 'https://github.com/alexchen/taskflow',
        liveUrl: 'https://taskflow-pro.com',
        tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
        stat: '500+ Teams Using Daily',
        statIcon: 'users'
    },
    {
        icon: '📊',
        title: 'DataViz Pro',
        description: 'Business intelligence dashboard with real-time data visualization, custom reports, and predictive analytics. Processes 1M+ data points daily with sub-second response times.',
        category: 'Analytics Dashboard',
        shortTitle: 'DataViz Pro',
        shortDescription: 'Real-time business intelligence platform',
        githubUrl: 'https://github.com/alexchen/dataviz',
        liveUrl: 'https://dataviz-pro.com',
        tags: ['React', 'D3.js', 'Python', 'AWS'],
        stat: '99.9% Uptime, <1s Load Time',
        statIcon: 'zap'
    },
];

export const experiences = [
    {
        role: 'Senior Full-Stack Developer',
        company: 'TechCorp Solutions',
        period: '2022 - Present',
        location: 'San Francisco, CA',
        achievements: [
            'Led development of microservices architecture serving 100K+ users',
            'Reduced API response times by 60% through optimization',
            'Mentored 5 junior developers and established coding standards',
            'Implemented CI/CD pipelines reducing deployment time by 80%',
        ],
        technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
    },
    {
        role: 'Full-Stack Developer',
        company: 'StartupXYZ',
        period: '2021 - 2022',
        location: 'Remote',
        achievements: [
            'Built MVP from scratch that secured $2M Series A funding',
            'Developed real-time chat system handling 10K+ concurrent users',
            'Integrated payment systems processing $500K+ monthly',
            'Established testing practices achieving 95% code coverage',
        ],
        technologies: ['Next.js', 'TypeScript', 'Socket.io', 'MongoDB', 'Stripe', 'Vercel'],
    },
    {
        role: 'Junior Developer',
        company: 'WebDev Agency',
        period: '2020 - 2021',
        location: 'New York, NY',
        achievements: [
            'Delivered 15+ client websites with 100% on-time completion',
            'Improved website performance by 40% through optimization',
            'Collaborated with design team to implement pixel-perfect UIs',
            'Learned and adapted to new technologies quickly',
        ],
        technologies: ['HTML/CSS', 'JavaScript', 'React', 'WordPress', 'PHP', 'MySQL'],
    }
];

export const contactInfo = [
    { icon: '📧', label: 'Email', value: 'alex.chen.dev@gmail.com', detail: 'Usually respond within 24 hours', color: 'text-green-400' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/alexchen-dev', detail: 'Professional networking', color: 'text-blue-400' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/alexchen', detail: 'Check out my code', color: 'text-purple-400' },
];
