import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/60 border-b border-purple-500/20 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.12)]' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 ring-2 ring-purple-400/40 shadow-[0_0_30px_rgba(168,85,247,0.35)] flex items-center justify-center text-black font-black">F</div>
            <span className="text-white/80 group-hover:text-white transition">Flames Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-purple-300 transition">
                {l.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-purple-300 transition"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-purple-300 transition"><Linkedin size={18} /></a>
              <a href="#contact" className="text-white/70 hover:text-purple-300 transition"><Mail size={18} /></a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-1">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-white/80 hover:text-purple-300">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
