import { services } from '../data'
import { ServiceIcon } from './icons'

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="wrap">
        <div className="label-row">
          <span className="eyebrow">what i do</span>
        </div>
        <h2 className="h2 mt-5">Services that ship results.</h2>
        <p className="lead mt-4 max-w-[640px]">
          I help businesses and startups launch and grow web products — turning
          your ideas into fast, reliable tools your customers love to use.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article key={service.title} className="card p-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex" style={{ color: 'var(--accent)' }}>
                  <ServiceIcon title={service.title} size={26} />
                </span>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="h3 mt-5">{service.title}</h3>
              <p className="body mt-2.5 text-[15px]">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
