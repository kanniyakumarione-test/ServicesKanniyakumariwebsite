import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaGlobe, FaArrowRight } from "react-icons/fa"

export default function Footer() {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname.replace(/\/$/, "") || "/" : "/"

  const isActiveLink = (link) => {
    const normalizedLink = link.replace(/\/$/, "") || "/"
    return currentPath === normalizedLink
  }

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services.html" },
    { label: "Portfolio", href: "/portfolio.html" },
    { label: "Pricing", href: "/pricing.html" },
    { label: "FAQ", href: "/faq.html" },
    { label: "Contact", href: "/contact.html" },
  ]

  const serviceLinks = [
    { label: "Software", href: "/software-services.html" },
    { label: "AI Services", href: "/ai-services.html" },
    { label: "Automation", href: "/automation-services.html" },
    { label: "Google Business", href: "/google-business.html" },
    { label: "Google Ads", href: "/google-ads-services.html" },
    { label: "Meta Ads", href: "/meta-ads-services.html" },
    { label: "Logo Design", href: "/logo-design-services.html" },
    { label: "Video Editing", href: "/video-editing-services.html" },
    { label: "Photo Editing", href: "/photo-editing-services.html" },
    { label: "Photoshoot", href: "/photoshoot-services.html" },
  ]

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr_1fr]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-pink-400 bg-clip-text text-transparent">
                KANNIYAKUMARIONE
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-400">
              We help businesses grow with websites, software, AI, automation, SEO,
              Google Business optimization, paid ads, and creative content services.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://services.kanniyakumarione.com/"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-base transition hover:border-blue-400/40 hover:text-blue-300"
                aria-label="Visit Kanniyakumarione website"
              >
                <FaGlobe />
              </a>
              <a
                href="mailto:kanniyakumarione@gmail.com"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-base transition hover:border-blue-400/40 hover:text-blue-300"
                aria-label="Send an email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/917358847752"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-base transition hover:border-green-400/40 hover:text-green-300"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="text-lg font-semibold text-white">Explore</h3>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {quickLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl border px-4 py-3 text-sm transition ${
                    isActiveLink(item.href)
                      ? "border-blue-400/40 bg-blue-500/10 text-white"
                      : "border-white/10 bg-black/20 text-gray-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-green-500/10 p-8">
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            <address className="mt-6 not-italic space-y-4 text-sm text-gray-300">
              <p>Nagercoil, Tamil Nadu</p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400" />
                <a href="mailto:kanniyakumarione@gmail.com" className="hover:text-white">
                  kanniyakumarione@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-400" />
                <a href="tel:+917358847752" className="hover:text-white">
                  +91 73588 47752
                </a>
              </p>
            </address>

            <a
              href="https://wa.me/917358847752"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              Chat on WhatsApp
              <FaArrowRight className="text-sm" />
            </a>
          </section>
        </div>

        <section className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Popular Services</h3>
              <p className="mt-2 max-w-2xl text-sm text-gray-400">
                Browse the most requested service pages across web, growth, automation, and
                creative work.
              </p>
            </div>

            <a
              href="/services.html"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
            >
              View all services
              <FaArrowRight className="text-xs" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {serviceLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActiveLink(item.href)
                    ? "border-blue-400/40 bg-blue-500/10 text-white"
                    : "border-white/10 bg-black/20 text-gray-300 hover:border-white/20 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          Copyright {new Date().getFullYear()} Kanniyakumarione. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
