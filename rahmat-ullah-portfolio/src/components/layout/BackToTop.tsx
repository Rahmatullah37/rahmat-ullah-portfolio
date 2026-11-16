import { ArrowUp } from 'lucide-react'
import { useScrolledPast } from '../../hooks/useScrolledPast'

export default function BackToTop() {
  const isVisible = useScrolledPast(600)
  if (!isVisible) return null
  return (
    <a href="#top" aria-label="Back to top" className="fixed bottom-6 right-6 rounded-full bg-lapis p-3 text-ink shadow-lg hover:brightness-110">
      <ArrowUp size={20} />
    </a>
  )
}
