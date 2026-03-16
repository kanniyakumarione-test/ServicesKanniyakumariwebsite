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
    { label: "Services", link: "#services" },
    { label: "Portfolio", link: "#portfolio" },
    { label: "Pricing", link: "#pricing" },
    { label: "Testimonials", link: "#testimonials" }
  ]

  return (

    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 flex justify-center top-4"
    >

      {/* Floating navbar container */}

      <div className={`transition-all duration-500
      ${scrolled ? "backdrop-blur-xl bg-black/60 shadow-xl border border-white/10" : "bg-black/30 backdrop-blur-md"}
      rounded-2xl px-8 py-3 w-[95%] max-w-7xl`}>

        <div className="flex items-center justify-between">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <img src={logo} alt="Kanniyakumarione logo" className="h-10 w-10" />

            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Kanniyakumarione
            </span>

          </div>


          {/* Desktop menu */}

          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((item, i) => (

              <a
                key={i}
                href={item.link}
                className="relative text-gray-300 hover:text-white transition font-medium group"
              >

                {item.label}

                {/* animated underline */}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>

              </a>

            ))}

          </nav>


          {/* CTA button */}

          <div className="hidden md:block">

            <a
              href="https://wa.me/917358847752"
              className="relative px-6 py-2 rounded-xl text-white font-medium
              bg-gradient-to-r from-blue-500 to-purple-600
              hover:scale-105 transition duration-300 shadow-lg"
            >

              Get Quote

            </a>

          </div>


          {/* Mobile icon */}

          <div
            className="md:hidden text-white text-xl"
            onClick={() => setOpen(!open)}
          >

            {open ? <FaTimes /> : <FaBars />}

          </div>

        </div>

      </div>


      {/* Mobile menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 w-[90%] bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:hidden"
          >

            <div className="flex flex-col gap-6 text-center">

              {navLinks.map((item, i) => (

                <a
                  key={i}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="text-lg text-gray-300 hover:text-white transition"
                >

                  {item.label}

                </a>

              ))}

              <a
                href="https://wa.me/917358847752"
                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl text-white"
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