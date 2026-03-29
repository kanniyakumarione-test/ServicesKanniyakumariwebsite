import { motion } from "framer-motion"
import { FaBolt, FaHandsHelping, FaMobileAlt, FaRocket } from "react-icons/fa"

const points = [
  {
    icon: <FaBolt />,
    title: "Fast Execution",
    desc: "From websites to automation and campaigns, we move quickly with a clear scope and delivery plan.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Local Support",
    desc: "Direct support for businesses in Nagercoil and Kanyakumari with practical advice, updates, and follow-up help.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Practical Systems",
    desc: "We focus on services that directly improve enquiries, follow-up, operations, and conversions.",
  },
  {
    icon: <FaRocket />,
    title: "After-Launch Help",
    desc: "We stay involved after launch with edits, fixes, optimization, and support across your digital setup.",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Why Choose Us</p>
          <h2 id="why-us-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            Built for Local Businesses That Need
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Real Results
            </span>
          </h2>
          <p className="mt-6 text-gray-400">
            We focus on speed, clarity, lead generation, and business usefulness so your
            digital setup does more than look good. It helps people discover you, trust you,
            and contact you.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 text-3xl text-blue-400">{point.icon}</div>
              <h3 className="mb-3 text-2xl font-semibold">{point.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
