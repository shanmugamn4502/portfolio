import { useTheme } from '../theme.jsx'

const links = [
  { href: '#work', label: 'work' },
  { href: '#services', label: 'services' },
  { href: '#about', label: 'about' },
  { href: '#testimonials', label: 'reviews' },
]

export default function Masthead() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="masthead">
      <div className="wrap flex h-14 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span style={{ color: 'var(--green)' }}>$</span>
          <span style={{ color: 'var(--ink)' }}>shanmugam</span>
          <span className="animate-blink" style={{ color: 'var(--accent)' }}>_</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              <span style={{ color: 'var(--ink-faint)' }}>./</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="flex h-8 w-8 items-center justify-center rounded-md"
            style={{ border: '1px solid var(--line)', background: 'var(--bg-2)', color: 'var(--ink-soft)' }}
          >
            {isDark ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <a href="#contact" className="btn hidden px-4 py-1.5 text-[13px] sm:inline-flex">
            contact
          </a>
        </div>
      </div>
    </header>
  )
}
