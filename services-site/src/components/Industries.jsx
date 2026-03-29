import { motion } from "framer-motion"

const industries = [
  "Restaurants",
  "Salons",
  "Gyms",
  "Travel Agencies",
  "Schools",
  "Clinics",
  "Retail Shops",
  "Service Providers",
]

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Industries We Serve</p>
          <h2 id="industries-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            Digital Services for
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Everyday Local Businesses
            </span>
          </h2>
          <p className="mt-6 text-gray-400">
            From small shops to growing service businesses, we build digital systems that
            match how local customers search, compare, contact, and book.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-center text-lg font-semibold backdrop-blur-xl"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
