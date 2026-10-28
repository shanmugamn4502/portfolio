import { m } from 'framer-motion'
import { services } from '../data'
import { ServiceIcon } from './icons'

export default function Services() {
  return (
    <section id="services" className="band py-20 sm:py-24">
      <div className="wrap">
        <div className="label-row">
          <span className="eyebrow">What I can do for you</span>
        </div>
        <h2 className="h2 mt-5">Simple solutions to real problems.</h2>
        <p className="lead mt-4 max-w-[640px]">
          Whether you need a brand-new website, a custom app, or smart AI features,
          I'll guide you through it in plain language from first idea to launch.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <m.article
              key={service.title}
              className="card card-hover p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex" style={{ color: 'var(--accent)' }}>
                  <ServiceIcon title={service.title} size={26} />
                </span>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="h3 mt-5">{service.title}</h3>
              <p className="body mt-2.5 text-[15px]">{service.desc}</p>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  )
}
