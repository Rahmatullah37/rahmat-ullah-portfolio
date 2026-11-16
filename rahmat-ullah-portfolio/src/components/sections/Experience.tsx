import { experience } from '../../data/experience'
import HighlightedText from '../common/HighlightedText'
import Section from '../common/Section'
import { Timeline, TimelineItem } from '../common/Timeline'

export default function Experience() {
  return (
    <Section id="experience" title="Professional experience">
      <Timeline>
        {experience.map((entry) => (
          <TimelineItem key={`${entry.organization}-${entry.role}`}>
            <h3 className="text-xl font-bold">{entry.role}, {entry.organization}</h3>
            {entry.period && <p className="text-sm text-lapis">{entry.period}</p>}
            <p className="mt-1 max-w-2xl text-mute"><HighlightedText text={entry.description} /></p>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  )
}
