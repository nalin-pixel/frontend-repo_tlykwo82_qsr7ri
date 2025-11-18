import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7])

  return (
    <section ref={ref} id="home" className="relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Teal ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 bg-teal-500/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-96 w-96 bg-teal-400/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(13,148,136,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(94,234,212,0.07),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.07),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div style={{ opacity, y }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-white/5 text-teal-300 mb-5 backdrop-blur">
            <div className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" /> Available for freelance work
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-[-0.02em] text-white">
            Crafting bold, futuristic web experiences
          </h1>
          <p className="mt-5 text-lg text-teal-100/80 max-w-xl">
            I design and build immersive interfaces that blend performance, accessibility, and cinematic aesthetics.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-teal">View Projects</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </motion.div>

        <motion.div style={{ y, scale, opacity }} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-teal-400/20 bg-black/40 shadow-[0_0_80px_rgba(45,212,191,0.12)]">
            <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
