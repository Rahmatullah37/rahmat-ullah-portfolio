export interface Profile {
  fullName: string
  initials: string
  eyebrow: string
  headline: string
  tagline: string
  biography: string[]
  highlights: string[]
  /** Path inside /public, e.g. /images/profile.jpg */
  photo: string
  /** CSS object-position for the portrait, e.g. "center 20%" or "center top" */
  photoPosition?: string
  /** Path inside /public, e.g. /resume.pdf */
  resumeUrl: string
}

export interface NavItem { id: string; label: string }

export interface EducationEntry { degree: string; institution: string; status: string }

export interface ExperienceEntry {
  role: string
  organization: string
  period?: string
  description: string
}

export interface SkillCategory { category: string; skills: string[] }

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  /** Optional screenshot path inside /public, e.g. /images/projects/afis.jpg */
  image?: string
  githubUrl: string
  demoUrl: string
  isResearch?: boolean
}

export interface Certification { name: string; issuer?: string; year?: string; url?: string }
export interface Achievement { title: string; description?: string }

export type SocialPlatform = 'email' | 'linkedin' | 'github' | 'facebook' | 'scholar'
export interface SocialLink {
  platform: SocialPlatform
  label: string
  /** A URL, or an email address when platform is "email" */
  value: string
}

export interface Service { title: string; description: string }
export interface FaqItem { question: string; answer: string }
export interface Publication { title: string; venue: string; year?: string; url?: string }
export interface Research { summary: string; publications: Publication[] }
export interface Stat { value: string; label: string }
