"use client";
import Link from 'next/link';
import { motion } from "framer-motion"
import SiteLayout from "../components/SiteLayout"
import PageHero from "../components/PageHero"
import ClientTrustStrip from "../components/ClientTrustStrip"
import ContactSection from "../components/ContactSection"
import { FaGlobeAmericas, FaLaptopCode, FaHandshake } from "react-icons/fa"

import WarpText from "../components/WarpText"

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden pt-40 pb-12 flex flex-col items-center justify-center">
        <WarpText 
          text={'We Build High-Performance\nDigital Systems'}
          color="#fbbf24"
          fontSize="clamp(3rem, 6vw, 5.5rem)"
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
          SOFTGENZ is a digital company focused on delivering fast, effective, and beautifully engineered websites, software, and marketing campaigns to businesses worldwide.
        </motion.p>
      </section>

      <section className="relative overflow-hidden py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                Global Ambition,<br />
                <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent pb-2 pr-2 tracking-normal">Rooted in Engineering.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                We started with a simple belief: growing businesses shouldn't have to hire three different companies to get a website, custom software, and marketing setup. They need one reliable partner who understands how it all connects.
              </p>
              <p className="mt-4 text-lg text-gray-400 leading-relaxed">
                Operating out of Nagercoil, Tamil Nadu, we leverage global talent and world-class technology stacks to build digital solutions that rival top-tier tech companies, but remain accessible to everyday businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {[
                { icon: <FaGlobeAmericas />, title: "Worldwide Clients", desc: "Serving businesses across multiple continents." },
                { icon: <FaLaptopCode />, title: "Modern Stacks", desc: "React, Node, AI, and robust cloud infrastructure." },
                { icon: <FaHandshake />, title: "Partner Approach", desc: "We don't just build, we advise and support." },
              ].map((item, index) => (
                <div key={item.title} className={`rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ${index === 2 ? 'sm:col-span-2' : ''}`}>
                  <div className="mb-4 text-3xl text-yellow-400">{item.icon}</div>
                  <h3 className="mb-2 font-display text-xl font-bold uppercase tracking-widest">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <ClientTrustStrip />
      </div>

      <section className="relative overflow-hidden py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10 p-10 md:p-16 backdrop-blur-xl"
          >
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Ready to Upgrade Your <br className="hidden md:block" />
              <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent pr-2 tracking-normal">Digital Presence?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-gray-400 text-lg">
              Whether you need a brand new website, a custom internal tool, or a team to manage your ad campaigns, we have the expertise to deliver.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex rounded-full bg-amber-500/10 px-8 py-4 font-display text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500 border border-amber-500/50 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all duration-300 hover:scale-105 hover:bg-amber-500 hover:text-black hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
            >
              Discuss Your Project
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  )
}
