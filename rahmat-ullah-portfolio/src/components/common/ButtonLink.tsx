import type { ReactNode } from 'react'

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  download?: boolean
}

const STYLES = {
  primary: 'bg-lapis text-ink hover:brightness-110',
  outline: 'border border-line hover:border-lapis',
}

export default function ButtonLink({ href, children, variant = 'primary', download }: ButtonLinkProps) {
  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold transition ${STYLES[variant]}`}
    >
      {children}
    </a>
  )
}
