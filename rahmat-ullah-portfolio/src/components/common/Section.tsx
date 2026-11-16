import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  title: string
  intro?: string
  children: ReactNode
}

/** Shared wrapper: spacing, anchor id, accent bar, heading and fade-in on scroll. */
export default function Section({ id, title, intro, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-6xl px-6 py-20 md:py-28"
    >
      <div className="mb-10 md:mb-14 md:flex md:items-end md:justify-between md:gap-10">
        <div>
          <span className="mb-5 block h-1 w-14 rounded-full bg-gradient-to-r from-lapis to-aqua" aria-hidden="true" />
          <h2 className="text-3xl font-extrabold md:text-5xl">{title}</h2>
        </div>
        {intro && <p className="mt-4 max-w-md text-mute md:mt-0">{intro}</p>}
      </div>
      {children}
    </motion.section>
  )
}
