import { education } from '../../data/education'
import Section from '../common/Section'
import { Timeline, TimelineItem } from '../common/Timeline'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline>
        {education.map((entry) => (
          <TimelineItem key={entry.degree}>
            <h3 className="text-xl font-bold">{entry.degree}</h3>
            <p className="text-mute">{entry.institution}</p>
            <p className="mt-1 text-sm text-lapis">{entry.status}</p>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  )
}
