import { motion } from "framer-motion"
import SiteLayout from "../components/SiteLayout"
import PageHero from "../components/PageHero"
import ClientTrustStrip from "../components/ClientTrustStrip"
import ContactSection from "../components/ContactSection"
import { FaGlobeAmericas, FaLaptopCode, FaHandshake } from "react-icons/fa"

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="We Build High-Performance"
        highlight="Digital Systems"
        description="Kanniyakumarione is a digital agency focused on delivering fast, effective, and beautifully engineered websites, software, and marketing campaigns to businesses worldwide."
      />

      <section className="relative overflow-hidden py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold md:text-4xl">
                Global Ambition,<br />
                <span className="text-blue-400">Rooted in Engineering.</span>
              </h2>
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                We started with a simple belief: growing businesses shouldn't have to hire three different agencies to get a website, custom software, and marketing setup. They need one reliable partner who understands how it all connects.
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
                  <div className="mb-4 text-3xl text-blue-400">{item.icon}</div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
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
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 p-10 md:p-16 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold md:text-5xl">
              Ready to Upgrade Your <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Digital Presence?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-gray-400 text-lg">
              Whether you need a brand new website, a custom internal tool, or a team to manage your ad campaigns, we have the expertise to deliver.
            </p>
            <a
              href="/contact.html"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
            >
              Discuss Your Project
            </a>
          </motion.div>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  )
}
