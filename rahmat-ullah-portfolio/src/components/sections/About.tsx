import { ArrowUpRight } from 'lucide-react'
import { profile } from '../../data/profile'
import Section from '../common/Section'

export default function About() {
  return (
    <Section id="about" title="Turning requirements into working software">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg text-mute">
          {profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <ul className="card space-y-3 self-start rounded-2xl p-7">
          {profile.highlights.map((item) => (
            <li key={item} className="flex gap-3 font-semibold"><ArrowUpRight className="text-lapis" size={20} />{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
