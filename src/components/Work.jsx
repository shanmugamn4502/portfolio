import { projects } from '../data'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

// A small repo-ish glyph for each row.
function RepoIcon() {
  return (
    <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
    </svg>
  )
}

export default function Work() {
  return (
    <section id="work" className="py-20 sm:py-24">
      <div className="wrap">
        <div className="label-row">
          <span className="eyebrow">selected work</span>
        </div>

        <h2 className="h2 mt-5 max-w-3xl">Projects I&rsquo;m proud of.</h2>
        <p className="lead mt-4 max-w-2xl">
          A handful of real products I&rsquo;ve built for businesses and startups &mdash;
          each one designed to solve an everyday problem and make life simpler for the
          people who use it.
        </p>

        <div className="mt-12 overflow-hidden rounded-lg" style={{ border: '1px solid var(--line)' }}>
          {/* list header, like a repo browser */}
          <div
            className="flex items-center gap-2 px-5 py-2.5 font-mono text-xs"
            style={{ background: 'var(--bg-3)', color: 'var(--ink-faint)' }}
          >
            <RepoIcon />
            <span>{projects.length} repositories</span>
          </div>

          {projects.map((p, i) => {
            const tags = p.tag.split('·').map((t) => t.trim()).filter(Boolean)
            return (
              <a
                key={p.title}
                href={p.link}
                className="work-row group grid grid-cols-1 gap-4 px-5 py-6 sm:grid-cols-12 sm:gap-6 sm:items-start"
              >
                <div className="flex items-center gap-3 sm:col-span-7">
                  <span className="num shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="h3" style={{ color: 'var(--accent)' }}>{p.title}</h3>
                    <p className="body mt-1.5 max-w-xl text-[15px]">{p.desc}</p>
                  </div>
                </div>

                <div className="sm:col-span-5 flex flex-col items-start gap-3 sm:items-end">
                  <div className="flex flex-wrap gap-1.5 sm:justify-end">
                    {tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <span className="arrow inline-flex items-center gap-1.5">
                    <span>view project</span>
                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                      <ArrowIcon />
                    </span>
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
