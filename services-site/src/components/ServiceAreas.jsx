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
    <section id="service-areas" aria-labelledby="service-areas-heading" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Global Reach</p>
          <h2 id="service-areas-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            We Work With Businesses{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anywhere in the World
            </span>
          </h2>
          <p className="mt-6 text-gray-400">
            From solo founders to multi-location companies — we deliver websites, software, automation,
            SEO, and ads support fully remotely with no limits on where you operate.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                <FaGlobe />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Regions We Serve</p>
            </div>

            <h3 className="text-2xl font-semibold">
              Based in India. Delivering{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Worldwide.
              </span>
            </h3>

            <p className="mt-4 text-gray-400">
              Our team is based in Tamil Nadu, India. We have worked with clients across
              multiple countries and time zones — all delivered remotely, on time, and to spec.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200"
                >
                  {region}
                </span>
              ))}
              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                + Anywhere Else
              </span>
            </div>

            <a
              href="https://wa.me/917358847752"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              <FaWhatsapp />
              Start a Project Today
            </a>
          </motion.div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
