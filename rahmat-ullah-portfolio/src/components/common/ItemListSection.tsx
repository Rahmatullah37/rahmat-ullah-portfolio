import ExternalLink from './ExternalLink'
import HighlightedText from './HighlightedText'
import Section from './Section'

export interface ListItem {
  heading: string
  detail?: string
  url?: string
}

interface ItemListSectionProps {
  id: string
  title: string
  items: ListItem[]
}

/** Simple heading + detail list, shared by Certifications and Achievements. */
export default function ItemListSection({ id, title, items }: ItemListSectionProps) {
  return (
    <Section id={id} title={title}>
      <ul className="divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item.heading} className="py-5">
            <h3 className="text-lg font-semibold"><HighlightedText text={item.heading} /></h3>
            {item.detail && <p className="mt-1 text-mute"><HighlightedText text={item.detail} /></p>}
            {item.url && <p className="mt-2 text-sm"><ExternalLink href={item.url} label="View" /></p>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
