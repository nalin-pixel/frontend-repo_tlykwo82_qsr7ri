import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useEffect } from 'react'

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
    <section id="projects" className="relative py-24">
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
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-purple-400/20 bg-gradient-to-b from-white/5 to-white/0 p-5 overflow-hidden hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]"
              data-radial
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(400px_circle_at_var(--x,0px)_var(--y,0px),rgba(168,85,247,0.18),transparent_45%)]" />

              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold group-hover:text-purple-200 transition">{p.title}</h3>
                <ExternalLink className="text-purple-300 opacity-0 group-hover:opacity-100 transition" size={18} />
              </div>
              <p className="mt-2 text-sm text-purple-100/80">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-purple-300/90 bg-purple-500/10 border border-purple-400/20 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>

              {/* Button micro-interaction */}
              <div className="mt-5">
                <span className="inline-flex items-center gap-1 text-purple-300/90 group-hover:gap-2 transition-all">View case <ExternalLink size={14} /></span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
