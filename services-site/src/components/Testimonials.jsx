import { useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { FaStar } from "react-icons/fa"

const testimonials = [
  {
    name: "Arun Kumar",
    business: "Restaurant Owner · Tamil Nadu",
    review:
      "Our restaurant started appearing on Google Maps and we are getting more customers every week. The Google Business setup was handled perfectly.",
    initials: "AK",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Priya Joseph",
    business: "Boutique Owner · Kanyakumari",
    review:
      "Very professional service. Our website, WhatsApp flow, and campaigns made the business look more premium and brought better enquiries within the first month.",
    initials: "PJ",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Rahul Das",
    business: "Gym Trainer · Marthandam",
    review:
      "My Google Business profile was optimized perfectly and now I receive daily calls from new clients. Best investment I made for my gym.",
    initials: "RD",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Maria Thomas",
    business: "Beauty Salon · Colachel",
    review:
      "Amazing service and support. The website, Google profile, and ad support helped increase bookings by over 40% in 2 months.",
    initials: "MT",
    color: "from-rose-500 to-orange-500",
  },
  {
    name: "Suresh Nair",
    business: "Travel Agency · South India",
    review:
      "We launched our campaign-ready digital setup in under a week. The landing pages converted visitors into direct WhatsApp inquiries from day one.",
    initials: "SN",
    color: "from-amber-500 to-yellow-500",
  },
  {
    name: "Deepa Krishnan",
    business: "Clinic Owner · Kuzhithurai",
    review:
      "Our clinic went from invisible on Google to appearing in the top 3 local results. The automation also saved our front desk hours of manual work.",
    initials: "DK",
    color: "from-indigo-500 to-blue-500",
  },
]

export default function Testimonials() {
  const controls = useAnimationControls()
  const isHovered = useRef(false)

  const handleHoverStart = () => {
    isHovered.current = true
    controls.stop()
  }

  const handleHoverEnd = () => {
    isHovered.current = false
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration: 30, repeat: Infinity, ease: "linear" },
    })
  }

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Testimonials</p>
          <h2 id="testimonials-heading" className="mt-6 text-4xl font-bold md:text-6xl">
            What{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Businesses across India and worldwide trust us to improve their digital presence, lead flow, and growth.
          </p>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={handleHoverStart}
          onMouseLeave={handleHoverEnd}
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />

          <motion.div
            animate={controls}
            initial={{ x: "0%" }}
            onViewportEnter={() => {
              controls.start({
                x: ["0%", "-50%"],
                transition: { duration: 30, repeat: Infinity, ease: "linear" },
              })
            }}
            className="flex w-max gap-8"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group relative flex w-[320px] shrink-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 transition group-hover:opacity-100" />

                <div className="relative z-10 mb-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="relative z-10 mb-6 text-sm leading-relaxed text-gray-300">
                  &ldquo;{item.review}&rdquo;
                </p>

                <div className="relative z-10 mt-auto flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${item.color}`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="mb-4 text-3xl font-bold">Ready to Grow Your Business?</h3>
          <p className="mb-8 text-gray-400">Get the right mix of website, software, automation, SEO, and ads support.</p>
          <a
            href="https://wa.me/917358847752"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 transition hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
