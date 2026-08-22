"use client";
import Link from 'next/link';
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import ParticleText from './ParticleText';
import SpecularButton from './SpecularButton';
import RotatingText from './RotatingText';
export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-transparent pt-24 pb-16"
    >
      <motion.div 
        className="relative z-10 mx-auto max-w-7xl px-6 text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >


        {/* Particle Brand Title */}
        <motion.div variants={itemVariants} className="mb-4 w-full max-w-[1200px] h-[150px] md:h-[200px] flex items-center justify-center">
          <ParticleText
            text="SOFTGENZ"
            particleSize={3}
            density={4}
            color="#ffffff"
            highlightColor="#fbbf24"
            scatter={100}
            gatherDuration={1500}
            stagger={300}
            pointerRepel={60}
            repelRadius={200}
            fontSize="clamp(4.5rem, 15vw, 11rem)"
            fontWeight={900}
            trigger="mount"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          id="hero-heading"
          variants={itemVariants}
          className="max-w-5xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-[4.5rem] lg:text-[5rem]"
        >
          Digital Excellence for
          <span className="block mt-4 font-editorial font-medium italic text-[#ebd197] pb-4 tracking-normal">
            <RotatingText
              texts={['The Modern Era', 'Global Brands', 'Future Growth', 'Industry Leaders']}
              mainClassName="justify-center"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-xl"
        >
          <span className="text-amber-500 font-medium tracking-wide">Software for the Digital Generation.</span> SOFTGENZ empowers businesses worldwide with high-performance websites, 
          custom software, and precision marketing strategies that dominate attention.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
          {/* Primary Premium CTA */}
          <Link href="/services">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full border border-amber-500/50 bg-amber-500/10 px-10 backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:bg-amber-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
            >
              <span className="font-display text-[12px] font-bold uppercase tracking-[0.25em] text-amber-500 transition-colors duration-300 group-hover:text-black">
                Explore Expertise
              </span>
              <FaArrowRight className="text-amber-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black" />
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.button>
          </Link>

          {/* Secondary Premium CTA */}
          <Link href="https://wa.me/917358847752" target="_blank" rel="noopener noreferrer">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-10 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]"
            >
              <span className="font-display text-[12px] font-bold uppercase tracking-[0.25em] text-white/70 transition-colors duration-300 group-hover:text-white">
                Discuss Your Vision
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Premium Statistics Strip */}
        <motion.div variants={itemVariants} className="mt-20 w-full max-w-5xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle edge glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px]" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10 grid grid-cols-2 gap-8 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {[
              { label: "50+", sub: "Projects" },
              { label: "3+", sub: "Years" },
              { label: "30+", sub: "Clients" },
              { label: "100%", sub: "Remote" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-4 md:py-0">
                <span className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{stat.label}</span>
                <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">{stat.sub}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
