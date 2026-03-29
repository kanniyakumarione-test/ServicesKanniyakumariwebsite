import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"

const themeStyles = {
  blue: {
    eyebrow: "text-blue-300",
    highlight: "from-blue-400 via-cyan-300 to-sky-200",
    button: "from-blue-500 to-cyan-500",
    glow: "bg-blue-500/20",
    panel: "from-blue-500/15 via-cyan-500/10 to-transparent",
    border: "border-blue-400/20",
  },
  cyan: {
    eyebrow: "text-cyan-300",
    highlight: "from-cyan-300 via-sky-300 to-blue-200",
    button: "from-cyan-500 to-sky-500",
    glow: "bg-cyan-500/20",
    panel: "from-cyan-500/15 via-sky-500/10 to-transparent",
    border: "border-cyan-400/20",
  },
  emerald: {
    eyebrow: "text-emerald-300",
    highlight: "from-emerald-300 via-teal-300 to-cyan-200",
    button: "from-emerald-500 to-teal-500",
    glow: "bg-emerald-500/20",
    panel: "from-emerald-500/15 via-teal-500/10 to-transparent",
    border: "border-emerald-400/20",
  },
  amber: {
    eyebrow: "text-amber-300",
    highlight: "from-amber-300 via-orange-300 to-yellow-200",
    button: "from-amber-500 to-orange-500",
    glow: "bg-amber-500/20",
    panel: "from-amber-500/15 via-orange-500/10 to-transparent",
    border: "border-amber-400/20",
  },
  rose: {
    eyebrow: "text-rose-300",
    highlight: "from-rose-300 via-pink-300 to-orange-200",
    button: "from-rose-500 to-pink-500",
    glow: "bg-rose-500/20",
    panel: "from-rose-500/15 via-pink-500/10 to-transparent",
    border: "border-rose-400/20",
  },
  violet: {
    eyebrow: "text-violet-300",
    highlight: "from-violet-300 via-fuchsia-300 to-pink-200",
    button: "from-violet-500 to-fuchsia-500",
    glow: "bg-violet-500/20",
    panel: "from-violet-500/15 via-fuchsia-500/10 to-transparent",
    border: "border-violet-400/20",
  },
}

export default function LandingPageLayout({
  theme = "blue",
  eyebrow,
  title,
  highlight,
  description,
  bullets,
  sections,
  snapshotTitle = "Quick Snapshot",
  snapshotItems = [],
  idealFor = "Local businesses that want stronger digital systems and a better online presence.",
  deliverable = "A practical setup that is easier to run, easier to market, and easier for customers to trust.",
  ctaTitle = "Need a page like this for your business?",
  ctaText = "We create SEO-focused pages, conversion-driven layouts, and lead-generation systems that can connect with websites, ads, automation, and broader digital services.",
}) {
  const activeTheme = themeStyles[theme] || themeStyles.blue

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-4">
            <a href="./index.html" className="text-lg font-bold text-white">
              Kanniyakumarione
            </a>
            <a
              href="./index.html"
              className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-white/20 hover:text-white"
            >
              Home
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="./services.html"
              className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-white/20 hover:text-white"
            >
              All Services
            </a>
            <a
              href="https://wa.me/917358847752"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-xl bg-gradient-to-r px-5 py-2 font-semibold ${activeTheme.button}`}
            >
              Get Quote
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-20 lg:py-24">
          <div className={`absolute inset-x-0 top-0 h-64 blur-3xl ${activeTheme.glow}`} />
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
            <div className="max-w-4xl">
              <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${activeTheme.eyebrow}`}>
                {eyebrow}
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
                {title}
                <span
                  className={`bg-gradient-to-r bg-clip-text text-transparent ${activeTheme.highlight}`}
                >
                  {" "}
                  {highlight}
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray-400">{description}</p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/917358847752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 rounded-xl bg-gradient-to-r px-7 py-4 font-semibold ${activeTheme.button}`}
                >
                  Chat on WhatsApp
                  <FaWhatsapp />
                </a>
                <a
                  href="tel:+917358847752"
                  className="flex items-center gap-2 rounded-xl border border-white/15 px-7 py-4 font-semibold"
                >
                  Book Consultation
                  <FaPhoneAlt />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </div>

            <aside
              className={`self-start rounded-[28px] border bg-gradient-to-br p-8 backdrop-blur-xl lg:mt-6 ${activeTheme.border} ${activeTheme.panel}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-300">
                {snapshotTitle}
              </p>
              <div className="mt-6 space-y-4">
                {snapshotItems.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{item.label}</p>
                    <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-5 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Ideal For</p>
                  <p className="mt-2 text-sm leading-7 text-gray-200">{idealFor}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">What You Leave With</p>
                  <p className="mt-2 text-sm leading-7 text-gray-200">{deliverable}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-10 lg:pb-14">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
                  0{index + 1}
                </span>
                <h2 className="mt-4 text-2xl font-semibold">{section.title}</h2>
                <p className="mt-4 text-gray-400">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 lg:py-24">
          <div
            className={`mx-auto max-w-6xl rounded-3xl border bg-gradient-to-r px-8 py-12 text-center lg:px-10 ${activeTheme.border} ${activeTheme.panel}`}
          >
            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight">{ctaTitle}</h2>
            <p className="mx-auto mt-4 max-w-3xl text-gray-300">{ctaText}</p>
            <a
              href="https://wa.me/917358847752"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r px-7 py-4 font-semibold ${activeTheme.button}`}
            >
              Start Your Project
              <FaArrowRight />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
