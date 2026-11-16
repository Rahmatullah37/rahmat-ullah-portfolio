import type { ReactNode } from 'react'

/** Amber highlight for content the owner still has to fill in. */
export default function Placeholder({ children }: { children: ReactNode }) {
  return <span className="rounded bg-amber-400/10 px-1.5 text-amber-300">{children}</span>
}
