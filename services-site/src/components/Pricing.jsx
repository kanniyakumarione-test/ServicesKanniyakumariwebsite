import { motion } from "framer-motion"

export default function Pricing() {
  const plans = [
    {
      name: "Starter Presence",
      price: "Rs. 5,000",
      tag: "Best for Small Businesses",
      features: [
        "Single-page website or landing page",
        "Mobile responsive design",
        "WhatsApp and lead form setup",
        "Basic SEO setup",
        "Google Business guidance",
        "Fast loading performance",
        "1 Month Support",
      ],
      popular: false,
    },
    {
      name: "Business Growth",
      price: "Rs. 15,000",
      tag: "Most Popular",
      features: [
        "Multi-page business website",
        "Advanced SEO optimization",
        "Google Business Profile setup",
        "WhatsApp integration and lead capture",
        "Basic automation workflows",
        "Starter Google Ads or Meta Ads setup",
        "Speed optimization",
        "3 Months Support",
      ],
      popular: true,
    },
    {
      name: "Advanced Digital System",
      price: "Rs. 35,000",
      tag: "Advanced Digital Solution",
      features: [
        "Custom software or web application",
        "Admin dashboard and database integration",
        "Automation and AI workflows",
        "Advanced SEO strategy",
        "Google Ads or Meta Ads management setup",
        "Performance optimization",
        "Process streamlining for operations",
        "6 Months Support",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Pricing</p>
          <h2 id="pricing-heading" className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Affordable
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Service Packages
            </span>
            {" "}for Growing Businesses
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Choose the right mix of website work, software, automation, SEO, and ad
            support to help your business attract customers and operate more efficiently.
          </p>
        </motion.div>

        <div className="mt-20 grid items-stretch gap-10 lg:grid-cols-3">
          {plans.map((plan) => {
            const isPopular = plan.popular

            return (
              <motion.div
                key={plan.name}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`relative flex h-full rounded-3xl p-[1px] ${
                  isPopular
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    : "bg-white/10"
                }`}
              >
                <div
                  className={`flex h-full w-full flex-col rounded-3xl p-6 backdrop-blur-xl md:p-10 ${
                    isPopular ? "bg-black/70" : "bg-black/60"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-1 text-xs font-semibold shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <h3 className="mb-3 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-6 text-sm text-gray-400">{plan.tag}</p>

                  <div className="mb-10 flex items-end gap-2">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-sm text-gray-400">/project</span>
                  </div>

                  <ul className="mb-10 flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="flex min-w-8 items-center justify-center rounded-full bg-green-500/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-green-300">
                          Yes
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/917358847752"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block rounded-xl py-4 text-center font-semibold transition ${
                      isPopular
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    Start This Project
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="mb-6 text-3xl font-bold">Why Businesses Choose Us</h3>

          <div className="grid gap-10 text-gray-400 md:grid-cols-3">
            <div>
              <h4 className="mb-2 text-xl font-semibold text-white">Fast Delivery</h4>
              <p>Most website and campaign setups move quickly with a clear execution plan.</p>
            </div>

            <div>
              <h4 className="mb-2 text-xl font-semibold text-white">Flexible Scope</h4>
              <p>We can combine websites, automation, SEO, and ad support in one package.</p>
            </div>

            <div>
              <h4 className="mb-2 text-xl font-semibold text-white">Business Growth</h4>
              <p>Services are planned to improve leads, conversions, and day-to-day operations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
