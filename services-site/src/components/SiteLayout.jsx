import Navbar from "./Navbar"
import Footer from "./Footer"
import WhatsApp from "./WhatsApp"
import Phone from "./Phone"

export default function SiteLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[120] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to main content
      </a>

      <div className="pointer-events-none absolute -left-20 -top-20 z-0 hidden h-[500px] w-[500px] rounded-full bg-blue-500 opacity-10 blur-[160px] sm:block" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 z-0 hidden h-[500px] w-[500px] rounded-full bg-red-500 opacity-10 blur-[160px] sm:block" />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{ zIndex: -2 }}
      />

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
