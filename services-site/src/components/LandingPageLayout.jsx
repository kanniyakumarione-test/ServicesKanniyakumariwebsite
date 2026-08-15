"use client";
import Link from 'next/link';
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"

import BorderGlow from './BorderGlow';
import DarkVeil from './DarkVeil';

const themeStyles = {
  blue: {
    accent: "text-blue-500",
    button: "bg-blue-500 text-black hover:bg-blue-400",
    border: "border-blue-500/20",
    glow: "210 100% 50%",
  },
  cyan: {
    accent: "text-cyan-500",
    button: "bg-cyan-500 text-black hover:bg-cyan-400",
    border: "border-cyan-500/20",
    glow: "190 100% 50%",
  },
  emerald: {
    accent: "text-emerald-500",
    button: "bg-emerald-500 text-black hover:bg-emerald-400",
    border: "border-emerald-500/20",
    glow: "150 100% 40%",
  },
  amber: {
    accent: "text-amber-500",
    button: "bg-amber-500 text-black hover:bg-amber-400",
    border: "border-amber-500/20",
    glow: "40 100% 50%",
  },
  rose: {
    accent: "text-rose-500",
    button: "bg-rose-500 text-black hover:bg-rose-400",
    border: "border-rose-500/20",
    glow: "340 100% 60%",
  },
  violet: {
    accent: "text-violet-500",
    button: "bg-violet-500 text-black hover:bg-violet-400",
    border: "border-violet-500/20",
    glow: "270 100% 60%",
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
    <div className="min-h-screen bg-[#050505] text-white selection:bg-amber-500/30">
      <header className="border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="text-xl font-display font-bold tracking-widest text-white">
              SOFTGENZ
            </Link>
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-widest text-gray-400 transition hover:text-white"
            >
              Home
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-widest text-gray-400 transition hover:text-white"
            >
              All Services
            </Link>
            <Link
              href="https://wa.me/917358847752"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${activeTheme.button}`}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative px-6 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-start relative z-10">
            <div className="max-w-3xl">
              <p className={`text-xs font-bold uppercase tracking-[0.3em] ${activeTheme.accent}`}>
                {eyebrow}
              </p>
              <h1 className="mt-8 text-5xl font-display font-medium leading-[1.1] tracking-tight md:text-7xl lg:text-[5rem]">
                {title}
                <span className={`block mt-2 ${activeTheme.accent}`}>
                  {highlight}
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                {description}
              </p>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="https://wa.me/917358847752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${activeTheme.button}`}
                >
                  Chat on WhatsApp
                  <FaWhatsapp size={16} />
                </Link>
                <Link
                  href="tel:+917358847752"
                  className="flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-white/30 hover:bg-white/5"
                >
                  Book Consultation
                  <FaPhoneAlt size={14} />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap gap-3">
                {bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="rounded-full border border-white/10 bg-[#0a0a0a] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-gray-300"
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </div>

            <aside className="w-full self-start lg:mt-6">
              <BorderGlow
                borderRadius={32}
                backgroundColor="#0a0a0a"
                glowColor={activeTheme.glow}
                animated={true}
                className="w-full"
              >
                <div className="p-8 relative z-20">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-8">
                    {snapshotTitle}
                  </p>
                  
                  <div className="space-y-4">
                    {snapshotItems.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/5 bg-[#050505] p-5 transition-colors hover:border-white/10">
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${activeTheme.accent}`}>{item.label}</p>
                        <p className="mt-2 text-sm font-medium text-white leading-relaxed">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-6 rounded-2xl border border-white/5 bg-[#050505] p-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Ideal For</p>
                      <p className="mt-2 text-sm font-light leading-relaxed text-gray-300">{idealFor}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">What You Leave With</p>
                      <p className="mt-2 text-sm font-light leading-relaxed text-gray-300">{deliverable}</p>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </aside>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24 lg:py-32 border-t border-b border-white/5 bg-[#050505]">
          <div className="absolute inset-0 z-0">
            <DarkVeil 
              hueShift={40}
              noiseIntensity={0.08}
              scanlineIntensity={0.3}
              scanlineFrequency={150}
              speed={0.2}
              warpAmount={0.8}
              className="opacity-40"
            />
            {/* Fade edges to perfectly blend into the page */}
            <div className="absolute inset-0 bg-[#050505]/50 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
          </div>

          <div className="mx-auto grid max-w-7xl gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="group relative h-full flex flex-col rounded-[2rem] border border-white/10 bg-[#050505]/60 backdrop-blur-xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:bg-[#050505]/80 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]"
              >
                <div className="w-12 h-12 rounded-xl border border-white/10 bg-black/50 shadow-inner flex items-center justify-center mb-8 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all duration-300">
                  <span className={`text-sm font-display font-bold uppercase tracking-[0.1em] ${activeTheme.accent}`}>
                    0{index + 1}
                  </span>
                </div>
                <h2 className="text-xl font-display font-medium text-white group-hover:text-amber-500 transition-colors">{section.title}</h2>
                <p className="mt-4 text-sm font-light leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors">{section.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 py-24 lg:py-32 border-t border-white/5 bg-[#0a0a0a]">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-display font-medium leading-tight text-white tracking-tight">{ctaTitle}</h2>
            <p className="mx-auto mt-6 text-lg font-light leading-relaxed text-gray-400">{ctaText}</p>
            <Link
              href="https://wa.me/917358847752"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 inline-flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.3)] ${activeTheme.button}`}
            >
              Start Your Project
              <FaArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
