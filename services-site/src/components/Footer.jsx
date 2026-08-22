"use client";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaGlobe, FaArrowRight } from "react-icons/fa"
import MagicRings from "./MagicRings";
import logo from "../assets/softgenz.png";
import Image from "next/image";
import SpecularButton from "./SpecularButton";

export default function Footer() {
  const pathname = usePathname();
  const currentPath = pathname ? pathname.replace(/\/$/, "") || "/" : "/";

  const isActiveLink = (link) => {
    const normalizedLink = link.replace(/\/$/, "") || "/"
    return currentPath === normalizedLink
  }

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" }
  ]

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ]

  return (
    <footer id="contact" className="relative flex flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-[#050505] py-12 text-center">
      
      {/* MagicRings Interactive Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-70">
        <MagicRings 
          color="#fbbf24" 
          colorTwo="#f59e0b" 
          ringCount={5} 
          followMouse={true} 
          mouseInfluence={0.5} 
          opacity={0.8}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center max-w-5xl px-6">
        
        {/* Centered Logo & Brand */}
        <div className="mb-10 flex flex-col items-center">
          <Image src={logo} alt="SOFTGENZ Logo" width={140} height={140} className="h-16 w-auto mb-4 object-contain pointer-events-none drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-3">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
              SOFTGENZ
            </span>
          </h2>
        </div>

        {/* Contact Actions */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <Link 
            href="mailto:softgenzservices@gmail.com" 
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <FaEnvelope className="text-amber-500 text-lg transition-transform duration-300 group-hover:scale-110" />
            <span className="font-sans font-medium tracking-wide text-white">softgenzservices@gmail.com</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link 
            href="https://wa.me/917358847752" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full border border-amber-500/50 bg-amber-500/10 px-8 py-4 backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:bg-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          >
            <FaWhatsapp className="text-[22px] text-amber-500 transition-colors duration-300 group-hover:text-black" />
            <span className="font-sans font-bold tracking-wide text-amber-500 transition-colors duration-300 group-hover:text-black">Let's Talk</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 mb-12 border-t border-white/5 pt-10 w-full max-w-2xl">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                isActiveLink(item.href)
                  ? "text-amber-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row w-full items-center justify-between text-[13px] font-light tracking-wide text-gray-500 border-t border-white/5 pt-8 gap-4">
          <p>Copyright © {new Date().getFullYear()} SOFTGENZ. All rights reserved.</p>
          <div className="flex items-center gap-8">
            {legalLinks.map(link => (
              <Link key={link.href} href={link.href} className="hover:text-gray-300 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
