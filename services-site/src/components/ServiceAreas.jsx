"use client";
import Link from 'next/link';
import { motion } from "framer-motion"
import { FaGlobe, FaWhatsapp } from "react-icons/fa"

const regions = [
  "India", "United Kingdom", "United States", "Australia",
  "Canada", "UAE", "Singapore", "Europe", "Southeast Asia",
]

const highlights = [
  { label: "Remote-First", desc: "We work fully remotely — no geographic limits on collaboration or delivery." },
  { label: "Async Friendly", desc: "Comfortable with async workflows, time-zone gaps, and international client timelines." },
  { label: "Global Standards", desc: "WCAG accessibility, schema markup, Core Web Vitals — production-grade across all markets." },
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" aria-labelledby="service-areas-heading" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-white/[0.05] bg-[#050505] shadow-2xl">
          
          {/* Background Ambient Effects - Concentric Global Rings */}
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3">
            <div className="absolute inset-0 rounded-full bg-amber-500/5 blur-[100px]" />
            <div className="flex h-[800px] w-[800px] items-center justify-center rounded-full border border-white/[0.03]">
              <div className="flex h-[600px] w-[600px] items-center justify-center rounded-full border border-white/[0.05]">
                <div className="flex h-[400px] w-[400px] items-center justify-center rounded-full border border-amber-500/10 shadow-[0_0_100px_rgba(245,158,11,0.05)]">
                  <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md">
                    <FaGlobe className="text-6xl text-amber-500/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 grid gap-16 p-8 py-16 md:p-20 lg:grid-cols-2">
            
            {/* Left Content - Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-amber-500/20 bg-amber-500/5 px-5 py-2 text-amber-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                </span>
                <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em]">Global Reach</span>
              </div>

              <h2 id="service-areas-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                Based in India.<br />
                <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-2 block tracking-normal">
                  Delivering Worldwide.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-[15px] font-light leading-relaxed text-gray-400">
                From solo founders to multi-location enterprises — we deliver websites, software, automation, and SEO fully remotely with absolutely no limits on where you operate.
              </p>

              <div className="mt-12">
                <p className="mb-6 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">Regions We Currently Serve</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {regions.map((region) => (
                    <span
                      key={region}
                      className="rounded-full bg-white/[0.03] px-5 py-2 text-[13px] font-medium tracking-wide text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <Link
                    href="https://wa.me/917358847752"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 font-bold text-black shadow-lg transition-all hover:bg-gray-100"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-amber-500/20 to-white/0 translate-x-[-150%] skew-x-[-15deg] group-hover:animate-[shimmer_1.5s_infinite]" />
                    <FaWhatsapp className="relative z-10 text-xl text-green-600" />
                    <span className="relative z-10 tracking-wide">Start a Project Today</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Features */}
            <div className="flex flex-col justify-center gap-6 border-t border-white/5 pt-16 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
                >
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-amber-500/0 via-amber-500 to-amber-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <h3 className="font-display text-xl font-bold tracking-tight text-white transition-colors group-hover:text-amber-400">{item.label}</h3>
                  <p className="mt-3 text-[15px] font-light leading-relaxed text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
