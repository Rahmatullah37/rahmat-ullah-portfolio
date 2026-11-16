import { research } from '../../data/research'
import ExternalLink from '../common/ExternalLink'
import Section from '../common/Section'

export default function Research() {
  const { summary, publications } = research
  return (
    <Section id="research" title="Research and publications">
      <p className="max-w-2xl text-lg text-mute">{summary}</p>
      <h3 className="mt-10 text-xl font-bold">Publications</h3>
      {publications.length === 0 ? (
        <p className="mt-2 text-mute">No publications listed yet.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {publications.map((paper) => (
            <li key={paper.title}>
              <p className="font-semibold">{paper.title}</p>
              <p className="text-mute">{[paper.venue, paper.year].filter(Boolean).join(', ')}</p>
              {paper.url && <p className="text-sm"><ExternalLink href={paper.url} label="Read paper" /></p>}
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
