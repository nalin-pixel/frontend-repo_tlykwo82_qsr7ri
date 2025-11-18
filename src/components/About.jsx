import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const items = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Delivered', value: '40+' },
    { label: 'Avg. Lighthouse', value: '95+' },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <p className="text-purple-100/80 mt-3 leading-relaxed">
            I’m a front-end engineer focused on crafting expressive interfaces. My work blends design systems with motion to create clear, delightful experiences.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {items.map(i => (
              <motion.div
                key={i.label}
                ref={ref}
                initial={{ y: 16, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl p-5 border border-purple-400/20 bg-white/5 text-center overflow-hidden"
              >
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(300px_circle_at_var(--x,0px)_var(--y,0px),rgba(168,85,247,0.12),transparent_40%)]" />
                <div className="text-2xl font-black text-purple-300">{i.value}</div>
                <div className="text-sm text-white/70">{i.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="relative rounded-3xl border border-purple-400/20 p-6 bg-gradient-to-br from-black/60 to-purple-900/10 shadow-[0_0_60px_rgba(168,85,247,0.08)]">
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(400px_circle_at_var(--x,0px)_var(--y,0px),rgba(168,85,247,0.12),transparent_40%)]" />
            <p className="text-purple-100/90 leading-relaxed">
              I value performance, accessibility, and craft. I love designing in the browser and bringing ideas to life with motion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
