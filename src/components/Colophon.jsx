import { profile } from '../data'
import { SocialIcon } from './icons'
import Logo from './Logo'

const order = ['github', 'linkedin', 'whatsapp']
const labels = { github: 'GitHub', linkedin: 'LinkedIn', whatsapp: 'WhatsApp' }

export default function Colophon() {
  const socials = order.filter((k) => profile.socials[k] && profile.socials[k] !== '#')
  return (
    <footer className="py-10" style={{ borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
      <div className="wrap flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="flex items-center gap-2.5">
            <Logo size={38} />
            <span className="text-[17px] font-bold">{profile.name}</span>
          </p>
          <p className="mt-1.5 text-xs" style={{ color: 'var(--ink-faint)' }}>
            {profile.role} · Available for freelance work
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-xl"
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
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ border: '1px solid var(--line)', background: 'var(--bg)', color: 'var(--ink-soft)' }}
            >
              <SocialIcon kind={k} size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="wrap mt-7 text-sm" style={{ color: 'var(--ink-faint)' }}>
        © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.
      </div>
    </footer>
  )
}
