

import { GraduationCap, School, Code, Layers, Paintbrush, Puzzle, UserPlus, MessageSquare, Bot, Eye, Users, Shield, User, Workflow, CheckCircle, Target, Lightbulb, Package, AlertTriangle, Image as ImageIcon, Sparkles, FileQuestion, BadgeCheck, BookOpen, GitBranch, FileText, Landmark, Banknote } from 'lucide-react';
import React from 'react';

export type Screenshot = {
    url: string;
    dataAiHint: string;
    caption?: string;
};

export type CaseStudyBlock = 
    | { type: 'heading'; level: 2 | 3 | 4; icon?: React.ElementType; iconColor?: string; text: string; }
    | { type: 'paragraph'; text: string; }
    | { type: 'list'; items: string[]; }
    | { type: 'image'; url: string; dataAiHint: string; caption?: string; }
    | { type: 'image_grid'; images: Screenshot[] };


export type ScreenshotsByRole = {
    role: 'visitors' | 'students' | 'teachers' | 'admins' | 'signup';
    title: string;
    description: string;
    screenshots: Screenshot[];
}

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
    screenshotsByRole?: ScreenshotsByRole[];
    features?: string[];
    problem?: string;
    solution?: string;
    challenges?: string[];
    projectOverview?: string;
    goal?: string[];
    techStack?: { name: string; description: string }[];
    workflow?: { 
        description: string,
        breakdown: string[]
    };
    screenshots?: Screenshot[];
    conclusion?: string;
    futureImprovements?: string[];
    caseStudy?: CaseStudyBlock[];
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
        description: 'A comprehensive mobile platform designed to streamline communication and manage academic information within a college environment.',
        category: 'Mobile App / Full-Stack',
        shortTitle: 'College App',
        shortDescription: 'Streamlined campus communication',
        githubUrl: 'https://github.com/Aicodebyprince/College-Management-App',
        liveUrl: '',
        tags: ['Flutter', 'Firebase', 'State Management', 'UX/UI', 'Real-time DB'],
        stat: 'Full-Stack Campus Platform',
        problem: 'Traditional colleges often suffer from scattered information, poor communication between departments, and manual, time-consuming processes. Students and faculty struggle to keep track of schedules, announcements, and academic progress in one unified place.',
        solution: 'I developed a centralized mobile application using Flutter and Firebase that serves as a single source of truth for the entire campus. The app provides role-based access for students, teachers, visitors and admins, offering tailored dashboards with real-time information and interactive features.',
        screenshotsByRole: [
            {
                role: 'visitors',
                title: 'For the Visitors',
                description: 'A welcoming and informative experience for prospective students and guests, showcasing campus life and simplifying inquiries.',
                screenshots: [
                    { url: '/images/Visitor-1.png', dataAiHint: 'mobile app screen' },
                    { url: '/images/Visitor-2.png', dataAiHint: 'mobile app screen' },
                    { url: '/images/Visitor-3.png', dataAiHint: 'mobile app screen' },
                    { url: '/images/Visitor-4.png', dataAiHint: 'mobile app screen' },
                ]
            },
            {
                role: 'signup',
                title: 'For the Signup',
                description: 'A simple and secure signup process to onboard new users to the platform.',
                screenshots: [
                    { url: '/images/Sign-1.jpg', dataAiHint: 'signup screen' },
                    { url: '/images/Sign-2.jpg', dataAiHint: 'signup form' },
                    { url: '/images/Sign-3.jpg', dataAiHint: 'verification screen' },
                    { url: '/images/Sign-4.jpg', dataAiHint: 'profile setup' },
                ]
            },
            {
                role: 'students',
                title: 'For the Students',
                description: 'A personalized dashboard that puts attendance, schedules, results, and communication right at their fingertips.',
                screenshots: [
                    { url: '/images/Student-1.png', dataAiHint: 'student dashboard' },
                    { url: '/images/Student-2.png', dataAiHint: 'student dashboard' },
                    { url: '/images/Student-3.png', dataAiHint: 'attendance tracker' },
                    { url: '/images/Student-4.png', dataAiHint: 'exam results' },
                    { url: '/images/Student-5.png', dataAiHint: 'class schedule' },
                    { url: '/images/Student-6.jpg', dataAiHint: 'chat interface' },
                    { url: '/images/Student-7.jpg', dataAiHint: 'student profile' },
                    { url: '/images/Student-8.jpg', dataAiHint: 'student profile' },
                ]
            },
            {
                role: 'teachers',
                title: 'For the Teachers',
                description: 'Powerful tools for educators to manage classes, track student progress, and communicate effectively.',
                screenshots: [
                    { url: '/images/Teacher-1.jpg', dataAiHint: 'teacher dashboard' },
                    { url: '/images/Teacher-2.jpg', dataAiHint: 'take attendance' },
                    { url: '/images/Teacher-3.jpg', dataAiHint: 'upload marks' },
                    { url: '/images/Teacher-4.jpg', dataAiHint: 'send notification' },
                ]
            },
            {
                role: 'admins',
                title: 'For the Admins',
                description: 'A comprehensive overview of campus operations with tools to manage users, send announcements, and monitor analytics.',
                screenshots: [
                    { url: '/images/Admin-2.jpg', dataAiHint: 'admin dashboard' },
                    { url: '/images/Admin-3.jpg', dataAiHint: 'user management' },
                    { url: '/images/Admin-4.jpg', dataAiHint: 'analytics charts' },
                ]
            }
        ]
    },
    {
        icon: 'automation',
        title: 'PPT Automation for CMMI Kickoff',
        slug: 'ppt-automation',
        description: 'A web-based automated presentation generator that creates structured, professional CMMI kickoff decks.',
        category: 'Web App / Automation',
        shortTitle: 'PPT Automation',
        shortDescription: 'Automated CMMI Kickoff Decks',
        githubUrl: '#',
        liveUrl: 'https://pptautomation-rho.vercel.app',
        tags: ['Next.js', 'Vercel', 'Automation', 'Productivity'],
        stat: 'Reduced prep time by 75%',
        caseStudy: [
            { type: 'heading', level: 2, icon: FileQuestion, text: 'Background' },
            { type: 'paragraph', text: 'CMMI (Capability Maturity Model Integration) is widely used by organizations to improve processes and achieve higher maturity levels. The kickoff meeting is the most critical step—it sets direction, defines roles, aligns teams, and builds confidence with stakeholders.' },
            { type: 'paragraph', text: 'Traditionally, preparing kickoff presentations is:' },
            { type: 'list', items: [
                'Time-consuming – Teams create slides manually for every project.',
                'Inconsistent – Different formats lead to missing agenda points.',
                'Error-prone – Last-minute edits reduce professionalism.'
            ]},
            { type: 'paragraph', text: 'There was a clear need for a standardized, automated solution to ensure every kickoff is structured, professional, and efficient.'},
            { type: 'heading', level: 2, icon: Target, text: 'The Challenge' },
            { type: 'list', items: [
                'Manual slide preparation wasted 3–4 hours per project.',
                'Teams often forgot critical sections like Roles, Next Steps, or Communication.',
                'Lack of consistency created confusion across different projects.',
                'Clients perceived unprofessional and misaligned presentations.'
            ]},
            { type: 'heading', level: 2, icon: Lightbulb, text: 'The Solution – PPT Automation Web App' },
            { type: 'paragraph', text: 'I designed and built a web-based automated presentation generator that creates structured, professional CMMI kickoff decks.' },
            { type: 'heading', level: 3, icon: Sparkles, text: 'Key Features:' },
            { type: 'list', items: [
                'Pre-defined agenda structure: Scope, Practice Areas, Roles, Communication, Next Steps, Q&A.',
                'Reusable template for multiple clients/projects.',
                'One-click generation of slides—no need to start from scratch.',
                'Clean, professional design with consistency in formatting and flow.',
                'Scalable – adaptable to Agile, Standard, or Consulting approaches.'
            ]},
            { type: 'heading', level: 2, icon: User, text: 'My Role & Skills Used' },
            { type: 'list', items: [
                'Problem Analysis → Identified inefficiencies in kickoff preparation.',
                'UI/UX Design → Created a minimal, structured layout for clarity.',
                'Full-Stack Development → Built on Next.js & Vercel for fast, accessible deployment.',
                'Automation & Productivity → Reduced repetitive manual work with automation logic.'
            ]},
            { type: 'heading', level: 2, icon: BadgeCheck, text: 'Impact & Results' },
            { type: 'list', items: [
                '75% time saved: From 3–4 hours of slide creation to under 1 hour.',
                '100% consistency: Every kickoff covers all critical sections.',
                'Professional client experience: Cleaner, standardized decks improved trust.',
                'Scalable adoption: Can be reused across multiple companies and projects.'
            ]},
             { type: 'heading', level: 2, icon: CheckCircle, text: 'Why It Matters' },
            { type: 'paragraph', text: 'This project shows my ability to:' },
            { type: 'list', items: [
                'Identify real-world inefficiencies in corporate workflows.',
                'Design and build practical automation tools.',
                'Deliver solutions that combine technical excellence with business impact.'
            ]},
            { type: 'paragraph', text: 'It’s not just a template—it’s a strategic enabler for organizations running CMMI or structured consulting programs.'}
        ]
    },
    {
        icon: 'chatbot',
        title: 'AI WhatsApp Business Chatbot',
        slug: 'whatsapp-chatbot',
        description: 'An AI-driven chatbot using n8n and Gemini to automate customer interactions, order management, and FAQs for small businesses on WhatsApp.',
        category: 'AI / Automation',
        shortTitle: 'WhatsApp Chatbot',
        shortDescription: 'AI-powered business automation',
        githubUrl: '#',
        liveUrl: '',
        tags: ['AI', 'Gemini', 'n8n', 'WhatsApp API', 'Automation'],
        stat: 'Real-time Business Automation',
        caseStudy: [
            { type: 'heading', level: 2, text: 'Project Overview', icon: Package },
            { type: 'paragraph', text: "This project is an AI-driven chatbot designed to automate customer interactions for a small business via WhatsApp. The bot handles customer inquiries, manages orders, and answers frequently asked questions in real-time. By leveraging the power of n8n for workflow automation and Google's Gemini AI for natural language processing, this solution helps businesses improve efficiency, reduce response times, and prevent missed sales opportunities, especially those that rely heavily on WhatsApp for customer communication." },
            { type: 'image_grid', images: [
                { url: '/images/Chatbot/SS-1.png', dataAiHint: 'chatbot conversation', caption: 'Live chat example with the AI bot.' },
                { url: '/images/Chatbot/SS-2.png', dataAiHint: 'chatbot conversation', caption: 'The bot handling an order request.' }
            ]},
            { type: 'heading', level: 2, text: 'The Goal', icon: Target },
            { type: 'paragraph', text: "For many small businesses, especially in the restaurant or retail sector, WhatsApp is a primary channel for taking orders and answering customer questions. Managing this manually can be overwhelming, leading to slow responses and lost orders. The primary goal of this project was to build an intelligent, automated system that can:" },
            { type: 'list', items: [
                "Provide instant, 24/7 responses to customer messages.",
                "Intelligently answer questions about product inventory and FAQs.",
                "Accurately take customer orders and record them in a database.",
                "Maintain the context of a conversation to provide a natural, human-like interaction."
            ]},
            { type: 'heading', level: 2, text: 'Technologies & Tools', icon: Code },
            { type: 'paragraph', text: 'This project integrates several powerful tools to create a seamless automated workflow:' },
            { type: 'list', items: [
                "Workflow Automation: n8n.io (The core engine for connecting services and defining the bot's logic).",
                "AI & Language Model: Google Gemini (The \"brain\" of the bot, responsible for understanding and generating responses).",
                "Communication Channel: WhatsApp Business API (The platform for user interaction).",
                "API Configuration: Meta for Developers (To configure the WhatsApp Business App and get API credentials).",
                "Database: Google Sheets (Used to store and manage inventory, FAQs, and incoming orders)."
            ]},
            { type: 'heading', level: 2, text: 'System Architecture & Workflow', icon: Workflow },
            { type: 'paragraph', text: "The entire process is orchestrated within an n8n workflow. The workflow is triggered by an incoming message on WhatsApp and follows a logical sequence to process the message and send a reply." },
            { type: 'image', url: '/images/Chatbot/SS-3.png', dataAiHint: 'n8n workflow diagram', caption: 'The complete n8n workflow for the chatbot.' },
            { type: 'heading', level: 3, text: 'Workflow Breakdown' },
            { type: 'heading', level: 4, text: '1. WhatsApp Trigger' },
            { type: 'paragraph', text: 'The workflow starts when a user sends a message to the business\'s WhatsApp number. The WhatsApp Trigger node in n8n securely listens for these incoming messages.' },
            { type: 'image', url: '/images/Chatbot/SS-9.png', dataAiHint: 'meta api setup', caption: 'WhatsApp API Setup in the Meta for Developers portal.' },
            { type: 'heading', level: 4, text: '2. AI Agent (Gemini)' },
            { type: 'paragraph', text: "The message content is passed to the AI Agent node. This node is the core of the bot's intelligence." },
            { type: 'list', items: [
                "Chat Model (Gemini): The agent uses the Google Gemini model to understand the user's intent. A system prompt was configured to instruct the AI on its persona, rules (e.g., only sell items from inventory), and the name of the business.",
                "Simple Memory: To ensure conversations are natural, the agent is equipped with memory. It remembers the last 10 messages, allowing it to understand context (e.g., if a user says \"I'll take two,\" it knows what item they are referring to).",
                "Tools (Google Sheets): The agent is connected to three tools that allow it to interact with our Google Sheets database."
            ]},
            { type: 'image', url: '/images/Chatbot/SS-5.png', dataAiHint: 'ai agent configuration', caption: 'Configuring the Gemini AI Agent in n8n.' },
            { type: 'image', url: '/images/Chatbot/SS-6.png', dataAiHint: 'ai agent tool', caption: 'Setting up the \'Get Inventory\' tool.' },
            { type: 'image', url: '/images/Chatbot/SS-7.png', dataAiHint: 'ai agent tool', caption: 'Setting up the \'Post Order\' tool.' },
            { type: 'heading', level: 4, text: '3. Tool Execution' },
            { type: 'list', items: [
                "Get Inventory: If a user asks what is available, the AI uses this tool to read directly from the 'Inventory' sheet and provide an accurate list.",
                "Get FAQ: For questions like \"What are your hours?\" or \"Where are you located?\", this tool retrieves answers from the 'FAQ' sheet.",
                "Post Orders: When a user wants to place an order, this tool is triggered. The AI, as configured in the tool's prompt, knows to ask for necessary details (name, quantity, address) and then appends this information as a new row in the 'Orders' sheet."
            ]},
            { type: 'image', url: '/images/Chatbot/SS-4.png', dataAiHint: 'database spreadsheet', caption: 'The Google Sheet used for inventory and FAQs.' },
            { type: 'image', url: '/images/Chatbot/SS-8.png', dataAiHint: 'order spreadsheet', caption: 'Orders are automatically recorded in this sheet.' },
            { type: 'heading', level: 4, text: '4. Send Message (WhatsApp)' },
            { type: 'paragraph', text: "The final response generated by the AI Agent is passed to the Send Message node. This node sends the text back to the user on WhatsApp, completing the loop." },
            { type: 'heading', level: 2, text: 'Conclusion', icon: CheckCircle },
            { type: 'paragraph', text: "This project successfully demonstrates how modern AI and automation tools can be combined to create a practical and powerful solution for small businesses. The resulting WhatsApp chatbot is not only functional but also scalable. By simply updating the Google Sheet, a business owner can change menu items, update FAQs, and manage the bot's knowledge base without touching the core workflow." },
            { type: 'heading', level: 2, text: 'Future Improvements', icon: Sparkles },
            { type: 'list', items: [
                "Payment Integration: Connect the workflow to a payment gateway like Stripe to accept payments directly in the chat.",
                "Advanced Memory: Integrate a more persistent memory solution (like a database) to remember customer preferences across different conversations.",
                "Proactive Notifications: Add a feature to send order status updates (e.g., \"Your order is being prepared,\" \"Your order is out for delivery\")."
            ]}
        ]
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
        slug: 'helpful-vault',
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
        slug: 'library-recommender',
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
        slug: 'portfolio-website',
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
        slug: 'ecommerce-dashboard',
    },
];

export const designTemplates = [
  {
    title: "Modern SaaS Landing Page",
    description: "A clean and professional landing page template designed in Figma for a Software-as-a-Service product. Includes sections for features, pricing, and testimonials.",
    tags: ["Figma", "Web Design", "SaaS"],
    imageUrl: "/images/template-saas.png",
    dataAiHint: "website interface",
    link: "#"
  },
  {
    title: "Mobile Banking App UI Kit",
    description: "A comprehensive UI kit for a mobile banking application. Includes screens for login, dashboard, transfers, and transaction history.",
    tags: ["Figma", "Mobile UI", "Fintech"],
    imageUrl: "/images/template-banking.png",
    dataAiHint: "mobile app",
    link: "#"
  },
  {
    title: "Project Management Dashboard",
    description: "A dashboard template for a project management tool, focusing on clear data visualization for tasks, timelines, and team collaboration.",
    tags: ["Figma", "Dashboard", "UI/UX"],
    imageUrl: "/images/template-dashboard.png",
    dataAiHint: "dashboard analytics",
    link: "#"
  }
];

export type Experience = {
    role: string;
    company: string;
    slug: string;
    period: string;
    path: string;
    achievements: string[];
    details: CaseStudyBlock[];
};


export const experiences: Experience[] = [
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
            { type: 'heading', level: 2, icon: FileText, text: 'CMMI Level 3 Documentation' },
            { type: 'paragraph', text: 'Assisted the quality assurance team in preparing and organizing documentation required for CMMI Level 3 appraisal. This involved understanding, documenting, and refining existing development processes to meet international standards.' },
            { type: 'heading', level: 2, icon: Code, text: 'Process Automation Scripting' },
            { type: 'paragraph', text: 'Developed Python scripts to automate repetitive tasks for the documentation team, such as file renaming, data extraction from documents, and generating summary reports. This helped reduce manual effort and minimize human error.' },
            { type: 'heading', level: 2, icon: Users, text: 'Agile Team Collaboration' },
            { type: 'paragraph', text: 'Actively participated in daily stand-ups and sprint planning meetings for two different project teams. Gained firsthand insight into the Agile development lifecycle, from requirements gathering to deployment and retrospective.' },
            { type: 'heading', level: 2, icon: Banknote, text: 'Kudos & Recognition' },
            { type: 'paragraph', text: 'Received recognition for my proactive approach and contributions to the team.' },
            { type: 'image_grid', images: [
                { url: '/images/Experience/Kudos-1.png', dataAiHint: 'certificate award', caption: 'Certificate of Appreciation' },
                { url: '/images/Experience/Kudos-2.png', dataAiHint: 'certificate award', caption: 'Internship Completion Certificate' }
            ]}
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
        name: "AI for Good Hackathon",
        date: "Jun - Aug 2025",
        project: "Harnessing the power of AI for Positive Social Impact",
        description: "Participated in the AI for Good Hackathon, developing innovative AI solutions to address pressing social challenges.",
        outcome: "Completed",
        tags: ["AI", "Social Impact", "Python", "TensorFlow"],
        link: "#"
    },
    {
        name: "Bolt.new",
        date: "Completed",
        project: "AI-Powered E-commerce Solutions",
        description: "Participated in the Bolt.new hackathon to build innovative AI tools for e-commerce, focusing on personalization and automation.",
        outcome: "Completed",
        tags: ["AI", "E-commerce", "Personalization", "Automation"],
        link: "#"
    },
    {
        name: "Tech 4 Social Good",
        date: "Ongoing",
        project: "Build a solution that empowers learners",
        description: "Currently developing a solution to empower learners through technology.",
        outcome: "Draft Submission",
        tags: ["EdTech", "Social Good", "Flutter"],
        link: "#"
    },
    {
        name: "Code with Kiro Hackathon",
        date: "Ongoing",
        project: "Explore Kiro, an AI IDE",
        description: "A challenge for developers to explore Kiro, an AI IDE that works alongside you to turn ideas into production code with spec-driven development.",
        outcome: "In Progress",
        tags: ["AI", "Developer Tools", "IDE"],
        link: "#"
    },
    {
        name: "Hack 4 Humanity 2025",
        date: "Ongoing",
        project: "Shaping tomorrow with todays tech",
        description: "Working on innovative solutions to shape a better future using modern technology.",
        outcome: "In Progress",
        tags: ["Innovation", "Future Tech", "Web3"],
        link: "#"
    },
    {
        name: "Smart India Hackathon (SIH)",
        date: "Upcoming",
        project: "Working on a proposal for SIH",
        description: "Currently developing a project proposal for the prestigious Smart India Hackathon, aiming to solve real-world problems with technology.",
        outcome: "Preparing",
        tags: ["Problem Solving", "Innovation", "National Level"],
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
