import { profile, skills } from '../data'
import { TechIcon } from './icons'

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="wrap">
        <div className="label-row mb-10">
          <span className="eyebrow">about</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* profile */}
          <div>
            <h2 className="h2 mb-7" style={{ maxWidth: '20ch' }}>
              A developer who cares about your outcome, not just the code.
            </h2>
            <p className="body text-[17px]">{profile.about}</p>
            <p className="body mt-4 text-[17px]">
              Whether you're a startup finding your feet or an established business ready to scale,
              I work closely with you — clear updates, honest timelines, and software that keeps
              working long after launch.
            </p>
          </div>

          {/* toolkit + facts */}
          <aside>
            <div className="card p-6">
              <p className="eyebrow mb-5">the toolkit</p>
              <div className="space-y-5">
                {skills.map((group) => (
                  <div key={group.group}>
                    <h4 className="mb-2.5 font-mono text-xs" style={{ color: 'var(--ink-faint)' }}>
                      {group.group.toLowerCase()}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span key={item} className="chip">
                          <TechIcon name={item} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <hr className="rule my-6" />

              <dl className="space-y-2.5 font-mono text-[13px]">
                <div className="flex justify-between gap-4">
                  <dt style={{ color: 'var(--ink-faint)' }}>based_in</dt>
                  <dd className="text-right" style={{ color: 'var(--ink)' }}>Tamil Nadu, India</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt style={{ color: 'var(--ink-faint)' }}>experience</dt>
                  <dd style={{ color: 'var(--ink)' }}>5+ years</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt style={{ color: 'var(--ink-faint)' }}>availability</dt>
                  <dd style={{ color: 'var(--green)' }}>open for work</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
