import type { ReactNode } from 'react'

export function Timeline({ children }: { children: ReactNode }) {
  return <ol className="space-y-8 border-l border-line pl-8">{children}</ol>
}

export function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <li className="relative">
      <span className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full bg-lapis" aria-hidden="true" />
      {children}
    </li>
  )
}
