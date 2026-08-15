"use client";
import { motion } from "framer-motion"

const comparison = [
  {
    before: "Old site looked outdated and had no clear call-to-action.",
    after: "Modern landing page with strong trust signals and direct lead buttons.",
  },
  {
    before: "Business was hard to find on mobile and loaded slowly.",
    after: "Responsive layout with faster load times and mobile-first sections.",
  },
  {
    before: "Visitors were browsing but not contacting the business.",
    after: "Structured inquiry flow with pricing, FAQs, and project contact form.",
  },
]

export default function BeforeAfter() {
  return (
    <section id="before-after" aria-labelledby="before-after-heading" className="relative py-32 bg-[#050505]">
      {/* Abstract Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
            The Transformation
          </p>
          <h2 id="before-after-heading" className="mt-8 text-4xl font-display font-medium leading-tight tracking-tight md:text-6xl text-white">
            A Better Website Changes
            <span className="block text-gray-500 font-light mt-2">
              How Customers Respond
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line Desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-24">
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-center justify-between w-full group"
              >
                
                {/* Before (Left) */}
                <div className="w-full md:w-[45%] text-center md:text-right pr-0 md:pr-12 relative">
                   <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-600 mb-4 block">Before</span>
                   <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                     {item.before}
                   </p>
                </div>

                {/* Node (Center) */}
                <div className="w-14 h-14 rounded-full border border-white/10 bg-[#0a0a0a] z-10 flex items-center justify-center my-8 md:my-0 shadow-[0_0_30px_rgba(245,158,11,0.0)] transition-all duration-500 group-hover:border-amber-500/30 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] relative">
                   {/* Animated line crossing through node horizontally on mobile */}
                   <div className="md:hidden absolute top-1/2 left-[-50vw] right-[-50vw] h-[1px] bg-white/5 -z-10" />
                   
                   <div className="w-3 h-3 rounded-full bg-amber-500/20 transition-all duration-500 group-hover:bg-amber-500 group-hover:scale-150 relative">
                     <div className="absolute inset-0 rounded-full bg-amber-500 animate-ping opacity-0 group-hover:opacity-40" />
                   </div>
                </div>

                {/* After (Right) */}
                <div className="w-full md:w-[45%] text-center md:text-left pl-0 md:pl-12 relative">
                   <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500 mb-4 block">After</span>
                   <p className="text-white font-medium text-lg md:text-2xl leading-relaxed">
                     {item.after}
                   </p>
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
