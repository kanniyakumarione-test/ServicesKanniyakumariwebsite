"use client";
import Link from 'next/link';
import Navbar from "./Navbar"
import Footer from "./Footer"
import WhatsApp from "./WhatsApp"
import Phone from "./Phone"

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Link
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </Link>



      <div className="relative z-10">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsApp />
        <Phone />
      </div>
    </div>
  )
}
