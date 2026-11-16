import { Download } from 'lucide-react'
import { profile } from '../../data/profile'
import ButtonLink from '../common/ButtonLink'
import Section from '../common/Section'

export default function Resume() {
  return (
    <Section id="resume" title="Resume">
      <p className="mb-6 max-w-xl text-mute">Download my CV for a full summary of my education, experience and skills.</p>
      <ButtonLink href={profile.resumeUrl} download><Download size={18} /> Download CV (PDF)</ButtonLink>
    </Section>
  )
}
