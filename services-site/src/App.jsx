import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Technologies from "./components/Technologies"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Pricing from "./components/Pricing"
import GoogleBusiness from "./components/GoogleBusiness"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import WhatsApp from "./components/WhatsApp"
import Phone from "./components/Phone"
import WhyChooseUs from "./components/WhyChooseUs"
import Industries from "./components/Industries"
import ServiceAreas from "./components/ServiceAreas"
import BeforeAfter from "./components/BeforeAfter"
import CaseStudies from "./components/CaseStudies"
import Faq from "./components/Faq"
import ContactSection from "./components/ContactSection"
import SeoLandingLinks from "./components/SeoLandingLinks"
import ClientTrustStrip from "./components/ClientTrustStrip"
import logo from "./assets/softgenz.png"

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            <motion.img
              src={logo}
              alt="SOFTGENZ loading screen"
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: 1.1, opacity: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
              className="h-28 w-28 object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <Navbar />

        <main id="main-content">
          <Hero />
          <Technologies />
          <Services />
          <WhyChooseUs />
          <Industries />
          <ServiceAreas />
          <Portfolio />
          <BeforeAfter />
          <CaseStudies />
          <ClientTrustStrip />
          <Pricing />
          <GoogleBusiness />
          <Faq />
          <ContactSection />
          <SeoLandingLinks />
          <Testimonials />
        </main>

        <Footer />
        <WhatsApp />
        <Phone />
      </div>
    </div>
  )
}

export default App
