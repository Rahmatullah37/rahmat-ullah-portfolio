import { education } from '../data/education'
import { experience } from '../data/experience'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import type { Stat } from '../types'

/** Hero numbers are counted from the data files, so they never go out of date. */
export const getProfileStats = (): Stat[] => [
  { value: String(education.length), label: 'Degrees, completed or ongoing' },
  { value: String(experience.length), label: 'Professional roles' },
  { value: String(projects.length), label: 'Featured projects' },
  { value: String(skills.flatMap((group) => group.skills).length), label: 'Core technologies' },
]
