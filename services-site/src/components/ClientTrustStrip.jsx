"use client";
import { motion } from "framer-motion"

const labels = [
  "Restaurants & Cafés",
  "Clinics & Healthcare",
  "Salons & Spas",
  "Gyms & Fitness Studios",
  "Travel & Tourism",
  "Retail & E-commerce",
  "Freelancers & Trainers",
  "Agencies & Consultants",
  "SaaS & Tech Startups",
]

export default function ClientTrustStrip() {
  return (
    <section aria-label="Business types supported" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative rounded-[2.5rem] border border-white/5 bg-[#0a0a0a]/40 px-6 py-16 backdrop-blur-2xl md:px-12 md:py-20 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-amber-500/5 blur-[100px]" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-white/5 blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <p className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6">
              Who We Work With
            </p>
            <h2 className="text-3xl font-bold md:text-5xl font-display leading-[1.1] tracking-tight">
              Supporting Business Categories<br/>
              <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-2 block tracking-normal">
                Across the Globe
              </span>
            </h2>
            <p className="mt-8 text-gray-400 font-light max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              We deliver websites, software, automation, SEO, and ads support for businesses
              of every size — from solo operators to growing enterprises worldwide.
            </p>
          </motion.div>

          <div className="relative z-10 mt-14 flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
            {labels.map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 md:px-8 md:py-4 backdrop-blur-md transition-all hover:border-amber-500/30 hover:bg-white/[0.04] shadow-xl hover:shadow-amber-500/5 cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative z-10 text-[13px] md:text-sm font-light tracking-wide text-gray-300 group-hover:text-amber-100 transition-colors">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
