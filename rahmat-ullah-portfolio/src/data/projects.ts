import type { Project } from '../types'

const LINK_TODO = '[INSERT LINK]'

export const projects: Project[] = [
  { id: 'afis', title: 'AFIS: Biometric Fingerprint Identification System', description: 'An automated fingerprint identification system for enrolling and matching individuals against a database. [PLACEHOLDER: refine with your role and features]', technologies: ['C#', '.NET', 'SQL Server'], githubUrl: LINK_TODO, demoUrl: LINK_TODO },
  { id: 'human-detection', title: 'Human Detection System', description: 'A computer-vision system that detects people in images or video. [PLACEHOLDER: refine]', technologies: ['Python', 'Machine Learning'], githubUrl: LINK_TODO, demoUrl: LINK_TODO },
  { id: 'quetta-safe-city', title: 'Quetta Safe City Project', description: 'Software work on a public-safety and city-monitoring initiative for Quetta. [PLACEHOLDER: refine]', technologies: ['.NET', 'SQL Server'], githubUrl: LINK_TODO, demoUrl: LINK_TODO },
  { id: 'online-tollbooth', title: 'Online Tollbooth Management System', description: 'A web system for managing toll collection, vehicles and records online. [PLACEHOLDER: refine]', technologies: ['ASP.NET Core', 'Entity Framework Core', 'SQL Server'], githubUrl: LINK_TODO, demoUrl: LINK_TODO },
  { id: 'nfr-research', title: 'Context-Aware Elicitation and Automated Validation of NFRs', description: 'MS research on eliciting non-functional requirements in context and validating them automatically with LLM-as-a-Judge.', technologies: ['Python', 'LLMs', 'Requirements Engineering'], githubUrl: LINK_TODO, demoUrl: LINK_TODO, isResearch: true },
]
