import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const metricRef = useRef(null)
  const inView = useInView(metricRef, { once: true, margin: '-100px' })

  // Parallax for dotted layer to match Projects section behavior
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgParallax = useTransform(scrollYProgress, [0, 1], ['0px', '-120px'])

  // Optional: mirror the cursor-follow glow behavior for metric cards
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

  const items = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Delivered', value: '40+' },
    { label: 'Avg. Lighthouse', value: '95+' },
  ]

  return (
    <section ref={sectionRef} id="about" className="relative py-24">
      {/* Animated background layers to match Selected Work */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Soft animated aurora */}
        <motion.div
          aria-hidden
          className="absolute -top-24 -right-16 h-[55vh] w-[70vw] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(60% 60% at 30% 40%, rgba(168,85,247,0.16), transparent), radial-gradient(50% 50% at 70% 60%, rgba(147,51,234,0.16), transparent)'
          }}
          animate={{ x: [0, -30, 20, 0], y: [0, 12, -18, 0] }}
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
                ref={metricRef}
                initial={{ y: 16, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl p-5 border border-purple-400/20 bg-white/5 text-center overflow-hidden"
                data-radial
              >
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(300px_circle_at_var(--x,0px)_var(--y,0px),rgba(168,85,247,0.12),transparent_40%)]" />
                <div className="text-2xl font-black text-purple-300">{i.value}</div>
                <div className="text-sm text-white/70">{i.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="relative rounded-3xl border border-purple-400/20 p-6 bg-gradient-to-br from-black/60 to-purple-900/10 shadow-[0_0_60px_rgba(168,85,247,0.08)]" data-radial>
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(400px_circle_at_var(--x,0px)_var(--y,0px),rgba(168,85,247,0.12),transparent_40%)]" />
            <p className="text-purple-100/90 leading-relaxed">
              I value performance, accessibility, and craft. I love designing in the browser and bringing ideas to life with motion.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating orbs to match the section vibe */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 left-8 top-12 h-24 w-24 rounded-full bg-purple-500/20 blur-2xl"
        animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 right-8 bottom-12 h-32 w-32 rounded-full bg-fuchsia-400/10 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  )
}
