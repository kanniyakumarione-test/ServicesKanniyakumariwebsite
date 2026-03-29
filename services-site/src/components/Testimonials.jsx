import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Arun Kumar",
      business: "Restaurant Owner - Nagercoil",
      review:
        "Our restaurant started appearing on Google Maps and we are getting more customers every week. Great service!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Joseph",
      business: "Boutique Owner",
      review:
        "Very professional service. Our website, WhatsApp flow, and campaigns made the business look more premium and brought better enquiries.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahul Das",
      business: "Gym Trainer",
      review:
        "My Google Business profile was optimized perfectly and now I receive daily calls from new clients.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    {
      name: "Maria Thomas",
      business: "Beauty Salon",
      review:
        "Amazing service and support. The website, Google profile, and ad support helped increase bookings.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ]

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
            What
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Clients Say
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Businesses in Nagercoil trust us to improve their digital presence, lead flow, and visibility.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-8"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group relative w-[320px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 transition group-hover:opacity-100" />

                <p className="relative z-10 mb-6 text-sm leading-relaxed text-gray-300">
                  "{item.review}"
                </p>

                <div className="relative z-10 mb-6 flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <div className="relative z-10 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.business}`}
                    loading="lazy"
                    decoding="async"
                    className="h-12 w-12 rounded-full object-cover"
                  />

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
