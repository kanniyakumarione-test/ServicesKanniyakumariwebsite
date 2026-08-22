"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaArrowRight, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/softgenz.png";
import SpecularButton from "./SpecularButton";
import GlassSurface from "./GlassSurface";
import GlitchText from "./GlitchText";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" }
];

const SlideToOpen = ({ onOpen }) => {
  const trackRef = useRef(null);

  return (
    <div 
      ref={trackRef}
      className="relative flex items-center h-10 w-[140px] sm:h-12 sm:w-48 rounded-full bg-[#050505] border border-white/10 overflow-hidden shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] shrink-0"
    >
      {/* Background Text */}
      <span className="absolute inset-0 flex items-center justify-center pl-8 sm:pl-10 font-display text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white/30 pointer-events-none select-none whitespace-nowrap">
        Slide to view
      </span>
      
      {/* Shimmer effect on text */}
      <motion.div 
        animate={{ x: ['-200%', '300%'] }} 
        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 1 }}
        className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none skew-x-12"
      />

      {/* Draggable Knob */}
      <motion.div
        drag="x"
        dragConstraints={trackRef}
        dragElastic={0.05}
        dragSnapToOrigin={true}
        onDragEnd={(e, info) => {
          if (info.offset.x > 70) { 
            onOpen();
          }
        }}
        whileTap={{ scale: 0.95 }}
        className="relative left-1 h-8 w-8 sm:h-10 sm:w-12 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 cursor-grab active:cursor-grabbing shadow-[0_0_20px_rgba(245,158,11,0.4)] z-10 border border-amber-300/50 shrink-0"
      >
        <FaArrowRight className="text-black text-xs sm:text-lg" />
      </motion.div>
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Ultra-Minimalist Floating Header */}
      <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100vw-2rem)] sm:w-auto">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={40}
            borderWidth={0}
            blur={2}
            backgroundOpacity={0.1}
            className={`transition-all duration-500 ${scrolled ? 'shadow-[0_0_20px_rgba(245,158,11,0.15)]' : ''}`}
          >
            <div className="flex justify-between items-center w-full px-2 sm:px-6 py-2 gap-2 sm:gap-4">
              {/* Left: Text */}
              <div className="flex justify-start">
                <Link href="/" className="z-[60]" aria-label="SOFTGENZ home" onClick={() => setOpen(false)}>
                  <GlitchText enableOnHover={true} speed={0.4} className="font-brand text-[16px] sm:text-[22px] md:text-[26px] font-bold tracking-[0.1em] sm:tracking-[0.25em] text-white uppercase whitespace-nowrap mt-0.5 sm:mt-1">
                    SOFTGENZ
                  </GlitchText>
                </Link>
              </div>

              {/* Right Action Area - SLIDE TO UNLOCK */}
              <div className="flex justify-end items-center z-[60]">
                {!open && <SlideToOpen onOpen={() => setOpen(true)} />}
              </div>
            </div>
          </GlassSurface>
        </motion.nav>
      </div>

      {/* Cinematic Centered Popup Menu */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setOpen(false)}
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex w-full max-w-md flex-col items-center justify-center gap-6 rounded-[2rem] border border-white/10 bg-[#0a0a0a]/90 px-8 py-10 shadow-2xl backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-all hover:bg-white/10 border border-white/10 hover:scale-110"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes className="text-sm" />
              </button>

              <div className="flex flex-col items-center gap-5 w-full mt-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-amber-500"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 w-full flex flex-col items-center border-t border-white/10 pt-8">
                <Link href="/contact" onClick={() => setOpen(false)} className="w-full">
                  <SpecularButton 
                    className="w-full h-14 bg-amber-500 text-black border border-amber-400"
                    radius={9999}
                  >
                    <span className="text-xs font-bold uppercase tracking-widest">Start A Project</span>
                  </SpecularButton>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
