import { Course } from '../types';
import { WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const COURSES: Course[] = [
  {
    id: 'full-stack-ai',
    title: 'Full Stack Development with AI Tools',
    badge: 'Popular & Practical',
    shortDescription:
      'Learn frontend development, backend development, databases, APIs, AI-assisted coding, software testing fundamentals, Git, GitHub and deployment through practical sessions and projects.',
    fullDescription:
      'A comprehensive, career-oriented online training program designed for students and aspiring developers. You will master both frontend and backend engineering while integrating modern AI-assisted workflows and software testing practices to build, test, and deploy production-ready web applications.',
    duration: '1 Month',
    mode: 'Online',
    fee: 5999,
    feeDisplay: '₹5,999',
    internshipAvailable: true,
    internshipFee: 3000,
    highlights: [
      'Full Stack Frontend + Backend + Database',
      'Modern AI-Assisted Development Workflows',
      'Software Testing Fundamentals & Bug Reporting',
      'Git, GitHub & Live Cloud Deployment',
      '2 Comprehensive Hands-on Real-world Projects',
      'Optional 1-Month Practical Internship (₹3,000)',
    ],
    prerequisites:
      'Basic computer literacy and a passion to learn. Prior programming knowledge is helpful but not mandatory—we start from the web fundamentals.',
    whoIsThisFor: [
      'College students seeking hands-on industry exposure',
      'Freshers and beginners wanting to break into tech',
      'Career switchers looking for structured full stack guidance',
      'Developers wishing to add modern AI tooling and testing to their skill set',
    ],
    curriculum: [
      {
        id: 1,
        title: 'Module 1 — Web Development Fundamentals',
        subtitle: 'HTML5, CSS3 & Core JavaScript',
        topics: [
          'HTML5 semantic markup and structure',
          'CSS3 styling, Flexbox and CSS Grid layout systems',
          'Responsive Web Design for mobile, tablet and desktop',
          'JavaScript Fundamentals: variables, data types, functions, arrays and DOM manipulation',
        ],
      },
      {
        id: 2,
        title: 'Module 2 — Frontend Development',
        subtitle: 'Modern React.js Applications',
        topics: [
          'React.js core principles and Virtual DOM',
          'Components, Props and reusable UI architecture',
          'State management and Event handling in React',
          'Forms, Controlled Components and REST API integration (fetch/axios)',
          'Crafting responsive and accessible user interfaces',
        ],
      },
      {
        id: 3,
        title: 'Module 3 — Backend Development',
        subtitle: 'Node.js, Express & REST APIs',
        topics: [
          'Node.js runtime environment and asynchronous JavaScript',
          'Express.js web application framework',
          'Designing and building scalable REST APIs',
          'Authentication fundamentals (Tokens & Sessions)',
          'Backend request validation, error handling and status codes',
        ],
      },
      {
        id: 4,
        title: 'Module 4 — Database',
        subtitle: 'Data Modeling & Persistence',
        topics: [
          'Database fundamentals and data persistence concepts',
          'MongoDB or PostgreSQL setup and configuration',
          'CRUD operations (Create, Read, Update, Delete)',
          'Database integration with Node/Express backend services',
        ],
      },
      {
        id: 5,
        title: 'Module 5 — AI Tools for Developers',
        subtitle: 'Productivity & Next-Gen Workflows',
        topics: [
          'AI-Assisted coding techniques and prompt engineering for developers',
          'Using ChatGPT and AI coding assistants for learning and debugging complex errors',
          'AI-driven code review and optimization strategies',
          'AI-assisted technical documentation and README generation',
          'Responsible and secure AI usage in software development',
        ],
      },
      {
        id: 6,
        title: 'Module 6 — Software Testing',
        subtitle: 'Quality Assurance & Automation Basics',
        topics: [
          'Software testing fundamentals and QA mindset',
          'Manual testing methodologies and test strategies',
          'Writing comprehensive test scenarios and test cases',
          'Functional testing, smoke testing and sanity testing',
          'Regression testing and defect lifecycle management',
          'Effective bug reporting with reproducible steps and evidence',
          'Introduction to test automation with Selenium and JUnit',
        ],
      },
      {
        id: 7,
        title: 'Module 7 — GitHub and Deployment',
        subtitle: 'Version Control & Live Shipping',
        topics: [
          'Git fundamentals: commits, branching, merging and resolving conflicts',
          'GitHub repository management and collaborative pull requests',
          'Environment variables and sensitive key security',
          'Website deployment on modern cloud platforms (Vercel, Netlify, Render)',
          'Basic production debugging and live site troubleshooting',
        ],
      },
      {
        id: 8,
        title: 'Module 8 — Practical Projects',
        subtitle: 'Portfolio-Worthy Real Applications',
        topics: [
          'Project 1: Responsive Personal Portfolio Website showcasing projects, resume and contact forms',
          'Project 2: Full Stack Application featuring database persistence, secure API integration, responsive UI and end-to-end testing verification',
        ],
      },
    ],
    inquiryMessage: WHATSAPP_MESSAGES.fullStack,
  },
  {
    id: 'manual-software-testing',
    title: 'Manual Software Testing',
    badge: 'Core QA Track',
    shortDescription:
      'Master the principles of software quality assurance, SDLC/STLC phases, writing test scenarios, defect life cycles, bug reporting, and API testing essentials.',
    fullDescription:
      'Gain a solid grounding in manual software testing methodologies. This training covers industry QA processes from requirement analysis through test execution and defect reporting, preparing you for real-world software testing and QA analyst responsibilities.',
    duration: 'Contact us for details',
    mode: 'Online',
    fee: null,
    feeDisplay: 'Contact us for details',
    internshipAvailable: true,
    internshipFee: null,
    highlights: [
      'Software Testing Fundamentals & QA Mindset',
      'SDLC & STLC Methodologies',
      'Writing Test Scenarios & Detailed Test Cases',
      'Functional, Smoke, Sanity & Regression Testing',
      'Defect Life Cycle & Industry-Standard Bug Reporting',
      'Introduction to Postman & API Testing',
    ],
    prerequisites:
      'Basic computer literacy and analytical thinking. No previous coding experience is strictly required.',
    whoIsThisFor: [
      'Graduates and students aiming for a software testing career',
      'Career starters wanting to enter the IT industry via QA',
      'Developers wanting to build testing discipline into their code',
    ],
    curriculum: [
      {
        id: 1,
        title: 'Module 1 — Testing Fundamentals & Models',
        subtitle: 'QA Principles & Methodologies',
        topics: [
          'Software testing fundamentals, principles and objectives',
          'Software Development Life Cycle (SDLC): Waterfall, Agile, Scrum',
          'Software Testing Life Cycle (STLC) step-by-step phases',
          'Verification vs. Validation and Quality Control vs. Quality Assurance',
        ],
      },
      {
        id: 2,
        title: 'Module 2 — Test Design & Documentation',
        subtitle: 'Scenarios, Cases & Matrix',
        topics: [
          'Understanding requirements and specification analysis',
          'Test scenario identification and scoping',
          'Writing professional test cases with preconditions, steps, test data and expected results',
          'Traceability matrix and test execution tracking',
        ],
      },
      {
        id: 3,
        title: 'Module 3 — Types of Testing & Techniques',
        subtitle: 'Execution Strategies',
        topics: [
          'Functional testing techniques: boundary value analysis & equivalence partitioning',
          'Smoke testing and sanity testing execution',
          'Regression testing and re-testing procedures',
          'Exploratory testing and ad-hoc testing best practices',
        ],
      },
      {
        id: 4,
        title: 'Module 4 — Defect Management & API Testing',
        subtitle: 'Bug Life Cycle & Tools',
        topics: [
          'Defect life cycle from discovery to closure',
          'Writing clear, high-impact bug reports with severity and priority',
          'Bug logging tools and documentation practices',
          'Introduction to API testing fundamentals using Postman',
        ],
      },
    ],
    inquiryMessage: WHATSAPP_MESSAGES.manualTesting,
  },
];
