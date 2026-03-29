import { motion } from "framer-motion"

const areas = [
  "Nagercoil",
  "Kanyakumari",
  "Marthandam",
  "Colachel",
  "Kuzhithurai",
  "Karungal",
  "Suchindram",
  "Kulasekaram",
]

export default function ServiceAreas() {
  return (
    <section id="service-areas" aria-labelledby="service-areas-heading" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Service Areas</p>
          <h2 id="service-areas-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            Serving Businesses Across
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Kanyakumari District
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-gray-400">
            If you are searching for website help, software, automation, ads support, or
            Google Business setup in Kanyakumari, we work with businesses across nearby
            towns and service belts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-gray-200"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10 p-8"
        >
          <h3 className="text-2xl font-semibold">Local SEO Focus</h3>
          <p className="mt-4 text-gray-400">
            We structure service pages and content around the places your customers already use
            in search, maps, and voice queries.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-gray-300">
            <li>Website Developer in Nagercoil</li>
            <li>Software and Automation Services in Kanyakumari</li>
            <li>Google Business Profile Setup in Marthandam</li>
            <li>Google Ads and Meta Ads Support in Colachel</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
