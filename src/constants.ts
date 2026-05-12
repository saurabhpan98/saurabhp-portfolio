import { Project, Experience, Education, Achievement, Service, BlogPost, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory and AI-powered recommendations.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Node.js', 'MongoDB', 'Redis'],
    github: 'https://github.com/saurabhpan98',
  },
  {
    id: '2',
    title: 'AI Portfolio Builder',
    description: 'An automated tool to generate developer portfolios based on GitHub activity.',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['TypeScript', 'Gemini API', 'Next.js'],
    github: 'https://github.com/saurabhpan98',
  },
  {
    id: '3',
    title: 'Crypto Dashboard',
    description: 'Real-time cryptocurrency tracking with technical analysis charts and news.',
    image: 'https://picsum.photos/seed/crypto/800/600',
    tags: ['D3.js', 'WebSockets', 'Tailwind'],
    github: 'https://github.com/saurabhpan98',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Senior Software Engineer',
    period: '2021 - Present',
    description: [
      'Leading a team of 5 developers in building scalable cloud architectures.',
      'Optimized database queries reducing latency by 40%.',
      'Implemented microservices using Docker and Kubernetes.'
    ]
  },
  {
    company: 'Innovative Labs',
    role: 'Full Stack Developer',
    period: '2020 - 2021',
    description: [
      'Developed and maintained multiple client projects using React and Node.js.',
      'Integrated third-party APIs for payment and authentication.'
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: 'Delhi Technological University (DTU)',
    degree: 'B.Tech in Computer Engineering',
    period: '2017 - 2021',
    details: 'Graduated with first division. Specialized in Distributed Systems and AI.'
  },
  {
    institution: 'Kendriya Vidyalaya (KV)',
    degree: 'Schooling (K-12)',
    period: '2002 - 2014',
    details: 'Excelled in Science and Mathematics. Active member of the school cricket team.'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Outstanding Performance Scholarship',
    issuer: 'Delhi Technological University (DTU)',
    description: 'Awarded for being in the top branch performance at DTU.'
  },
  {
    title: 'Prime Minister Scholarship',
    issuer: 'Central Government of India',
    description: 'Awarded for exceptional performance in 12th board examinations.'
  },
  {
    title: 'Cricket Under-14 Award',
    issuer: 'Chattisgarh Cricket Team',
    description: 'Performance award for outstanding contribution to the Under-14 state team.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: 'Building responsive, high-performance web applications using modern stacks.',
    icon: 'Code2'
  },
  {
    title: 'AI Integration',
    description: 'Embedding intelligent features into existing applications using LLMs.',
    icon: 'Brain'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces focused on experience.',
    icon: 'Palette'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt: 'Exploring how AI and edge computing are changing the way we build for the web.',
    date: 'May 10, 2026',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Mastering TypeScript Utilities',
    excerpt: 'Advanced patterns and utility types to make your code more robust.',
    date: 'April 22, 2026',
    readTime: '8 min read'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'John Doe',
    role: 'CTO @ StartupX',
    content: 'Saurabh is an exceptional engineer. His ability to tackle complex problems is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=john'
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    content: 'A visionary developer who understands both technical constraints and user needs.',
    avatar: 'https://i.pravatar.cc/150?u=jane'
  },
  {
    name: 'Alex Rivera',
    role: 'Founder @ DevFlow',
    content: 'The most reliable full-stack architect I have worked with. His attention to detail in system design saved us months of rework.',
    avatar: 'https://i.pravatar.cc/150?u=alex'
  },
  {
    name: 'Sarah Chen',
    role: 'Senior UI/UX Architect',
    content: 'Working with Saurabh is a breath of fresh air. He bridges the gap between design and engineering effortlessly.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Michael K.',
    role: 'Tech Lead @ Prisma Solutions',
    content: 'Exceptional capability in integrating AI into production environments. A true asset to any high-stakes project.',
    avatar: 'https://i.pravatar.cc/150?u=michael'
  },
  {
    name: 'Emily Watson',
    role: 'CEO @ CreativePulse',
    content: 'Saurabh translated our complex requirements into a seamless user experience. Highly recommended for full-stack projects.',
    avatar: 'https://i.pravatar.cc/150?u=emily'
  },
  {
    name: 'David Miller',
    role: 'Senior Backend Engineer',
    content: 'Very impressed with his clean code and knowledge of distributed systems. A great collaborator.',
    avatar: 'https://i.pravatar.cc/150?u=david'
  }
];
