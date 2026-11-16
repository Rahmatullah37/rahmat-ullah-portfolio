import { projects } from '../../data/projects'
import Section from '../common/Section'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <Section id="projects" title="Selected work" intro="Featured projects. Descriptions and links are placeholders until you fill them in.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} isWide={index === 0} />)}
      </div>
    </Section>
  )
}
