import { motion } from "framer-motion"

export default function PageHero({ eyebrow, title, highlight, description }) {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="mx-auto max-w-6xl px-6 pb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight md:text-6xl"
        >
          {title}
          {highlight ? (
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              {highlight}
            </span>
          ) : null}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-gray-400"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
