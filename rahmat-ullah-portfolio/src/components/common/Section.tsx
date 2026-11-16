import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  intro?: string
  children: ReactNode
}

/** Shared wrapper: consistent spacing, anchor id and heading for every section. */
export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-10 md:mb-14 md:flex md:items-end md:justify-between md:gap-10">
        <h2 className="text-3xl font-extrabold md:text-5xl">{title}</h2>
        {intro && <p className="mt-4 max-w-md text-mute md:mt-0">{intro}</p>}
      </div>
      {children}
    </section>
  )
}
