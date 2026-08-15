"use client";
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa"

export default function Phone() {
  const phone = "917358847752"

  return (
    <div className="group fixed bottom-6 left-6 z-40">
      <Link
        href={`tel:+${phone}`}
        aria-label="Call SOFTGENZ"
        className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-amber-500/30 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:border-amber-500/60"
      >
        <span className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
        <FaPhoneAlt className="relative z-10 text-[20px] text-amber-500 transition-colors group-hover:text-amber-400" />
      </Link>

      <div className="pointer-events-none absolute left-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-black/80 px-5 py-2.5 font-display text-[11px] font-bold uppercase tracking-widest text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 sm:block hidden -translate-x-2 group-hover:translate-x-0 shadow-2xl">
        Call Now
      </div>
    </div>
  )
}
