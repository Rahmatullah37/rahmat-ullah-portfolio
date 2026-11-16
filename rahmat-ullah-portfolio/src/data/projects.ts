import type { Project } from '../types'



export const projects: Project[] = [
  {
  id: 'afis',
  title: 'AFIS: Biometric Fingerprint Identification System',
  description: 'An automated fingerprint identification system for enrolling and matching individuals against a database.',
  technologies: ['C#', '.NET', 'SQL Server'],
  image: '/images/projects/afis.jpg',
},
  {
    id: 'human-detection',
    title: 'Human Detection System',
    description: 'A computer-vision system that detects people in images or video.',
    technologies: ['Python', 'Machine Learning'],
    image: '/images/projects/human-detection-system.jpg',
  },
  {
    id: 'quetta-safe-city',
    title: 'Safe City Project',
    description: 'Software work on a public-safety and city-monitoring initiative for Quetta.',
    technologies: ['.NET', 'SQL Server'],
    image: '/images/projects/safe-city.jpg',

  },
  {
    id: 'online-tollbooth',
    title: 'Online Tollbooth Management System',
    description: 'A web system for managing toll collection, vehicles and records online. ',
    technologies: ['ASP.NET Core', 'Entity Framework Core', 'SQL Server'],
    image: '/images/projects/online-both.jpg',
  },
  {
    id: 'nfr-research',
    title: 'Context-Aware Elicitation and Automated Validation of NFRs',
    description: 'MS research on eliciting non-functional requirements in context and validating them automatically with LLM-as-a-Judge.',
    technologies: ['Python', 'LLMs', 'Requirements Engineering'],
    image: '/images/projects/context-aware.png',
    isResearch: true
  },
]