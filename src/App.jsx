import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      document.documentElement.style.setProperty('--cursor-x', `${x}px`)
      document.documentElement.style.setProperty('--cursor-y', `${y}px`)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global layered background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.06),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(216,180,254,0.05),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(147,51,234,0.06),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(168,85,247,0.08)_50%,transparent_100%)] opacity-30" />
      </div>

      {/* Reactive cursor glow (purple) */}
      <div
        aria-hidden
        className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 -z-10"
        style={{
          left: 'var(--cursor-x)',
          top: 'var(--cursor-y)',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(300px circle at center, rgba(168,85,247,0.14), rgba(147,51,234,0.06) 40%, transparent 60%)',
          filter: 'blur(30px)'
        }}
      />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60">© {new Date().getFullYear()} Flames Portfolio. All rights reserved.</p>
          <div className="text-white/60 text-sm">Built with love, motion, and a touch of purple.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
