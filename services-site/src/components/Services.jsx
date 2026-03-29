import { motion } from "framer-motion"
import {
  FaLaptopCode,
  FaServer,
  FaRobot,
  FaGoogle,
  FaBullhorn,
  FaCamera,
  FaPalette,
  FaPhotoVideo,
  FaImage,
  FaCheckCircle,
} from "react-icons/fa"

const serviceGroups = [
  {
    title: "Web and Systems",
    summary: "Build the core digital systems your business runs on.",
    services: [
      {
        icon: <FaLaptopCode />,
        title: "Website Development",
        href: "/website-developer-in-nagercoil.html",
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
        href: "/software-services.html",
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
        title: "AI Services",
        href: "/ai-services.html",
        desc: "Practical AI solutions that improve workflows, communication, and business efficiency.",
        features: [
          "AI chatbots",
          "Content workflows",
          "Business task support",
          "API integrations",
        ],
      },
      {
        icon: <FaRobot />,
        title: "Automation Systems",
        href: "/automation-services.html",
        desc: "Workflow automation that reduces manual work and improves follow-up speed.",
        features: [
          "Lead automation workflows",
          "WhatsApp and form integrations",
          "Task triggers",
          "Connected business systems",
        ],
      },
    ],
  },
  {
    title: "Growth and Visibility",
    summary: "Get discovered more easily and turn attention into enquiries.",
    services: [
      {
        icon: <FaGoogle />,
        title: "Google Business Optimization",
        href: "/google-business.html",
        desc: "Improve visibility on Google Maps and attract more local customers.",
        features: [
          "Profile setup",
          "SEO optimization",
          "Review management",
          "Local ranking improvement",
        ],
      },
      {
        icon: <FaBullhorn />,
        title: "Google Ads and Meta Ads",
        href: "/google-ads-services.html",
        desc: "Paid ad campaigns that help local businesses reach ready-to-buy customers faster.",
        features: [
          "Google Search Ads",
          "Meta Ads campaign setup",
          "Lead generation campaigns",
          "Ad creative and optimization",
        ],
      },
    ],
  },
  {
    title: "Creative and Content",
    summary: "Strengthen your brand presentation with better visual assets.",
    services: [
      {
        icon: <FaPalette />,
        title: "Logo Design",
        href: "/logo-design-services.html",
        desc: "Brand identity and logo design for businesses that need a more professional and memorable presence.",
        features: [
          "Logo concepts",
          "Brand direction",
          "Profile visuals",
          "Identity assets",
        ],
      },
      {
        icon: <FaPhotoVideo />,
        title: "Video Editing",
        href: "/video-editing-services.html",
        desc: "Video editing for promotions, reels, ads, explainers, and social media content.",
        features: [
          "Promo edits",
          "Reels editing",
          "Ad creatives",
          "Social video content",
        ],
      },
      {
        icon: <FaImage />,
        title: "Photo Editing",
        href: "/photo-editing-services.html",
        desc: "Photo editing for products, branding visuals, campaigns, menus, and social media content.",
        features: [
          "Retouching",
          "Product edits",
          "Campaign visuals",
          "Social-ready images",
        ],
      },
      {
        icon: <FaCamera />,
        title: "Photoshoot Support",
        href: "/photoshoot-services.html",
        desc: "Photoshoot planning and content support for branding, products, promotions, and campaigns.",
        features: [
          "Brand shoots",
          "Product shoots",
          "Promo visuals",
          "Campaign content",
        ],
      },
    ],
  },
]

export default function Services({ variant = "full" }) {
  const compactGroups = serviceGroups.map((group) => ({
    ...group,
    labels: group.services.slice(0, 4).map((service) => service.title),
  }))

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
            We help businesses in Nagercoil and Kanyakumari grow with websites, custom
            software, AI, automation, SEO, Google Business optimization, paid ads, and
            creative content services designed for performance and visibility.
          </p>
        </motion.div>

        {variant === "compact" ? (
          <div className="grid gap-8 lg:grid-cols-3">
            {compactGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                  {group.title}
                </p>
                <p className="mt-4 text-gray-400">{group.summary}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {group.labels.map((label) => (
                    <span
                      key={label}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-gray-200"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {serviceGroups.map((group, groupIndex) => (
              <section key={group.title} aria-labelledby={`group-${groupIndex}`}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: groupIndex * 0.05 }}
                  className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
                >
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                      Category
                    </p>
                    <h3 id={`group-${groupIndex}`} className="mt-3 text-3xl font-bold">
                      {group.title}
                    </h3>
                  </div>
                  <p className="max-w-2xl text-gray-400">{group.summary}</p>
                </motion.div>

                <div className="grid gap-10 md:grid-cols-2">
                  {group.services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -10 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 transition duration-500 group-hover:via-purple-500/20" />
                      <div className="mb-6 text-3xl text-blue-400">{service.icon}</div>

                      <h4 className="mb-4 text-2xl font-semibold">{service.title}</h4>
                      <p className="mb-6 text-gray-400">{service.desc}</p>

                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                            <FaCheckCircle className="text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={service.href}
                        className="relative z-10 mt-6 inline-flex rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-400/40 hover:text-white"
                      >
                        View service page
                      </a>
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {variant === "full" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-28"
          >
            <h3 className="mb-12 text-center text-3xl font-bold">
              Our Simple <span className="text-blue-400">Delivery Process</span>
            </h3>

            <div className="grid gap-8 text-center md:grid-cols-4">
              {[
                {
                  title: "Consultation",
                  desc: "We understand your goals, audience, and service mix.",
                },
                {
                  title: "Strategy",
                  desc: "We shape the right website, software, automation, or ad plan.",
                },
                {
                  title: "Execution",
                  desc: "We build, automate, launch campaigns, and connect the systems.",
                },
                {
                  title: "Growth",
                  desc: "We refine performance with support, reporting, and improvements.",
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
        )}
      </div>
    </section>
  )
}
