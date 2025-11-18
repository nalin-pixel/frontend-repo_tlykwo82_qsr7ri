import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'A cyberpunk-themed analytics dashboard with real-time animations.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'Teal Commerce',
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
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="text-teal-100/70 mt-2">A few things I’ve been crafting lately.</p>
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
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(400px_circle_at_var(--x,0px)_var(--y,0px),rgba(20,184,166,0.15),transparent_40%)]" />

              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <ExternalLink className="text-teal-300 opacity-0 group-hover:opacity-100 transition" size={18} />
              </div>
              <p className="mt-2 text-sm text-teal-100/80">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-teal-300/90 bg-teal-500/10 border border-teal-400/20 px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
