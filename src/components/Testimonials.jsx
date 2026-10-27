import { testimonials } from '../data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="wrap">
        <div className="label-row">
          <span className="eyebrow">kind words</span>
        </div>
        <h2 className="h2 mt-5">What clients say.</h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="card flex flex-col p-6">
              <span
                aria-hidden="true"
                className="font-mono text-2xl leading-none"
                style={{ color: 'var(--ink-faint)' }}
              >
                &ldquo;
              </span>

              <blockquote className="body mt-3 flex-1 text-[15px]" style={{ color: 'var(--ink)' }}>
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex shrink-0 items-center justify-center rounded-md font-mono text-xs font-semibold"
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
                  <span className="font-mono text-[13px] font-semibold" style={{ color: 'var(--ink)' }}>
                    {t.name}
                  </span>
                  <span className="mt-0.5 font-mono text-[11px]" style={{ color: 'var(--ink-faint)' }}>
                    {t.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
