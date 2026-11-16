import { ExternalLink as ExternalIcon, FlaskConical, Github } from 'lucide-react'
import type { Project } from '../../types'
import ExternalLink from '../common/ExternalLink'
import HighlightedText from '../common/HighlightedText'

export default function ProjectCard({ project, isWide }: { project: Project; isWide: boolean }) {
  return (
    <article className={`card group flex flex-col overflow-hidden rounded-3xl ${isWide ? 'md:col-span-2' : ''}`}>
      {project.image ? (
        <img src={project.image} alt={project.title} loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="flex h-40 items-center justify-center bg-gradient-to-br from-line/50 to-panel text-sm text-mute" aria-hidden="true">
          Add a screenshot in src/data/projects.ts
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        {project.isResearch && <span className="mb-3 inline-flex items-center gap-1.5 text-sm text-lapis"><FlaskConical size={16} /> MS research</span>}
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 flex-1 text-mute"><HighlightedText text={project.description} /></p>
        <ul className="mt-5 flex flex-wrap gap-2 text-sm text-sand/80">
          {project.technologies.map((tech) => <li key={tech} className="rounded-md border border-line bg-ink/60 px-2.5 py-1">{tech}</li>)}
        </ul>
        <div className="mt-5 flex flex-wrap gap-5 text-sm">
          </div>
      </div>
    </article>
  )
}
