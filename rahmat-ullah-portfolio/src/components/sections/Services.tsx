import { services } from '../../data/services'
import Section from '../common/Section'

export default function Services() {
  return (
    <Section id="services" title="What I do" intro="From backend systems to research, the areas I work in.">
      <ol className="divide-y divide-line border-y border-line">
        {services.map((service, index) => (
          <li key={service.title} className="group grid gap-3 py-8 md:grid-cols-[5rem_1fr_1.4fr] md:items-baseline">
            <span className="text-gradient font-display text-xl font-bold">0{index + 1}.</span>
            <h3 className="text-2xl font-bold transition-colors group-hover:text-lapis">{service.title}</h3>
            <p className="text-mute">{service.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
