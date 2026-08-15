"use client";
import { motion } from "framer-motion"

export default function PageHero({ eyebrow, title, highlight, description }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 bg-[#050505]">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight text-white"
        >
          {title}
          {highlight && (
            <>
              <br />
              <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-2 block tracking-normal">
                {highlight}
              </span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-sm md:text-base font-light leading-relaxed text-gray-400"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
