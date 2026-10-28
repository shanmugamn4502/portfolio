import { m, useScroll, useSpring } from 'framer-motion'
import { useTheme } from '../theme.jsx'
import { profile } from '../data'
import Logo from './Logo'

const links = [
  { href: '#services', label: 'What I do' },
  { href: '#work', label: 'My work' },
  { href: '#about', label: 'About me' },
  { href: '#testimonials', label: 'Reviews' },
]

export default function Masthead() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })

  return (
    <header className="masthead">
      {/* reading progress */}
      <m.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[2.5px] w-full origin-left"
        style={{
          scaleX: progress,
          background: 'linear-gradient(90deg, var(--accent), var(--accent-2), var(--warm))',
        }}
      />
      <div className="wrap flex h-[68px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5">
          <m.span whileHover={{ rotate: -8, scale: 1.08 }} transition={{ type: 'spring', stiffness: 300, damping: 14 }}>
            <Logo size={38} />
          </m.span>
          <span className="text-[17px] font-bold" style={{ color: 'var(--ink)' }}>
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ border: '1px solid var(--line)', background: 'var(--bg-2)', color: 'var(--ink-soft)' }}
          >
            {isDark ? (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <a href="#contact" className="btn hidden px-6 py-2.5 text-[15px] sm:inline-flex">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}
