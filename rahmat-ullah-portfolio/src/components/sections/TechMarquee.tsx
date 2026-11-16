import { skills } from '../../data/skills'

export default function TechMarquee() {
  const items = skills.flatMap((group) => group.skills)
  return (
    <div className="mt-20 overflow-hidden border-y border-line py-5" aria-label="Technologies I work with">
      <ul className="marquee flex w-max gap-12 font-display text-lg font-bold text-mute">
        {[...items, ...items].map((name, index) => (
          <li key={index} aria-hidden={index >= items.length}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
