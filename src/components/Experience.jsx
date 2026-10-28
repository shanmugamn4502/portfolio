import { experience, education } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="wrap">
        <div className="label-row">
          <span className="eyebrow">My experience</span>
        </div>
        <h2 className="h2 mt-5">A track record you can trust.</h2>

        <div className="mt-12 lg:grid lg:grid-cols-[1fr_320px] lg:gap-12">
          {/* MAIN — work experience, as a git-log style timeline */}
          <div>
            {experience.map((job, i) => (
              <div
                key={`${job.role}-${job.company}`}
                className="relative pb-10 pl-7 last:pb-0"
                style={{
                  borderLeft:
                    i === experience.length - 1 ? '1px solid transparent' : '1px solid var(--line)',
                }}
              >
                {/* timeline marker */}
                <span
                  className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                  style={{ background: 'var(--bg)', border: '2px solid var(--accent)' }}
                  aria-hidden="true"
                />

                <div className="text-xs" style={{ color: 'var(--ink-faint)' }}>
                  {job.period}
                </div>
                <h3 className="h3 mt-2">{job.role}</h3>
                <div className="mt-1 text-[13px]" style={{ color: 'var(--ink-soft)' }}>
                  {job.company} · {job.place}
                </div>

                <ul className="mt-4 space-y-2.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className="text-[13px] leading-[1.75]"
                        style={{ color: 'var(--accent)' }}
                      >
                        •
                      </span>
                      <span className="body text-[15px]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* SIDE — education */}
          <aside className="mt-12 lg:mt-0">
            <div className="label-row">
              <span className="eyebrow">Education</span>
            </div>

            <div className="mt-6 space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="card card-hover p-5">
                  <h3 className="h3" style={{ fontSize: '1rem', lineHeight: 1.4 }}>
                    {edu.degree}
                  </h3>
                  <div className="mt-1.5 text-xs" style={{ color: 'var(--ink-faint)' }}>
                    {edu.school} · {edu.period}
                  </div>
                  <p className="body mt-2.5 text-[14px]">{edu.desc}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
