import { useEffect, useRef } from 'react'

/**
 * Lightweight neural-network backdrop: drifting nodes that draw links
 * when they're close. Canvas (not DOM) so it stays cheap, and it stops
 * entirely when scrolled out of view or if the visitor prefers less motion.
 */
export default function NeuralNet({ height = 420 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = canvas.getContext('2d')
    let raf = 0
    let w = 0
    let h = 0
    let visible = true
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const COUNT = window.innerWidth < 900 ? 18 : 34
    const LINK = 130
    const nodes = []

    const accent = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#5b5bd6'

    function size() {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function seed() {
      nodes.length = 0
      for (let i = 0; i < COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.6 + 1.2,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h)
      const col = accent()

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0 || a.x > w) a.vx *= -1
        if (a.y < 0 || a.y > h) a.vy *= -1

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * 0.22
            ctx.strokeStyle = col
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }

        ctx.globalAlpha = 0.5
        ctx.fillStyle = col
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    size()
    seed()

    if (reduce) {
      draw()
      cancelAnimationFrame(raf)   // one static frame only
      return () => cancelAnimationFrame(raf)
    }

    raf = requestAnimationFrame(draw)

    const onResize = () => {
      size()
      seed()
    }
    window.addEventListener('resize', onResize)

    // Pause when off-screen to save battery.
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !visible) {
          visible = true
          raf = requestAnimationFrame(draw)
        } else if (!e.isIntersecting && visible) {
          visible = false
          cancelAnimationFrame(raf)
        }
      },
      { threshold: 0 }
    )
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      io.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 w-full"
      style={{ height }}
    />
  )
}
