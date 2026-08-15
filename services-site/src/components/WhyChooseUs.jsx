"use client";
import { motion } from "framer-motion"
import { FaBolt, FaHandsHelping, FaMobileAlt, FaRocket } from "react-icons/fa"
import DarkVeil from './DarkVeil';

const points = [
  {
    icon: <FaBolt />,
    title: "Fast Execution",
    desc: "From websites to automation and campaigns, we move quickly with a clear scope and delivery plan.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Dedicated Support",
    desc: "Direct, responsive support for businesses anywhere — with practical advice, clear updates, and follow-up help across every project.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Practical Systems",
    desc: "We focus on services that directly improve enquiries, follow-up, operations, and conversions.",
  },
  {
    icon: <FaRocket />,
    title: "After-Launch Help",
    desc: "We stay involved after launch with edits, fixes, optimization, and support across your digital setup.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <p className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6">Why Choose Us</p>
          <h2 id="why-us-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            Built for Businesses That Need<br />
            <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-2 block tracking-normal">
              Real Results
            </span>
          </h2>
          <p className="mt-8 text-gray-400 font-light max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            We focus on speed, clarity, lead generation, and business usefulness so your
            digital setup does more than look good. It helps people discover you, trust you,
            and contact you.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-[3rem] border border-white/5 bg-[#050505] p-6 md:p-12 lg:p-16">
          <div className="absolute inset-0 z-0">
            <DarkVeil 
              hueShift={40}
              noiseIntensity={0.08}
              scanlineIntensity={0.3}
              scanlineFrequency={150}
              speed={0.2}
              warpAmount={0.8}
              className="opacity-40"
            />
            {/* Fade edges to blend the shader softly */}
            <div className="absolute inset-0 bg-[#050505]/50 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
          </div>

          <div className="relative z-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505]/60 p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/30 hover:bg-[#050505]/80 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Icon Container */}
                <div className="relative z-10 mb-8 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-xl text-amber-500 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-500/10 group-hover:border-amber-500/50">
                  {point.icon}
                </div>
                
                <h3 className="relative z-10 mb-4 font-display text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-amber-500 transition-colors">
                  {point.title}
                </h3>
                <p className="relative z-10 text-sm md:text-base leading-relaxed text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
