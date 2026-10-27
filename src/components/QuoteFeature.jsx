import { quotes } from '../data'

// A terminal "quote of the day" — fortune(1), basically — that changes daily.
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
        <div className="window">
          <div className="window-bar">
            <span className="dot" style={{ background: '#ff5f57' }} />
            <span className="dot" style={{ background: '#febc2e' }} />
            <span className="dot" style={{ background: '#28c840' }} />
            <span className="ml-2">bash — quote of the day</span>
          </div>

          <div className="p-5 sm:p-7">
            <p className="font-mono text-[13px]" style={{ color: 'var(--ink-faint)' }}>
              <span style={{ color: 'var(--green)' }}>$</span> fortune
            </p>

            <blockquote className="pull mt-4 text-xl sm:text-2xl">
              {q.text}
            </blockquote>

            <p className="mt-5 font-mono text-[13px]" style={{ color: 'var(--ink-faint)' }}>
              <span className="tok-com">{'// '}</span>
              {q.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
