import { profile } from '../data'

const stats = [
  { v: '5+', l: 'years experience' },
  { v: '30+', l: 'projects delivered' },
  { v: '24h', l: 'reply time' },
  { v: '100%', l: 'client focused' },
]

export default function Hero() {
  return (
    <section id="top" className="pt-14 sm:pt-20">
      <div className="wrap">
        {/* status line */}
        <div className="label-row mb-8">
          <span className="eyebrow">portfolio</span>
          <span className="font-mono text-[13px]" style={{ color: 'var(--ink-faint)' }}>
            freelance · {new Date().getFullYear()}
          </span>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* headline */}
          <div>
            {profile.available && (
              <span
                className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs"
                style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', color: 'var(--ink-soft)' }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ background: 'var(--green)' }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 rounded-full"
                    style={{ background: 'var(--green)' }}
                  />
                </span>
                available for freelance
              </span>
            )}

            <h1 className="display text-4xl sm:text-5xl lg:text-[3.5rem]">
              I build websites &amp; web apps that{' '}
              <span style={{ color: 'var(--accent)' }}>grow your business.</span>
            </h1>

            <p className="lead mt-7 max-w-xl">
              I'm {profile.name} — a senior developer with 5+ years turning ideas into fast,
              reliable products. You bring the vision; I handle the build, start to finish.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn">start a project</a>
              <a href="#work" className="btn-outline">see my work</a>
            </div>
          </div>

          {/* code window */}
          <div className="window font-mono text-[13px] leading-relaxed shadow-sm">
            <div className="window-bar">
              <span className="dot" style={{ background: '#ff5f57' }} />
              <span className="dot" style={{ background: '#febc2e' }} />
              <span className="dot" style={{ background: '#28c840' }} />
              <span className="ml-2">developer.js</span>
            </div>
            <pre className="overflow-x-auto p-5" style={{ color: 'var(--ink-soft)' }}>
<span className="tok-com">{'// available for new projects'}</span>{'\n'}
<span className="tok-key">const</span> <span className="tok-fn">developer</span> = {'{'}{'\n'}
{'  '}name: <span className="tok-str">'{profile.name}'</span>,{'\n'}
{'  '}role: <span className="tok-str">'{profile.role}'</span>,{'\n'}
{'  '}stack: [<span className="tok-str">'Laravel'</span>, <span className="tok-str">'PHP'</span>, <span className="tok-str">'React'</span>],{'\n'}
{'  '}experience: <span className="tok-num">5</span>,{'\n'}
{'  '}location: <span className="tok-str">'Tamil Nadu, India'</span>,{'\n'}
{'  '}<span className="tok-fn">available</span>: () <span className="tok-key">=&gt;</span> <span className="tok-num">true</span>,{'\n'}
{'}'}{'\n'}
            </pre>
          </div>
        </div>

        {/* quick facts */}
        <div className="mt-14 grid grid-cols-2 gap-px sm:grid-cols-4" style={{ background: 'var(--line)' }}>
          {stats.map((s) => (
            <div key={s.l} className="px-4 py-5" style={{ background: 'var(--bg)' }}>
              <div className="display text-2xl sm:text-3xl" style={{ color: 'var(--accent)' }}>{s.v}</div>
              <div className="mt-1.5 font-mono text-xs" style={{ color: 'var(--ink-faint)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
