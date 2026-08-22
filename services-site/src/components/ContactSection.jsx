"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import SpecularButton from "./SpecularButton"
import BorderGlow from "./BorderGlow"

const initialForm = {
  name: "",
  phone: "",
  service: "Website Development",
  budget: "Rs. 5,000 - 15,000",
  message: "",
}

const SERVICES = [
  "Website Development", "Custom Software", "AI Services", "Automation Setup", 
  "Google Ads", "Meta Ads", "SEO Services", "Google Business Optimization", 
  "Logo Design", "Video Editing", "Photo Editing", "Photoshoot"
]

const BUDGETS = [
  "Rs. 5,000 - 15,000", "Rs. 15,000 - 35,000", "Rs. 35,000+", "Need guidance"
]

const CustomSelect = ({ options, value, onChange, name }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={selectRef}>
      <div
        className={`w-full cursor-pointer appearance-none rounded-2xl border bg-black/40 px-5 py-4 text-[15px] font-light outline-none transition-all ${
          isOpen ? 'border-amber-500/50 bg-[#0a0a0a] text-white ring-1 ring-amber-500/50' : 'border-white/10 text-gray-200 hover:border-white/20 hover:bg-[#0a0a0a]'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
        <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-500' : ''}`}>
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-[100] mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div 
            className="max-h-60 overflow-y-auto p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            data-lenis-prevent="true"
          >
            {options.map((option) => (
              <div
                key={option}
                className={`cursor-pointer rounded-xl px-4 py-3 text-[14px] transition-colors ${
                  value === option 
                    ? 'bg-amber-500/10 text-amber-500 font-medium' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => {
                  onChange({ target: { name, value: option } })
                  setIsOpen(false)
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function ContactSection({ hideHeader = false }) {
  const [form, setForm] = useState(initialForm)

  const handleChange = ({ target }) => {
    setForm((current) => ({
      ...current,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = [
      "Hello SOFTGENZ, I want to discuss a project.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget}`,
      `Message: ${form.message}`,
    ].join("\n")

    window.open(
      `https://wa.me/917358847752?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <section id="contact-form" aria-labelledby="contact-form-heading" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group flex h-full flex-col"
        >
          <BorderGlow
            className="flex h-full flex-col p-8 md:p-12 transition-transform duration-500 hover:-translate-y-2 cursor-default"
            backgroundColor="#0a0a0a"
            glowColor="38 92 50"
            animated={true}
            borderRadius={32}
          >
            {!hideHeader && (
              <>
                <p className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6">Contact Form</p>
                <h2 id="contact-form-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                  Tell Us About<br />
                  <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-2 block tracking-normal">
                    Your Project
                  </span>
                </h2>
              </>
            )}
            <p className={hideHeader ? "font-light leading-relaxed text-gray-400" : "mt-8 text-[15px] font-light leading-relaxed text-gray-400"}>
              Share a few details and we will turn your brief into a pre-filled project inquiry.
              It opens directly in WhatsApp so you can send it in one tap.
            </p>

            <div className="relative z-10 mt-12 rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors group-hover:bg-white/[0.04]">
              <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-amber-100 transition-colors">Free Consultation</h3>
              <p className="mt-3 text-[14px] font-light leading-relaxed text-gray-400">
                Prefer to speak first? Book a free consultation call and get guidance on pricing,
                timeline, features, and what package fits your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="tel:+917358847752">
                  <SpecularButton 
                    baseColor="#f59e0b" 
                    lineColor="#ffffff" 
                    className="bg-amber-500 text-black font-bold tracking-wide"
                  >
                    Book Free Call
                  </SpecularButton>
                </Link>
                <Link href="mailto:softgenzservices@gmail.com">
                  <SpecularButton 
                    baseColor="#262626" 
                    lineColor="#fbbf24" 
                    className="bg-white/5 text-white font-medium"
                  >
                    Send Email
                  </SpecularButton>
                </Link>
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group flex h-full flex-col"
        >
          <BorderGlow
            className="flex h-full flex-col p-8 md:p-12 transition-transform duration-500 hover:-translate-y-2 cursor-default"
            backgroundColor="#0a0a0a"
            glowColor="38 92 50"
            animated={true}
            borderRadius={32}
          >
            <form onSubmit={handleSubmit} className="flex h-full flex-col relative z-10">
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block font-display text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 transition-colors group-hover:text-amber-500/70">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-[15px] font-light text-gray-200 outline-none transition-all placeholder:text-gray-600 focus:border-amber-500/50 focus:bg-[#0a0a0a] focus:ring-1 focus:ring-amber-500/50"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block font-display text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 transition-colors group-hover:text-amber-500/70">Phone</span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-[15px] font-light text-gray-200 outline-none transition-all placeholder:text-gray-600 focus:border-amber-500/50 focus:bg-[#0a0a0a] focus:ring-1 focus:ring-amber-500/50"
                    placeholder="+91 98765 43210"
                  />
                </label>

                <label className="block relative z-50">
                  <span className="mb-3 block font-display text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 transition-colors group-hover:text-amber-500/70">Service</span>
                  <CustomSelect 
                    name="service" 
                    value={form.service} 
                    onChange={handleChange} 
                    options={SERVICES} 
                  />
                </label>

                <label className="block relative z-40">
                  <span className="mb-3 block font-display text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 transition-colors group-hover:text-amber-500/70">Budget</span>
                  <CustomSelect 
                    name="budget" 
                    value={form.budget} 
                    onChange={handleChange} 
                    options={BUDGETS} 
                  />
                </label>
              </div>

              <label className="mt-8 block">
                <span className="mb-3 block font-display text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 transition-colors group-hover:text-amber-500/70">Message</span>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-[15px] font-light text-gray-200 outline-none transition-all placeholder:text-gray-600 focus:border-amber-500/50 focus:bg-[#0a0a0a] focus:ring-1 focus:ring-amber-500/50"
                  placeholder="Tell us about your business, timeline, and what you need."
                />
              </label>

              <div className="mt-10 mt-auto pt-4">
                <SpecularButton 
                  className="w-full bg-amber-500 text-black font-bold tracking-wide"
                  baseColor="#f59e0b" 
                  lineColor="#ffffff" 
                  as="button"
                  onClick={handleSubmit}
                >
                  Send Project Inquiry
                </SpecularButton>
              </div>
            </form>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  )
}
