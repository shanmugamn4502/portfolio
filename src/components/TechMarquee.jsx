import { skills } from '../data'
import { TechIcon } from './icons'

// One continuous scrolling band of the tools I work with.
export default function TechMarquee() {
  const items = skills.flatMap((g) => g.items)
  const loop = [...items, ...items] // duplicated so the loop is seamless

  return (
    <section className="py-10" aria-label="Technologies I work with">
      <div className="marquee overflow-hidden">
        <div className="marquee-track gap-3">
          {loop.map((item, i) => (
            <span key={`${item}-${i}`} className="chip shrink-0 whitespace-nowrap">
              <TechIcon name={item} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
