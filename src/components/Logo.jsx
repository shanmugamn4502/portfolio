// Monogram mark: an "S" drawn as a connected node path — a nod to
// software/AI without reading as a literal letter tile.
export default function Logo({ size = 38, rounded = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="lg-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>

      <rect width="48" height="48" rx={rounded} fill="url(#lg-bg)" />

      {/* S-curve traced as a circuit path */}
      <path
        d="M31.5 16.5c0-2.8-3.2-4.5-7.5-4.5s-7.5 1.9-7.5 5c0 7 15 4.5 15 11.5 0 3.1-3.2 5.5-7.5 5.5s-7.5-1.7-7.5-4.5"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* connection nodes */}
      <circle cx="16.5" cy="16.5" r="3.1" fill="#fff" />
      <circle cx="31.5" cy="31.5" r="3.1" fill="#fff" />
    </svg>
  )
}
