import { achievements } from '../../data/achievements'
import ItemListSection from '../common/ItemListSection'

export default function Achievements() {
  const items = achievements.map((a) => ({ heading: a.title, detail: a.description }))
  return <ItemListSection id="achievements" title="Achievements" items={items} />
}
