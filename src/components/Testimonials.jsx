import { m } from 'framer-motion'
import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="band py-20 sm:py-24">
      <div className="wrap">
        <div className="label-row">
          <span className="eyebrow">Kind words</span>
        </div>
        <h2 className="h2 mt-5">What clients say.</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <m.figure
              key={t.name}
              className="card card-hover flex flex-col p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                aria-hidden="true"
                className="text-2xl leading-none"
                style={{ color: 'var(--ink-faint)' }}
              >
                &ldquo;
              </span>

              <blockquote className="body mt-3 flex-1 text-[15px]" style={{ color: 'var(--ink)' }}>
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex shrink-0 items-center justify-center rounded-xl text-xs font-semibold"
                  style={{
                    width: 36,
                    height: 36,
                    background: 'var(--accent-soft)',
                    color: 'var(--accent)',
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[13px] font-semibold" style={{ color: 'var(--ink)' }}>
                    {t.name}
                  </span>
                  <span className="mt-0.5 text-[11px]" style={{ color: 'var(--ink-faint)' }}>
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
