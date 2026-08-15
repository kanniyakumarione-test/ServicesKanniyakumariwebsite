"use client";
import { motion } from "framer-motion"
import BorderGlow from './BorderGlow';

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
    title: "Travel Company Website Launch",
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <p className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6">Case Studies</p>
          <h2 id="case-studies-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            Real Results for<br />
            <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-2 block tracking-normal">
              Growing Businesses
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-gray-400 font-light leading-relaxed text-sm md:text-base">
            Real outcomes from real projects — more calls, better visibility, smoother operations, and faster timelines.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {studies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group flex flex-col h-full"
            >
              <BorderGlow
                className="flex flex-col h-full p-8 md:p-10 transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
                backgroundColor="#0a0a0a"
                glowColor="38 92 50"
              >
                <p className="relative z-10 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-amber-500">
                  {study.outcome}
                </p>
                <h3 className="relative z-10 mt-5 text-2xl font-bold tracking-tight text-white group-hover:text-amber-100 transition-colors">
                  {study.title}
                </h3>

                <div className="relative z-10 mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-6 py-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                  <p className="font-display text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                    {study.metric}
                  </p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {study.metricSub}
                  </p>
                </div>

                <p className="relative z-10 mt-6 text-[15px] font-medium text-gray-200 leading-relaxed">
                  {study.result}
                </p>
                <p className="relative z-10 mt-4 flex-1 text-sm font-light leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                  {study.details}
                </p>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
