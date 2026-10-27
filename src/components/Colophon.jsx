import { profile } from '../data'
import { SocialIcon } from './icons'

const order = ['github', 'linkedin', 'whatsapp']
const labels = { github: 'GitHub', linkedin: 'LinkedIn', whatsapp: 'WhatsApp' }

export default function Colophon() {
  const socials = order.filter((k) => profile.socials[k] && profile.socials[k] !== '#')
  return (
    <footer className="py-10" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
      <div className="wrap flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="flex items-center gap-2 font-mono text-base font-semibold">
            <span style={{ color: 'var(--green)' }}>$</span>
            <span>{profile.name.toLowerCase()}</span>
          </p>
          <p className="mt-1.5 font-mono text-xs" style={{ color: 'var(--ink-faint)' }}>
            {profile.role} · available for freelance
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-md"
            style={{ border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink-soft)' }}
          >
            <SocialIcon kind="email" size={16} />
          </a>
          {socials.map((k) => (
            <a
              key={k}
              href={profile.socials[k]}
              target="_blank"
              rel="noreferrer"
              aria-label={labels[k]}
              className="flex h-9 w-9 items-center justify-center rounded-md"
              style={{ border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink-soft)' }}
            >
              <SocialIcon kind={k} size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="wrap mt-7 font-mono text-xs" style={{ color: 'var(--ink-faint)' }}>
        <span className="tok-com">{'// '}</span>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind · set in JetBrains Mono &amp; Inter.
      </div>
    </footer>
  )
}
