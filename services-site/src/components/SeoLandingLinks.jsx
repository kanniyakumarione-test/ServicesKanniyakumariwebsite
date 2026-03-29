import { motion } from "framer-motion"

const pages = [
  {
    title: "Website Developer in Nagercoil",
    desc: "A dedicated SEO landing page focused on local website design and business website services.",
    href: "/website-developer-in-nagercoil.html",
  },
  {
    title: "Custom Software Services",
    desc: "A dedicated page for dashboards, internal tools, billing systems, and business software.",
    href: "/software-services.html",
  },
  {
    title: "AI Services",
    desc: "A dedicated page for AI chat support, workflow improvement, and content assistance.",
    href: "/ai-services.html",
  },
  {
    title: "Automation Services",
    desc: "A focused page for lead automation, WhatsApp workflows, and connected business systems.",
    href: "/automation-services.html",
  },
  {
    title: "Google Business Profile Setup in Kanyakumari",
    desc: "A focused page for Google Maps visibility, local optimization, and profile setup support.",
    href: "/google-business-profile-setup-in-kanyakumari.html",
  },
  {
    title: "Google Ads Services",
    desc: "A dedicated page for Google Ads setup, search campaigns, and local lead generation.",
    href: "/google-ads-services.html",
  },
  {
    title: "Meta Ads Services",
    desc: "A dedicated page for Facebook and Instagram ads, awareness, and enquiry campaigns.",
    href: "/meta-ads-services.html",
  },
  {
    title: "Logo Design Services",
    desc: "A dedicated page for logos, brand direction, and visual identity design.",
    href: "/logo-design-services.html",
  },
  {
    title: "Video Editing Services",
    desc: "A dedicated page for promo videos, reels, ad edits, and social media content.",
    href: "/video-editing-services.html",
  },
  {
    title: "Photo Editing Services",
    desc: "A dedicated page for product photos, campaign visuals, and branded image editing.",
    href: "/photo-editing-services.html",
  },
  {
    title: "Photoshoot Services",
    desc: "A dedicated page for business photoshoots, branding visuals, and promotional content.",
    href: "/photoshoot-services.html",
  },
]

export default function SeoLandingLinks() {
  return (
    <section id="seo-pages" aria-labelledby="seo-pages-heading" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">SEO Pages</p>
          <h2 id="seo-pages-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            Search-Focused Pages for
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Local Visibility
            </span>
          </h2>
          <p className="mt-6 text-gray-400">
            These dedicated landing pages target specific service keywords and local search
            intent beyond the main homepage.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pages.map((page, index) => (
            <motion.a
              key={page.title}
              href={page.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <h3 className="text-2xl font-semibold">{page.title}</h3>
              <p className="mt-4 text-gray-400">{page.desc}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-blue-300">Open page</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
