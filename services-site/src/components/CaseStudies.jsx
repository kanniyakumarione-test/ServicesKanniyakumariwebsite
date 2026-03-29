import { motion } from "framer-motion"

const studies = [
  {
    title: "Restaurant Lead Recovery",
    result: "Calls increased after clearer mobile CTAs and Google visibility improvements.",
    details:
      "We reworked the homepage flow, added direct contact actions, and highlighted location-based trust signals to make booking easier.",
    outcome: "Focus: More calls and WhatsApp inquiries",
  },
  {
    title: "Travel Agency Website Launch",
    result: "A campaign-ready digital setup launched in 5 days for a local agency preparing promotions.",
    details:
      "The project needed speed without sacrificing quality, so we delivered landing pages, inquiry-driven sections, and assets ready for marketing campaigns.",
    outcome: "Focus: Fast launch with campaign support",
  },
  {
    title: "Google Maps Visibility Upgrade",
    result: "Profile improvements helped the business show up better for local service searches.",
    details:
      "We refined categories, business details, imagery, and keywords to strengthen local relevance for nearby search intent.",
    outcome: "Focus: Better local ranking signals",
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" aria-labelledby="case-studies-heading" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Case Studies</p>
          <h2 id="case-studies-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            Practical Wins for
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Local Businesses
            </span>
          </h2>
          <p className="mt-6 text-gray-400">
            These examples show the kind of business outcomes we aim for: more calls, better
            visibility, smoother operations, and faster launch timelines.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {studies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">{study.outcome}</p>
              <h3 className="mt-4 text-2xl font-semibold">{study.title}</h3>
              <p className="mt-4 text-lg text-white">{study.result}</p>
              <p className="mt-5 text-sm leading-relaxed text-gray-400">{study.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
