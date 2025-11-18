import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'A cyberpunk-themed analytics dashboard with real-time animations.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'Iris Commerce',
    desc: 'Minimal e-commerce concept with micro-interactions and 3D touches.',
    tags: ['Next.js', 'Stripe', 'Spline'],
    link: '#'
  },
  {
    title: 'Wave Studio',
    desc: 'Audio visualization playground with generative shaders.',
    tags: ['WebGL', 'Three.js'],
    link: '#'
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgParallax = useTransform(scrollYProgress, [0, 1], ['0px', '-120px'])

  useEffect(() => {
    const handle = (e) => {
      const cards = document.querySelectorAll('[data-radial]')
      cards.forEach((el) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        el.style.setProperty('--x', `${x}px`)
        el.style.setProperty('--y', `${y}px`)
      })
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  return (
    <section ref={sectionRef} id="projects" className="relative py-24">
      {/* Animated background layers for Selected Work */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft animated aurora */}
        <motion.div
          aria-hidden
          className="absolute -top-32 -left-20 h-[60vh] w-[80vw] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(60% 60% at 30% 40%, rgba(168,85,247,0.18), transparent), radial-gradient(50% 50% at 70% 60%, rgba(147,51,234,0.18), transparent)'
          }}
          animate={{ x: [0, 40, -20, 0], y: [0, -10, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Faint moving grid */}
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 1px, transparent 1px, transparent 36px), repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 1px, transparent 1px, transparent 36px)'
          }}
          animate={{ backgroundPosition: ['0px 0px, 0px 0px', '30px 0px, 0px 30px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        {/* Parallax dots layer */}
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(216,180,254,0.12) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            backgroundPositionY: bgParallax
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-purple-100/70 mt-2">A few things I’ve been crafting lately.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-purple-400/20 bg-gradient-to-b from-white/5 to-white/0 p-5 overflow-hidden hover:shadow-[0_0_40px_rgba(168,85,247,0.18)] will-change-transform [transform-style:preserve-3d]"
              data-radial
            >
              {/* Magnetic glow following cursor */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(400px_circle_at_var(--x,0px)_var(--y,0px),rgba(168,85,247,0.18),transparent_45%)]" />

              {/* Animated border sheen */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-[1px] rounded-2xl"
                style={{
                  background:
                    'conic-gradient(from 180deg at 50% 50%, rgba(168,85,247,0.0), rgba(168,85,247,0.4), rgba(168,85,247,0.0))'
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.35, rotate: 20 }}
                transition={{ type: 'tween', duration: 0.8 }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <h3 className="text-white font-semibold group-hover:text-purple-200 transition">{p.title}</h3>
                <ExternalLink className="text-purple-300 opacity-0 group-hover:opacity-100 transition" size={18} />
              </div>
              <p className="relative z-10 mt-2 text-sm text-purple-100/80">{p.desc}</p>

              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-purple-300/90 bg-purple-500/10 border border-purple-400/20 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>

              {/* Button micro-interaction */}
              <div className="relative z-10 mt-5">
                <span className="inline-flex items-center gap-1 text-purple-300/90 group-hover:gap-2 transition-all">View case <ExternalLink size={14} /></span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Floating orbs for extra vibe */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 right-10 top-10 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl"
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 left-10 bottom-10 h-32 w-32 rounded-full bg-fuchsia-400/10 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
