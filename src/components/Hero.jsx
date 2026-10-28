import { m } from 'framer-motion'
import { profile } from '../data'
import TechObjects from './TechObjects'
import NeuralNet from './NeuralNet'

const stats = [
  { v: '5+', l: 'Years of experience' },
  { v: '30+', l: 'Projects delivered' },
  { v: '24h', l: 'Average reply time' },
  { v: '100%', l: 'Focused on your goals' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 sm:pt-16">
      {/* soft gradient atmosphere — the subtle "AI" cue */}
      <div
        className="glow drift"
        style={{ width: 460, height: 460, top: -140, right: -80, background: 'var(--accent)' }}
        aria-hidden="true"
      />
      <div
        className="glow drift-2"
        style={{ width: 380, height: 380, top: 160, left: -140, background: 'var(--accent-2)', opacity: 0.28 }}
        aria-hidden="true"
      />
      <NeuralNet height={560} />
      <TechObjects />

      <div className="wrap">
        <m.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.available && (
            <span
              className="mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium"
              style={{ background: 'var(--bg-2)', border: '1px solid var(--line)', color: 'var(--ink-soft)' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-70"
                  style={{ background: 'var(--ok)' }}
                />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ background: 'var(--ok)' }}
                />
              </span>
              Available for new projects
            </span>
          )}

          <h1 className="display text-4xl sm:text-5xl lg:text-[3.6rem]">
            I build websites and apps that{' '}
            <span className="grad-animate">help your business grow.</span>
          </h1>

          <p className="lead mt-7 max-w-xl">
            Hi, I'm {profile.name}. I turn your ideas into easy-to-use websites,
            apps and smart AI tools — explained in plain language, with no
            technical jargon along the way.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a href="#contact" className="btn">Start a project</a>
            <a href="#work" className="btn-outline">See my work</a>
          </div>

          <p className="mt-6 text-sm" style={{ color: 'var(--ink-faint)' }}>
            Free first chat · No obligation · Reply within 24 hours
          </p>
        </m.div>

        {/* quick facts */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <m.div
              key={s.l}
              className="card card-hover p-5 text-center sm:text-left"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="display grad text-3xl sm:text-4xl">{s.v}</div>
              <div className="mt-2 text-sm" style={{ color: 'var(--ink-soft)' }}>{s.l}</div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
