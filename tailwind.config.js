/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Mirrors the CSS custom properties in index.css so Tailwind
        // utilities stay in sync with the themed tokens.
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        'bg-3': 'var(--bg-3)',
        ink: {
          DEFAULT: 'var(--ink)',
          soft: 'var(--ink-soft)',
          faint: 'var(--ink-faint)',
        },
        line: 'var(--line)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        warm: 'var(--warm)',
        ok: 'var(--ok)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
