import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,0.06),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(45,212,191,0.05),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(13,148,136,0.06),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(20,184,166,0.08)_50%,transparent_100%)] opacity-30" />
      </div>

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
          <div className="text-white/60 text-sm">Built with love, motion, and a touch of teal.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
