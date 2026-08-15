"use client";
import Link from 'next/link';
import { useRef } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { FaStar } from "react-icons/fa"
import BorderGlow from './BorderGlow';

const testimonials = [
  {
    name: "Arun Kumar",
    business: "Restaurant Owner · Tamil Nadu",
    review:
      "Our restaurant started appearing on Google Maps and we are getting more customers every week. The Google Business setup was handled perfectly.",
    initials: "AK",
    color: "from-yellow-500 to-amber-500",
  },
  {
    name: "Priya Joseph",
    business: "Boutique Owner · Kanyakumari",
    review:
      "Very professional service. Our website, WhatsApp flow, and campaigns made the business look more premium and brought better enquiries within the first month.",
    initials: "PJ",
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Rahul Das",
    business: "Gym Trainer · Marthandam",
    review:
      "My Google Business profile was optimized perfectly and now I receive daily calls from new clients. Best investment I made for my gym.",
    initials: "RD",
    color: "from-emerald-500 to-yellow-500",
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
    business: "Travel Company · South India",
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
    color: "from-indigo-500 to-yellow-500",
  },
]

export default function Testimonials() {
  // Animation controls no longer needed for static grid

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-24 text-center">
          <p className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6">Testimonials</p>
          <h2 id="testimonials-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            What{" "}
            <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-gray-400 font-light leading-relaxed text-sm md:text-base">
            Businesses across India and worldwide trust us to improve their digital presence, lead flow, and growth.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex h-full flex-col ${index === 1 || index === 4 ? "lg:translate-y-8" : ""}`}
              >
                <BorderGlow
                  className="group relative flex h-full flex-col p-8 md:p-10 transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
                  backgroundColor="#0a0a0a"
                  glowColor="38 92 50"
                  animated={true}
                  borderRadius={32}
                >
                  <div className="relative z-10 mb-6 flex text-amber-500 gap-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <p className="relative z-10 mb-8 flex-1 text-[15px] font-light leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                    &ldquo;{item.review}&rdquo;
                  </p>

                  <div className="relative z-10 mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] ${item.color}`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm tracking-wide text-gray-200">{item.name}</h3>
                      <p className="text-xs font-light text-amber-500/80">{item.business}</p>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="mb-4 font-display text-3xl md:text-4xl font-bold tracking-tight text-white">Ready to Grow Your Business?</h3>
          <p className="mb-10 text-gray-400 font-light text-base md:text-lg">Get the right mix of website, software, automation, SEO, and ads support.</p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              href="https://wa.me/917358847752"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-10 py-5 font-bold text-black shadow-[0_0_40px_rgba(245,158,11,0.3)] transition-all hover:shadow-[0_0_60px_rgba(245,158,11,0.5)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 translate-x-[-150%] skew-x-[-15deg] group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative tracking-wide">Start Your Project</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
