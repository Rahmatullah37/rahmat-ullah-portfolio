import type { ReactNode } from 'react'

interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  download?: boolean
}

const STYLES = {
  primary: 'btn-primary text-ink hover:-translate-y-0.5',
  outline: 'border border-line bg-panel/60 hover:-translate-y-0.5 hover:border-lapis hover:text-lapis',
}

export default function ButtonLink({ href, children, variant = 'primary', download }: ButtonLinkProps) {
  return (
    <a
      href={href}
      download={download}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold transition duration-300 ${STYLES[variant]}`}
    >
      {children}
    </a>
  )
}
