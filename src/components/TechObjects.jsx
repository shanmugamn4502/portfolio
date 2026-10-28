import { m } from 'framer-motion'

/* Small outline glyphs that read as "software/AI" at a glance. */
const Glyph = {
  code: (
    <>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </>
  ),
  cpu: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
      <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
    </>
  ),
  cloud: <path d="M18 10h-1.3A7 7 0 1 0 6 16h12a4 4 0 0 0 0-8z" />,
  git: (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M6 9v6" />
      <circle cx="18" cy="12" r="3" />
      <path d="M15 12H9" />
    </>
  ),
  terminal: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="6 9 9 12 6 15" />
      <line x1="12" y1="15" x2="17" y2="15" />
    </>
  ),
  spark: (
    <path d="M12 2l1.9 5.8L20 9.7l-5 3.6L16.5 20 12 16.7 7.5 20 9 13.3 4 9.7l6.1-1.9z" />
  ),
}

// position / motion for each floating glyph
const items = [
  { k: 'code',     top: '10%', left: '4%',  size: 26, dur: 7.5, delay: 0,   color: 'var(--accent)' },
  { k: 'cpu',      top: '66%', left: '2%',  size: 30, dur: 9,   delay: 0.8, color: 'var(--accent-2)' },
  { k: 'database', top: '34%', left: '7%',  size: 22, dur: 8,   delay: 1.6, color: 'var(--warm)' },
  { k: 'cloud',    top: '8%',  left: '90%', size: 30, dur: 8.5, delay: 0.4, color: 'var(--accent-2)' },
  { k: 'git',      top: '48%', left: '94%', size: 24, dur: 7,   delay: 1.2, color: 'var(--accent)' },
  { k: 'terminal', top: '78%', left: '89%', size: 26, dur: 10,  delay: 2,   color: 'var(--ok)' },
  { k: 'spark',    top: '22%', left: '96%', size: 18, dur: 6,   delay: 0.2, color: 'var(--warm)' },
]

export default function TechObjects() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden lg:block" aria-hidden="true">
      {items.map((it, i) => (
        <m.span
          key={i}
          className="absolute block"
          style={{ top: it.top, left: it.left, color: it.color }}
          animate={{ y: [0, -20, 0], rotate: [0, i % 2 ? 9 : -9, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: it.dur, repeat: Infinity, ease: 'easeInOut', delay: it.delay }}
        >
          <svg
            width={it.size}
            height={it.size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {Glyph[it.k]}
          </svg>
        </m.span>
      ))}
    </div>
  )
}
