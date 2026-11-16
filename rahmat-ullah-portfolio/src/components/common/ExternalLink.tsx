import type { ReactNode } from 'react'
import { isPlaceholder } from '../../utils/placeholder'
import Placeholder from './Placeholder'

interface ExternalLinkProps {
  href: string
  label: string
  icon?: ReactNode
}

/** A link that shows an editable placeholder until a real URL is provided. */
export default function ExternalLink({ href, label, icon }: ExternalLinkProps) {
  if (isPlaceholder(href)) return <Placeholder>{label}: link to add</Placeholder>
  const opensNewTab = href.startsWith('http')
  return (
    <a
      href={href}
      {...(opensNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
      className="inline-flex items-center gap-1.5 text-lapis hover:underline"
    >
      {icon}
      {label}
    </a>
  )
}
