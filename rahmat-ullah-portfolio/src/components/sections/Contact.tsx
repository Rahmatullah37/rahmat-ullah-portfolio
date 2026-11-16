import { socialLinks } from '../../data/socialLinks'
import { isPlaceholder } from '../../utils/placeholder'
import ExternalLink from '../common/ExternalLink'
import SocialIcon from '../common/SocialIcon'
import type { SocialLink } from '../../types'

const toHref = (link: SocialLink) =>
  link.platform === 'email' && !isPlaceholder(link.value) ? `mailto:${link.value}` : link.value

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="glow rounded-[2rem] border border-line bg-panel px-6 py-16 text-center md:px-16">
        <h2 className="text-4xl font-extrabold md:text-6xl">Let’s work together</h2>
        <p className="mx-auto mt-4 max-w-xl text-mute">For roles, research collaboration or scholarship enquiries, reach out through any channel below.</p>
        <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((link) => (
            <li key={link.platform} className="flex items-center gap-3 rounded-xl border border-line bg-ink p-4">
              <SocialIcon platform={link.platform} />
              <div>
                <p className="font-semibold">{link.label}</p>
                <p className="text-sm"><ExternalLink href={toHref(link)} label={link.platform === 'email' ? 'Send email' : 'Open profile'} /></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
