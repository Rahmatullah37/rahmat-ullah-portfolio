import { navigation } from '../../data/navigation'
import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10 text-sm text-mute">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-5">
          {navigation.map((item) => <a key={item.id} href={`#${item.id}`} className="hover:text-sand">{item.label}</a>)}
        </nav>
      </div>
    </footer>
  )
}
