import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { profile } from '../../data/profile'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-6xl rounded-full border border-line/70 bg-ink/80 px-6 py-3 backdrop-blur">
        <nav aria-label="Main" className="flex items-center justify-between">
          <a href="#top" className="font-display text-xl font-extrabold tracking-tight">
            {profile.initials}<span className="text-lapis">.</span>
          </a>
          <ul className="hidden gap-8 text-sm text-mute lg:flex">
            {navigation.map((item) => (
              <li key={item.id}><a href={`#${item.id}`} className="transition-colors hover:text-sand">{item.label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="hidden rounded-full bg-lapis px-5 py-2 text-sm font-semibold text-ink hover:brightness-110 lg:block">
            Let’s talk
          </a>
          <button className="lg:hidden" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {isOpen && (
          <ul className="mt-4 grid gap-3 border-t border-line pt-4 lg:hidden">
            {[...navigation, { id: 'contact', label: 'Contact' }].map((item) => (
              <li key={item.id}><a onClick={closeMenu} href={`#${item.id}`} className="text-mute">{item.label}</a></li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
