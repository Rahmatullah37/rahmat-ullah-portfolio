import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { getProfileStats } from '../../utils/stats'
import ButtonLink from '../common/ButtonLink'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
})

export default function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true)
  const stats = getProfileStats()
  const roles = profile.headline.split('|').map((role) => role.trim())
  const nameWords = profile.fullName.split(' ')
  const lastWord = nameWords.pop()

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="glow absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
          {/* Text column */}
          <div>
            <motion.p {...fadeUp(0)} className="mb-5 inline-block rounded-full border border-line bg-panel/70 px-4 py-1.5 text-xs tracking-[0.2em] text-lapis">
              {profile.eyebrow}
            </motion.p>
            <motion.h1 {...fadeUp(0.1)} className="text-5xl font-extrabold leading-[1.02] md:text-7xl">
              {nameWords.join(' ')}{' '}
              <span className="bg-gradient-to-r from-lapis to-aqua bg-clip-text text-transparent">{lastWord}</span>
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg text-mute md:text-xl">{profile.tagline}</motion.p>
            <motion.ul {...fadeUp(0.3)} className="mt-6 flex flex-wrap gap-2">
              {roles.map((role) => (
                <li key={role} className="rounded-full border border-line bg-panel/70 px-3.5 py-1 text-sm text-sand/90">{role}</li>
              ))}
            </motion.ul>
            <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#contact">Contact me</ButtonLink>
              <ButtonLink href="#projects" variant="outline">See selected work</ButtonLink>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div {...fadeUp(0.25)} className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="absolute -inset-6 rounded-[3rem] bg-lapis/20 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-lapis/70 via-line to-transparent p-[2px]">
              <div className="aspect-[4/5] overflow-hidden rounded-[calc(2rem-2px)] bg-panel">
                {hasPhoto ? (
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.fullName}`}
                    width={600}
                    height={750}
                    onError={() => setHasPhoto(false)}
                    style={{ objectPosition: profile.photoPosition ?? 'center' }}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-line/60 to-panel text-center">
                    <span className="font-display text-8xl font-bold text-lapis">{profile.initials}</span>
                    <span className="text-xs text-mute">Add your photo at public{profile.photo}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-5 left-4 right-4 flex items-center gap-3 rounded-2xl border border-line bg-ink/90 px-4 py-3 text-sm shadow-xl backdrop-blur md:left-6 md:right-auto">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-lapis" aria-hidden="true" />
              {profile.badge}
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.dl {...fadeUp(0.5)} className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-panel px-6 py-7 text-center md:py-9">
              <dt className="bg-gradient-to-b from-sand to-lapis bg-clip-text font-display text-5xl font-extrabold text-transparent">{stat.value}</dt>
              <dd className="mt-2 text-sm text-mute">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
