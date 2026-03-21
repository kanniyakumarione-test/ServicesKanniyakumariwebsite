import { motion } from "framer-motion"
import { FaGoogle, FaMapMarkerAlt, FaStar, FaPhoneAlt, FaCheckCircle } from "react-icons/fa"

export default function GoogleBusiness() {
  const features = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Google Maps Visibility",
      desc: "Your business appears when people search nearby services.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "More Calls",
      desc: "Customers can call your business directly from Google.",
    },
    {
      icon: <FaStar />,
      title: "Customer Reviews",
      desc: "Build trust with ratings and reviews from customers.",
    },
    {
      icon: <FaGoogle />,
      title: "Higher Local Ranking",
      desc: "Optimize your profile to rank above competitors.",
    },
  ]

  const plans = [
    {
      name: "Basic Setup",
      price: "Rs. 2,000",
      features: [
        "Google Business Profile Creation",
        "Business Information Setup",
        "Location Verification Help",
        "Contact Details Setup",
        "Business Category Setup",
      ],
    },
    {
      name: "Growth Package",
      price: "Rs. 5,000",
      features: [
        "Complete Profile Optimization",
        "SEO Keyword Optimization",
        "Business Photos Upload",
        "Review Strategy",
        "Google Maps Ranking Improvements",
      ],
      popular: true,
    },
    {
      name: "Advanced Local SEO",
      price: "Rs. 10,000",
      features: [
        "Full Google Business Optimization",
        "Monthly Post Updates",
        "Review Management",
        "Local SEO Strategy",
        "Competitor Analysis",
      ],
    },
  ]

  return (
    <section
      id="google-business"
      aria-labelledby="google-business-heading"
      className="relative overflow-hidden py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
            Google Business Profile
          </p>

          <h2 id="google-business-heading" className="mt-6 text-4xl font-bold md:text-6xl">
            Get Customers from
            <span className="bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
              {" "}
              Google Maps
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Many customers search businesses directly on Google. If your business is not
            visible on Google Maps, you are losing customers. We help local businesses
            appear in search results and attract nearby customers.
          </p>
        </motion.div>

        <div className="mb-32 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8"
            >
              <div className="mb-5 text-3xl text-blue-400">{feature.icon}</div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-red-500/10 to-yellow-500/10 opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        <div className="mb-20 text-center">
          <h3 className="mb-10 text-3xl font-bold">How We Setup Your Google Business</h3>

          <div className="grid gap-8 text-gray-400 md:grid-cols-4">
            <div>
              <h4 className="text-lg font-semibold text-white">1. Create Profile</h4>
              <p>We create and verify your Google Business listing.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">2. Optimize Profile</h4>
              <p>We add keywords, images and business details.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">3. Improve Ranking</h4>
              <p>We optimize your listing to appear in local search.</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white">4. Attract Customers</h4>
              <p>Your business gets calls, directions and reviews.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className={`relative rounded-3xl border p-6 backdrop-blur-xl md:p-10 ${
                plan.popular ? "scale-105 border-blue-400 bg-white/10" : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-red-500 px-4 py-1 text-xs">
                  Most Popular
                </div>
              )}

              <h3 className="mb-4 text-2xl font-bold">{plan.name}</h3>
              <div className="mb-8 text-4xl font-bold">{plan.price}</div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                    <FaCheckCircle className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/917358847752"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-gradient-to-r from-blue-500 to-red-500 py-3 text-center transition hover:scale-105"
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h3 className="mb-4 text-3xl font-bold">Start Getting Customers from Google Today</h3>

          <p className="mb-8 text-gray-400">
            We help businesses appear in Google Maps and local search results.
          </p>

          <a
            href="https://wa.me/917358847752"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-to-r from-blue-500 to-red-500 px-8 py-4 transition hover:scale-105"
          >
            Setup My Google Business
          </a>
        </div>
      </div>
    </section>
  )
}
