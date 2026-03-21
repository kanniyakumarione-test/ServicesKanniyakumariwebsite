import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Home", link: "#home" },
    { label: "Services", link: "#services" },
    { label: "Portfolio", link: "#portfolio" },
    { label: "Pricing", link: "#pricing" },
    { label: "Google Business", link: "#google-business" },
    { label: "Testimonials", link: "#testimonials" },
  ]

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 z-50 flex w-full justify-center"
    >
      <div
        className={`w-[95%] max-w-7xl rounded-2xl px-8 py-3 transition-all duration-500 ${
          scrolled
            ? "border border-white/10 bg-black/60 shadow-xl backdrop-blur-xl"
            : "bg-black/30 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Kanniyakumarione home">
            <img src={logo} alt="Kanniyakumarione logo" className="h-10 w-10" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent">
              Kanniyakumarione
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="group relative font-medium text-gray-300 transition hover:text-white"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/917358847752"
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-2 font-medium text-white shadow-lg transition duration-300 hover:scale-105"
            >
              Get Quote
            </a>
          </div>

          <button
            type="button"
            className="text-xl text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-menu"
            className="absolute top-20 w-[90%] rounded-2xl border border-white/10 bg-black/90 p-8 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="text-lg text-gray-300 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://wa.me/917358847752"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
