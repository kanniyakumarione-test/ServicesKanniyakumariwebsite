import { motion } from "framer-motion"

const studies = [
  {
    title: "Restaurant Lead Recovery",
    metric: "+3× more WhatsApp inquiries",
    metricSub: "in the first 30 days",
    result: "Calls and WhatsApp messages tripled after restructuring mobile CTAs and Google Maps visibility.",
    details:
      "We reworked the homepage flow, added direct contact actions, and highlighted location-based trust signals. The Google Business profile was updated with geo-optimized categories and photos.",
    outcome: "Focus: More calls and WhatsApp inquiries",
  },
  {
    title: "Travel Agency Website Launch",
    metric: "Launched in 5 days",
    metricSub: "fully campaign-ready",
    result: "A complete digital setup — landing pages, inquiry flow, and campaign assets — delivered in under a week.",
    details:
      "The project needed speed without sacrificing quality. We delivered multi-section landing pages, WhatsApp inquiry integration, and pre-designed ad creatives ready for Meta Ads from day one.",
    outcome: "Focus: Fast launch with campaign support",
  },
  {
    title: "Google Maps Visibility Upgrade",
    metric: "Top 3 local results",
    metricSub: "from page 2+ in 6 weeks",
    result: "Profile improvements moved the business from page 2 of local results to the top 3 map pack positions.",
    details:
      "We refined categories, business details, photo strategy, and keyword signals to strengthen local relevance for high-intent nearby searches including service-specific queries.",
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
            Real Results for{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>
          <p className="mt-6 text-gray-400">
            Real outcomes from real projects — more calls, better visibility, smoother operations, and faster timelines.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {studies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">{study.outcome}</p>
              <h3 className="mt-4 text-2xl font-semibold">{study.title}</h3>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {study.metric}
                </p>
                <p className="mt-1 text-xs text-gray-400">{study.metricSub}</p>
              </div>

              <p className="mt-4 text-base text-white">{study.result}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400">{study.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
