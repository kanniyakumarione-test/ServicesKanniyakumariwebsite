import { motion } from "framer-motion"

const comparison = [
  {
    before: "Old site looked outdated and had no clear call-to-action.",
    after: "Modern landing page with strong trust signals and direct lead buttons.",
  },
  {
    before: "Business was hard to find on mobile and loaded slowly.",
    after: "Responsive layout with faster load times and mobile-first sections.",
  },
  {
    before: "Visitors were browsing but not contacting the business.",
    after: "Structured inquiry flow with pricing, FAQs, and project contact form.",
  },
]

export default function BeforeAfter() {
  return (
    <section id="before-after" aria-labelledby="before-after-heading" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Before and After</p>
          <h2 id="before-after-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            A Better Website Changes
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              How Customers Respond
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {comparison.map((item, index) => (
            <motion.div
              key={item.before}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="grid gap-[1px] overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2"
            >
              <div className="bg-red-500/10 p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">Before</p>
                <p className="text-lg text-gray-200">{item.before}</p>
              </div>
              <div className="bg-green-500/10 p-8">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-green-300">After</p>
                <p className="text-lg text-gray-200">{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
