import { motion } from "framer-motion"
import { FaLaptopCode, FaServer, FaRobot, FaGoogle, FaCheckCircle } from "react-icons/fa"

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      desc: "Modern responsive websites designed to help businesses attract more customers online.",
      features: [
        "SEO optimized structure",
        "Ultra fast performance",
        "Mobile-first responsive design",
        "Contact forms and lead capture",
      ],
    },
    {
      icon: <FaServer />,
      title: "Custom Web Applications",
      desc: "Powerful software systems built to automate and simplify business operations.",
      features: [
        "Attendance systems",
        "Billing and invoicing software",
        "Admin dashboards",
        "Cloud hosting integration",
      ],
    },
    {
      icon: <FaRobot />,
      title: "AI Powered Tools",
      desc: "Advanced AI features that help businesses automate communication and content.",
      features: [
        "AI chatbots",
        "Automation tools",
        "Image to alt text generators",
        "API integrations",
      ],
    },
    {
      icon: <FaGoogle />,
      title: "Google Business Optimization",
      desc: "Improve visibility on Google Maps and attract more local customers.",
      features: [
        "Profile setup",
        "SEO optimization",
        "Review management",
        "Local ranking improvement",
      ],
    },
  ]

  return (
    <section id="services" aria-labelledby="services-heading" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Services</p>
          <h2 id="services-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            Digital Solutions for
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Modern Businesses
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-gray-400">
            We help businesses in Nagercoil and Kanyakumari grow online with modern
            websites, automation tools and digital solutions designed for performance
            and scalability.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 transition duration-500 group-hover:via-purple-500/20" />
              <div className="mb-6 text-3xl text-blue-400">{service.icon}</div>

              <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
              <p className="mb-6 text-gray-400">{service.desc}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <FaCheckCircle className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <h3 className="mb-12 text-center text-3xl font-bold">
            Our Simple <span className="text-blue-400">Development Process</span>
          </h3>

          <div className="grid gap-8 text-center md:grid-cols-4">
            {[
              {
                title: "Consultation",
                desc: "We understand your business and goals.",
              },
              {
                title: "Design",
                desc: "We design a modern UI and experience.",
              },
              {
                title: "Development",
                desc: "We build fast and scalable solutions.",
              },
              {
                title: "Launch",
                desc: "Your website goes live with full support.",
              },
            ].map((step) => (
              <motion.div
                key={step.title}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <h4 className="mb-2 text-xl font-semibold">{step.title}</h4>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
