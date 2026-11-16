import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../../data/profile'
import { getProfileStats } from '../../utils/stats'
import ButtonLink from '../common/ButtonLink'

export default function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true)
  const stats = getProfileStats()

  return (
    <section id="top" className="glow pt-36 md:pt-44">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-sm tracking-[0.2em] text-lapis">{profile.eyebrow}</p>
          <h1 className="text-5xl font-extrabold leading-[1.02] md:text-7xl">{profile.fullName}</h1>
          <p className="mt-6 text-lg text-mute md:text-xl">{profile.tagline}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="#contact">Contact me</ButtonLink>
            <ButtonLink href="#projects" variant="outline">See selected work</ButtonLink>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid overflow-hidden rounded-[2rem] border border-line bg-panel md:grid-cols-[1fr_1.2fr]">
          <div className="aspect-[4/3] md:aspect-auto md:min-h-[26rem]">
            {hasPhoto ? (
              <img src={profile.photo} alt={`Portrait of ${profile.fullName}`} width={600} height={600} onError={() => setHasPhoto(false)} style={{ objectPosition: profile.photoPosition ?? 'center center' }} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-line/60 to-panel text-center">
                <span className="font-display text-8xl font-bold text-lapis">{profile.initials}</span>
                <span className="text-xs text-mute">Add your photo at public{profile.photo}</span>
              </div>
            )}
          </div>
          <dl className="grid grid-cols-2 content-center gap-px bg-line">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-panel p-7 md:p-9">
                <dt className="font-display text-5xl font-extrabold">{stat.value}</dt>
                <dd className="mt-2 text-sm text-mute">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
