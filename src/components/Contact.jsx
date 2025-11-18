import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise(r => setTimeout(r, 700))
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        <p className="text-teal-100/70 mt-2 mb-8">Let’s start something great together.</p>

        <motion.form onSubmit={onSubmit} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-6">
          <input required placeholder="Your name" className="input-teal" />
          <input required type="email" placeholder="Email address" className="input-teal" />
          <textarea required placeholder="Tell me about your project" rows={5} className="md:col-span-2 input-teal" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="btn-teal">
              <Send size={18} /> Send message
            </button>
            <span className="text-teal-100/80 text-sm">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
