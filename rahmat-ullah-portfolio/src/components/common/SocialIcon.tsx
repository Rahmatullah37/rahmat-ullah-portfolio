import { Facebook, Github, GraduationCap, Linkedin, Mail, type LucideIcon } from 'lucide-react'
import type { SocialPlatform } from '../../types'

const ICONS: Record<SocialPlatform, LucideIcon> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  facebook: Facebook,
  scholar: GraduationCap,
}

export default function SocialIcon({ platform, size = 22 }: { platform: SocialPlatform; size?: number }) {
  const Icon = ICONS[platform]
  return <Icon size={size} className="text-lapis" aria-hidden="true" />
}
