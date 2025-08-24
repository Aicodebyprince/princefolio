
import { GraduationCap, School, Code, Layers, Paintbrush, Puzzle } from 'lucide-react';
import React from 'react';

export type Screenshot = {
    url: string;
    dataAiHint: string;
};

export type Project = {
    icon: string;
    title: string;
    description: string;
    category: string;
    shortTitle: string;
    shortDescription: string;
    githubUrl: string;
    liveUrl: string;
    tags: string[];
    stat: string;
    slug?: string;
    screenshots?: Screenshot[];
    features?: string[];
    challenges?: string[];
};

export const services = [
    {
        title: "Mobile App Development",
        description: "Creating high-performance, cross-platform mobile apps with a focus on user experience and scalability.",
        icon: Code,
        features: [
            "Full-cycle development from idea to App Store/Play Store.",
            "Clean, maintainable, and scalable code with Flutter & Dart.",
            "Firebase integration for backend services (Auth, Firestore, etc.).",
            "Integration of third-party APIs and services.",
        ]
    },
    {
        title: "UI/UX Design",
        description: "Designing intuitive and beautiful user interfaces that are both user-friendly and aligned with your brand.",
        icon: Paintbrush,
        features: [
            "User flow mapping and wireframing.",
            "High-fidelity mockups and prototypes using Figma.",
            "Responsive design for all screen sizes.",
            "Focus on accessibility and usability best practices.",
        ]
    },
    {
        title: "API Development & Integration",
        description: "Building and integrating robust RESTful APIs to power your applications with data and functionality.",
        icon: Layers,
        features: [
            "Custom API development with Python (Django).",
            "Integration of external APIs (payment gateways, social media, etc.).",
            "Secure and efficient data handling.",
            "Clear documentation for API endpoints.",
        ]
    }
];

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
    'Flutter', 'Dart', 'Firebase', 'Python', 'Django', 'REST APIs', 'JSON', 'Git', 'GitHub', 'Figma', 'Canva', 'Agile', 'Next.js', 'React', 'TypeScript'
];

export const projects: Project[] = [
    {
        icon: 'college',
        title: 'College Management App',
        slug: 'college-management-app',
        description: 'A complete college management app using Flutter & Firebase, integrating real-time student-teacher interactions, attendance, and notification systems.',
        category: 'Mobile App',
        shortTitle: 'College App',
        shortDescription: 'Real-time college management system',
        githubUrl: 'https://github.com/Aicodebyprince/College-Management-App',
        liveUrl: '',
        tags: ['Flutter', 'Firebase', 'Dart', 'State Management', 'UI/UX'],
        stat: 'Full-cycle Flutter development',
        screenshots: [
            { url: 'https://firebasestorage.googleapis.com/v0/b/student-318e7.appspot.com/o/Screenshot%202025-01-27%20135532.png?alt=media&token=0099cb45-d057-4ebe-bcb5-8fbb6b7ea79c', dataAiHint: 'mobile app screen' },
            { url: 'https://placehold.co/1280x720.png', dataAiHint: 'dashboard analytics' },
        ],
        features: [
            "Real-time student-teacher interaction via chat.",
            "Digital attendance tracking and reporting.",
            "Push notifications for important announcements and reminders.",
            "Secure user authentication for students, teachers, and admins.",
            "Dynamic timetable and event scheduling.",
        ],
        challenges: [
            "Implementing a real-time notification system that was both reliable and battery-efficient.",
            "Designing a complex role-based access control system for different user types.",
            "Ensuring seamless data synchronization across multiple devices in real-time.",
        ],
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
    {
        icon: 'code',
        title: 'Personal Portfolio Website',
        description: 'A dynamic, responsive portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects, skills, and journey.',
        category: 'Web App',
        shortTitle: 'Portfolio',
        shortDescription: 'This website!',
        githubUrl: 'https://github.com/Aicodebyprince',
        liveUrl: '#',
        tags: ['Next.js', 'React', 'TailwindCSS'],
        stat: 'Interactive & Responsive Design',
    },
    {
        icon: 'chart-bar',
        title: 'E-commerce Dashboard UI',
        description: 'A UI concept for an e-commerce dashboard, designed to provide sellers with at-a-glance analytics on sales, inventory, and customer engagement.',
        category: 'UI/UX Design',
        shortTitle: 'E-commerce UI',
        shortDescription: 'Analytics dashboard concept',
        githubUrl: 'https://github.com/Aicodebyprince',
        liveUrl: '',
        tags: ['Figma', 'UI/UX', 'Data Visualization'],
        stat: 'Design-driven development',
    },
];


export const blogs = [
  {
    title: "Why I'm betting on Flutter for the Future of Mobile",
    date: "2024-07-15",
    description: "An exploration of the Flutter framework, its advantages over native development, and why I believe it's the future for building beautiful, high-performance mobile apps.",
    tags: ["Flutter", "Mobile Development", "Opinion"],
    link: "#"
  },
  {
    title: "Integrating Firebase in a Weekend Project",
    date: "2024-06-28",
    description: "A step-by-step guide on how to quickly integrate Firebase Authentication and Firestore into a new Flutter application, based on my experience building a prototype.",
    tags: ["Firebase", "Tutorial", "Flutter"],
    link: "#"
  },
  {
    title: "The Power of AI in Everyday Tools",
    date: "2024-06-10",
    description: "Reflections on building the Helpful Vault app and the potential for large language models to revolutionize personal productivity software.",
    tags: ["AI", "GenAI", "Productivity"],
    link: "#"
  }
];

export const designTemplates = [
  {
    title: "Modern SaaS Landing Page",
    description: "A clean and professional landing page template designed in Figma for a Software-as-a-Service product. Includes sections for features, pricing, and testimonials.",
    tags: ["Figma", "Web Design", "SaaS"],
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "website interface",
    link: "#"
  },
  {
    title: "Mobile Banking App UI Kit",
    description: "A comprehensive UI kit for a mobile banking application. Includes screens for login, dashboard, transfers, and transaction history.",
    tags: ["Figma", "Mobile UI", "Fintech"],
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "mobile app",
    link: "#"
  },
  {
    title: "Project Management Dashboard",
    description: "A dashboard template for a project management tool, focusing on clear data visualization for tasks, timelines, and team collaboration.",
    tags: ["Figma", "Dashboard", "UI/UX"],
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "dashboard analytics",
    link: "#"
  }
];

export const experiences = [
    {
        role: 'Intern - Process Automation & Quality Documentation',
        company: 'Cunix Infotech Pvt. Ltd.',
        slug: 'cunix-infotech',
        period: 'Nov 2023 - Jun 2024',
        path: '/experience/cunix-infotech',
        achievements: [
            'Contributed to CMMI Level 3 documentation, enhancing process standards.',
            'Developed Python scripts to automate documentation tasks, saving manual hours.',
            'Gained hands-on exposure to the full SDLC in an Agile environment.',
        ],
        details: [
            {
                title: 'CMMI Level 3 Documentation',
                description: 'Assisted the quality assurance team in preparing and organizing documentation required for CMMI Level 3 appraisal. This involved understanding, documenting, and refining existing development processes to meet international standards.',
                icon: 'document'
            },
            {
                title: 'Process Automation Scripting',
                description: 'Developed Python scripts to automate repetitive tasks for the documentation team, such as file renaming, data extraction from documents, and generating summary reports. This helped reduce manual effort and minimize human error.',
                icon: 'code'
            },
            {
                title: 'Agile Team Collaboration',
                description: 'Actively participated in daily stand-ups and sprint planning meetings for two different project teams. Gained firsthand insight into the Agile development lifecycle, from requirements gathering to deployment and retrospective.',
                icon: 'users'
            },
        ]
    }
];

export const contactInfo = [
    { icon: '📧', label: 'Email', value: 'princesher321@gmail.com', detail: 'Usually respond within 24 hours', color: 'text-green-400', link: 'mailto:princesher321@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/princesherathiya', detail: 'Professional networking', color: 'text-blue-400', link: 'https://www.linkedin.com/in/princesherathiya/' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/Aicodebyprince', detail: 'Check out my code', color: 'text-purple-400', link: 'https://github.com/Aicodebyprince' },
];

export const journeyData = [
    {
        college: "Mithibai College",
        degree: "MSc in Computer Science",
        period: "2022 - 2024",
        icon: React.createElement(GraduationCap),
        description: "Specialized in advanced computer science topics, with a focus on mobile application development and AI.",
        path: "/mithibai-journey",
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
    },
    {
        college: "RMC College",
        degree: "BSc in Information Technology",
        period: "2019 - 2022",
        icon: React.createElement(GraduationCap),
        description: "Built a strong foundation in IT, covering core concepts of programming, databases, and networking.",
        path: "/rmc-journey",
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
    },
    {
        college: "Shri T.P. Bhatiya College",
        degree: "HSC - Science",
        period: "2017 - 2019",
        icon: React.createElement(School),
        description: "Completed higher secondary education in Science, developing a keen interest in technology and computing during this period.",
        path: "",
        highlights: []
    },
    {
        college: "St. Jerome Convent High School",
        degree: "SSC",
        period: "Until 2017",
        icon: React.createElement(School),
        description: "Laid the foundational stones of my academic and personal growth, developing leadership and teamwork skills.",
        path: "",
        highlights: []
    }
];

export const hackathons = [
    {
        name: "Innovate AI 2024",
        date: "April 2024",
        project: "HealthGuard - AI-Powered Diagnosis",
        description: "Developed a Flutter app that uses a custom-trained model to analyze medical images and provide preliminary diagnoses for common skin conditions.",
        outcome: "Top 5 Finalist",
        tags: ["Flutter", "TensorFlow Lite", "AI", "Healthcare"],
        link: "#"
    },
    {
        name: "Fintech Future Hack",
        date: "September 2023",
        project: "Budget Buddy",
        description: "A mobile application designed to simplify personal finance management through gamification and AI-powered spending insights.",
        outcome: "Best UI/UX Award",
        tags: ["Flutter", "Firebase", "Figma", "Fintech"],
        link: "#"
    },
    {
        name: "Intra-College Code Clash",
        date: "March 2022",
        project: "QuickQueue - Campus Cafeteria System",
        description: "A web-based system to allow students to pre-order meals from the campus cafeteria, reducing wait times and improving efficiency.",
        outcome: "1st Place Winner",
        tags: ["Django", "Python", "JavaScript", "Web"],
        link: "#"
    }
];

export const problemSolving = [
    {
        platform: "LeetCode",
        stat: "150+ Problems Solved",
        description: "Consistently solving problems across various difficulty levels, focusing on data structures and algorithms to improve efficiency and code quality.",
        link: "#",
        tags: ["Algorithms", "Data Structures", "Hard", "Medium"]
    },
    {
        platform: "HackerRank",
        stat: "5-Star Gold Badge",
        description: "Achieved a 5-star rating in the problem-solving domain, demonstrating proficiency in logical reasoning and implementation.",
        link: "#",
        tags: ["Problem Solving", "Python", "Java", "SQL"]
    },
    {
        platform: "Codeforces",
        stat: "Pupil Rating",
        description: "Regularly participate in competitive programming contests, tackling complex challenges under time constraints to sharpen my skills.",
        link: "#",
        tags: ["Competitive Programming", "Math", "Algorithms"]
    }
];
