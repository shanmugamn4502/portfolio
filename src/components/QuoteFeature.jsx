import { quotes } from '../data'

// A gentle "thought for the day" that changes daily.
function todays() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const day = Math.floor((now - start) / 86400000)
  return quotes[day % quotes.length]
}

export default function QuoteFeature() {
  const q = todays()
  return (
    <section className="py-16 sm:py-20">
      <div className="wrap-tight">
        <div
          className="relative overflow-hidden rounded-3xl px-7 py-12 text-center sm:px-14 sm:py-14"
          style={{
            background: 'linear-gradient(135deg, var(--accent-soft), transparent 70%)',
            border: '1px solid var(--line)',
          }}
        >
          <span
            aria-hidden="true"
            className="display select-none leading-none"
            style={{ fontSize: '3.5rem', color: 'var(--accent)', opacity: 0.35 }}
          >
            &ldquo;
          </span>

          <blockquote className="pull mx-auto mt-2 max-w-2xl text-xl sm:text-2xl">
            {q.text}
          </blockquote>

          <p className="mt-6 text-sm font-medium" style={{ color: 'var(--ink-faint)' }}>
            — {q.author}
          </p>
        </div>
      </div>
    </section>
  )
}
