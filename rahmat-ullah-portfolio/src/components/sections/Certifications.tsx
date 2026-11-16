import { certifications } from '../../data/certifications'
import ItemListSection from '../common/ItemListSection'

export default function Certifications() {
  const items = certifications.map((c) => ({
    heading: c.name,
    detail: [c.issuer, c.year].filter(Boolean).join(', ') || undefined,
    url: c.url,
  }))
  return <ItemListSection id="certifications" title="Certifications" items={items} />
}
