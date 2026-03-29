import { motion } from "framer-motion"

const labels = [
  "Restaurants",
  "Salons",
  "Gyms",
  "Clinics",
  "Travel Agencies",
  "Retail Shops",
  "Trainers",
  "Service Providers",
  "Medical Practices",
]

export default function ClientTrustStrip() {
  return (
    <section aria-label="Business types supported" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-transparent px-6 py-10 backdrop-blur-xl md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
              Businesses We Commonly Work With
            </p>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              Supporting Local Business Categories Across
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Kanyakumari
              </span>
            </h2>
            <p className="mt-4 text-gray-400">
              We deliver websites, software, automation, SEO, and ads support for practical
              local businesses that need better visibility and more direct customer enquiries.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {labels.map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-center text-base font-medium text-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
