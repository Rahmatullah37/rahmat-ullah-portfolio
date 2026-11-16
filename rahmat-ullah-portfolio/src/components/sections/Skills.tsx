import { skills } from '../../data/skills'
import Section from '../common/Section'

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid gap-10 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-lg font-bold">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => <li key={skill} className="rounded-full border border-line bg-panel px-4 py-1.5 text-sm transition-colors hover:border-lapis hover:text-lapis">{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
