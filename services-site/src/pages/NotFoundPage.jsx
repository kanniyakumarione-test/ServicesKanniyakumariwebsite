import { motion } from "framer-motion"
import SiteLayout from "../components/SiteLayout"
import { FaArrowLeft, FaHome } from "react-icons/fa"

export default function NotFoundPage() {
  return (
    <SiteLayout>
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-20">
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-[10rem] font-extrabold leading-none bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent select-none">
              404
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold md:text-5xl">
              Page Not Found
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
              The page you are looking for does not exist or may have been moved.
              Head back to the homepage to find what you need.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold transition hover:scale-105"
              >
                <FaHome />
                Go to Homepage
              </a>
              <a
                href="/services.html"
                className="flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
              >
                <FaArrowLeft />
                Browse Services
              </a>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Services", href: "/services.html" },
                { label: "Portfolio", href: "/portfolio.html" },
                { label: "Contact", href: "/contact.html" },
                { label: "Pricing", href: "/pricing.html" },
                { label: "Blog", href: "/blog.html" },
                { label: "FAQ", href: "/faq.html" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-blue-400/40 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  )
}
