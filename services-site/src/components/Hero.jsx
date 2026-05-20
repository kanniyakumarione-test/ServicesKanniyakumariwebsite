import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-xl"
        >
          Websites, Software, Automation, and Digital Growth — Worldwide
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Digital Growth Services for
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}
            Businesses Around the World
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
        >
          Kanniyakumarione helps businesses worldwide with websites, custom software,
          automation systems, SEO, Google Business optimization, Google Ads, and Meta Ads
          that turn attention into real enquiries and sales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/services.html"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 transition hover:scale-105"
          >
            Explore Services
            <FaArrowRight />
          </a>

          <a
            href="https://wa.me/917358847752"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-8 py-4 transition hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-12">
          {[
            { label: "50+", sub: "Projects Delivered" },
            { label: "3+", sub: "Years of Experience" },
            { label: "30+", sub: "Clients Worldwide" },
            { label: "100%", sub: "Remote Friendly" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{stat.label}</p>
              <p className="mt-1 text-sm text-gray-400">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            { label: "Website Development", href: "/website-developer-in-nagercoil.html" },
            { label: "Custom Software", href: "/software-services.html" },
            { label: "Automation", href: "/automation-services.html" },
            { label: "Google Ads", href: "/google-ads-services.html" },
            { label: "Meta Ads", href: "/meta-ads-services.html" },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ scale: 1.08 }}
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl text-gray-200 text-sm transition hover:border-blue-400/40 hover:text-white"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
