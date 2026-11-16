import { ChevronDown } from 'lucide-react'
import { faq } from '../../data/faq'
import Section from '../common/Section'

export default function Faq() {
  return (
    <Section id="faq" title="Frequently asked questions">
      <div className="max-w-3xl divide-y divide-line border-y border-line">
        {faq.map((item) => (
          <details key={item.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown className="shrink-0 text-lapis transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-mute">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
