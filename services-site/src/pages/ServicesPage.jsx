"use client";
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import ContactSection from "../components/ContactSection"
import SiteLayout from "../components/SiteLayout"
import WarpText from "../components/WarpText"
import { motion } from "framer-motion"

export default function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-40 pb-12 flex flex-col items-center justify-center">
        <WarpText 
          text={'Digital Solutions for\nBusinesses Worldwide'}
          color="#fbbf24"
          fontSize="clamp(2.5rem, 5vw, 4.5rem)"
          fontFamily="'Playfair Display', serif"
          fontWeight={600}
          className="w-full max-w-[1200px] h-[180px] md:h-[220px]"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-3xl text-lg text-gray-400 text-center px-6 font-sans leading-relaxed tracking-wide"
        >
          Browse our website development, custom software, automation, SEO, Google Business, Google Ads, and Meta Ads services — delivered remotely for growing businesses everywhere.
        </motion.p>
      </section>
      <Services variant="full" hideHeader={true} />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </SiteLayout>
  )
}
