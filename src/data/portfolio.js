import project1 from '../assets/projects/project-1.svg'
import project2 from '../assets/projects/project-2.svg'
import project3 from '../assets/projects/project-3.svg'
import project4 from '../assets/projects/project-4.svg'

export const site = {
  name: 'Vaibhav Jagtap',
  role: 'Full Stack Web Developer (Fresher)',
  intro:
    'I build fast, accessible web apps with clean UI and strong fundamentals. Always learning, always shipping.',
  location: 'India',
  email: 'vaibhavjagtap145@gmail.com',
  githubUsername: 'vjagtapdev',
  resumeUrl: 'https://example.com/resume.pdf',
  socials: {
    github: 'https://github.com/vjagtapdev',
    linkedin: 'https://www.linkedin.com/in/vaibhav-jagtap-b998b7244/',
    leetcode: 'https://leetcode.com/',
  },
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'approach', label: 'My Approach' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export const skills = {
  frontend: [
    { label: 'React', icon: 'FaReact' },
    { label: 'JavaScript', icon: 'FaJs' },
    { label: 'HTML', icon: 'FaHtml5' },
    { label: 'CSS', icon: 'FaCss3Alt' },
    { label: 'Tailwind', icon: 'SiTailwindcss' },
  ],
  backend: [
    { label: 'Node.js', icon: 'FaNodeJs' },
    { label: 'Express', icon: 'SiExpress' },
    { label: 'MongoDB', icon: 'SiMongodb' },
    { label: 'REST APIs', icon: 'HiOutlineCloud' },
  ],
  tools: [
    { label: 'Git', icon: 'FaGitAlt' },
    { label: 'GitHub', icon: 'SiGithub' },
    { label: 'Vercel', icon: 'SiVercel' },
    { label: 'VS Code', icon: 'FaCode' },
  ],
}

export const projects = [
  {
    featured: true,
    title: 'MERN Blog Platform',
    description:
      'A full-stack blog app with authentication, CRUD posts, rich UI, and responsive layouts.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: project1,
    links: {
      github: 'https://github.com/',
      live: 'https://example.com',
    },
  },
  {
    title: 'Job Tracker Dashboard',
    description:
      'Track applications with filters, analytics, and a clean dashboard experience.',
    tech: ['React', 'Tailwind', 'Charts'],
    image: project2,
    links: {
      github: 'https://github.com/',
      live: 'https://example.com',
    },
  },
  {
    title: 'E-commerce UI + Cart',
    description:
      'Modern storefront UI with product listing, cart interactions, and smooth animations.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    image: project3,
    links: {
      github: 'https://github.com/',
      live: 'https://example.com',
    },
  },
  {
    title: 'Portfolio Website',
    description:
      'A performance-focused personal site with scroll animations, projects, and contact form.',
    tech: ['React', 'Vite', 'Tailwind'],
    image: project4,
    links: {
      github: 'https://github.com/',
      live: 'https://example.com',
    },
  },
]

export const timeline = [
  {
    title: 'Full Stack Learning Journey',
    period: '2024 — Present',
    points: [
      'Built multiple React + Node projects with clean architecture and reusable components.',
      'Focused on accessibility, responsiveness, and performance fundamentals.',
    ],
  },
  {
    title: 'DSA + Problem Solving',
    period: '2024 — Present',
    points: [
      'Consistent practice on LeetCode/HackerRank to improve problem-solving and patterns.',
      'Emphasis on clean solutions, edge cases, and complexity awareness.',
    ],
  },
  {
    title: 'Achievements',
    period: 'Ongoing',
    points: [
      'Active profiles on LeetCode and HackerRank (problem solving, SQL, and JS).',
      'Deployed projects with Vercel and GitHub Pages.',
    ],
  },
]

