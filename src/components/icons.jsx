import {
  siLaravel, siPhp, siMysql, siJavascript, siReact, siVuedotjs,
  siTailwindcss, siAlpinedotjs, siDocker, siGit, siLinux, siNginx,
  siRedis, siNodedotjs, siPython, siHtml5, siGithub, siWhatsapp,
} from 'simple-icons'

// ── Skill / tech brand logos, keyed by the label used in data.js ──
const BRAND = {
  Laravel: siLaravel,
  PHP: siPhp,
  MySQL: siMysql,
  JavaScript: siJavascript,
  React: siReact,
  Vue: siVuedotjs,
  'Tailwind CSS': siTailwindcss,
  'Alpine.js': siAlpinedotjs,
  Docker: siDocker,
  Git: siGit,
  Linux: siLinux,
  Nginx: siNginx,
  Redis: siRedis,
  'Node.js': siNodedotjs,
  Python: siPython,
  'HTML / CSS': siHtml5,
}

// Brand mark drawn in the current text color (kept monochrome for cohesion).
function BrandGlyph({ icon, size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={icon.path} />
    </svg>
  )
}

// Fallback for concepts that have no logo (REST APIs, Queues, …): a prompt mark.
function PromptGlyph({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 8l4 4-4 4M13 16h6" />
    </svg>
  )
}

export function TechIcon({ name, size = 15 }) {
  const icon = BRAND[name]
  return icon ? <BrandGlyph icon={icon} size={size} /> : <PromptGlyph size={size} />
}

// ── Social icons ──
export function SocialIcon({ kind, size = 18 }) {
  const c = 'currentColor'
  if (kind === 'github') return <svg width={size} height={size} viewBox="0 0 24 24" fill={c} aria-hidden><path d={siGithub.path} /></svg>
  if (kind === 'whatsapp') return <svg width={size} height={size} viewBox="0 0 24 24" fill={c} aria-hidden><path d={siWhatsapp.path} /></svg>
  if (kind === 'linkedin')
    // LinkedIn's mark was removed from simple-icons for trademark reasons — drawn by hand.
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill={c} aria-hidden>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    )
  // email — a generic line envelope (not a brand)
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

export function PinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

// ── Service line icons, keyed by service title ──
export function ServiceIcon({ title, size = 24 }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  switch (title) {
    case 'Web Application Development':
      return <svg {...p}><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" /></svg>
    case 'API Development & Integration':
      return <svg {...p}><path d="M10 14a4 4 0 0 1 0-5.66l2-2a4 4 0 0 1 5.66 5.66l-1 1" /><path d="M14 10a4 4 0 0 1 0 5.66l-2 2a4 4 0 0 1-5.66-5.66l1-1" /></svg>
    case 'Responsive Frontends':
      return <svg {...p}><rect x="2" y="4" width="14" height="11" rx="1.5" /><path d="M6 20h6" /><rect x="17" y="9" width="5" height="11" rx="1.5" /></svg>
    case 'Maintenance & Bug Fixing':
      return <svg {...p}><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.5 2.5-2-2 2.5-2.5z" /></svg>
    default:
      return <svg {...p}><circle cx="12" cy="12" r="8" /></svg>
  }
}
