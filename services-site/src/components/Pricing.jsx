"use client";
import Link from 'next/link';
import { motion } from "framer-motion"
import { FaCheck } from "react-icons/fa"
import BorderGlow from './BorderGlow';
import LightTunnel from './LightTunnel';

export default function Pricing({ hideHeader = false }) {
  const plans = [
    {
      name: "Starter Presence",
      price: "Rs. 5,000",
      usdPrice: "~$60 USD",
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
      usdPrice: "~$180 USD",
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
      usdPrice: "~$420 USD",
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
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300">Pricing</p>
            <h2 id="pricing-heading" className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
              Affordable
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
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
        )}

        <div className="mt-20 flex flex-col gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = plan.popular

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="w-full group hover:-translate-y-1 transition-transform duration-300"
              >
                <BorderGlow
                  borderRadius={32}
                  backgroundColor={isPopular ? "#0a0a0a" : "#050505"}
                  glowColor={isPopular ? "40 90% 50%" : "40 20% 30%"}
                  animated={isPopular}
                  className="w-full"
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16 p-8 md:p-12 relative z-20 w-full">
                    {/* Popular Highlight Badge */}
                    {isPopular && (
                      <div className="absolute top-0 right-10 -translate-y-1/2 rounded-full border border-amber-500/50 bg-[#0a0a0a] px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] z-30">
                        Most Popular
                      </div>
                    )}

                    {/* Left: Title & Price */}
                    <div className="w-full lg:w-[30%] flex flex-col">
                      <h3 className={`text-2xl md:text-3xl font-display font-medium mb-2 ${isPopular ? "text-amber-500" : "text-white"}`}>
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-500 font-light mb-8 lg:mb-12">{plan.tag}</p>

                      <div className="flex items-end gap-2">
                        <span className="text-4xl md:text-5xl font-display font-medium tracking-tight text-white">{plan.price}</span>
                      </div>
                      <div className="text-sm text-gray-500 font-light mt-2">
                        or {plan.usdPrice} / project
                      </div>
                    </div>

                    {/* Middle: Features */}
                    <div className="w-full lg:w-[45%]">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-gray-400 font-light leading-relaxed">
                            <FaCheck className={`shrink-0 mt-1 ${isPopular ? "text-amber-500" : "text-gray-600"}`} size={12} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: CTA */}
                    <div className="w-full lg:w-[25%] flex justify-start lg:justify-end mt-4 lg:mt-0">
                      <Link
                        href="https://wa.me/917358847752"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full lg:w-auto px-8 py-4 rounded-full text-center text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                          isPopular
                            ? "bg-amber-500 text-black hover:bg-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                            : "border border-white/10 text-white hover:border-white/30 hover:bg-white/5"
                        }`}
                      >
                        Start Project
                      </Link>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-32 relative overflow-hidden rounded-[2rem] border border-white/5"
        >
          {/* WebGL Tunnel Background */}
          <div className="absolute inset-0 z-0">
            <LightTunnel 
              cableColor="#f59e0b"
              pulseColor="#fcd34d"
              tunnelColor="#000000"
              tunnelOpacity={0.8}
              speed={0.03}
              glow={0.3}
              opacity={0.4}
            />
            {/* Fade edges so text is perfectly readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] opacity-80" />
            <div className="absolute inset-0 bg-[#050505]/40" />
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10 p-8 lg:p-16">
            <div className="lg:w-1/3 flex flex-col justify-center">
              <h3 className="text-4xl md:text-5xl font-display font-medium text-white tracking-tight leading-tight">
                Why Businesses <span className="block text-amber-500 font-light">Choose Us</span>
              </h3>
              <p className="mt-8 text-gray-300 font-light leading-relaxed max-w-sm">
                We deliver high-end digital solutions focused on measurable results, zero friction, and streamlined operations.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="relative group">
                <div className="mb-8 w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-md shadow-lg flex items-center justify-center text-amber-500 font-display text-xl transition-all duration-500 group-hover:border-amber-500/80 group-hover:bg-amber-500/20 group-hover:-translate-y-1">
                  01
                </div>
                <h4 className="mb-4 text-xl font-display font-medium text-white group-hover:text-amber-500 transition-colors">Fast Delivery</h4>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  Most website and campaign setups move quickly with a highly structured and clear execution plan.
                </p>
              </div>

              <div className="relative group md:mt-12">
                <div className="mb-8 w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-md shadow-lg flex items-center justify-center text-amber-500 font-display text-xl transition-all duration-500 group-hover:border-amber-500/80 group-hover:bg-amber-500/20 group-hover:-translate-y-1">
                  02
                </div>
                <h4 className="mb-4 text-xl font-display font-medium text-white group-hover:text-amber-500 transition-colors">Flexible Scope</h4>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  We seamlessly combine websites, advanced automation, SEO, and ad support into one unified package.
                </p>
              </div>

              <div className="relative group md:mt-24">
                <div className="mb-8 w-14 h-14 rounded-full border border-white/20 bg-black/50 backdrop-blur-md shadow-lg flex items-center justify-center text-amber-500 font-display text-xl transition-all duration-500 group-hover:border-amber-500/80 group-hover:bg-amber-500/20 group-hover:-translate-y-1">
                  03
                </div>
                <h4 className="mb-4 text-xl font-display font-medium text-white group-hover:text-amber-500 transition-colors">Business Growth</h4>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  Every service is meticulously planned to improve leads, increase conversions, and simplify day-to-day operations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
