"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../assets/softgenz.png";
import GlitchText from "./GlitchText";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the preloader after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505]"
        >
          {/* Logo container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            {/* Spinning/pulsing logo */}
            <motion.div
              animate={{ 
                rotateY: [0, 360],
                filter: ["drop-shadow(0 0 10px rgba(251,191,36,0.1))", "drop-shadow(0 0 30px rgba(251,191,36,0.4))", "drop-shadow(0 0 10px rgba(251,191,36,0.1))"]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative w-20 h-20 sm:w-24 sm:h-24"
            >
              <Image 
                src={logo.src || logo} 
                alt="SOFTGENZ logo" 
                fill
                className="object-contain" 
              />
            </motion.div>
            
            {/* Glitch text */}
            <GlitchText enableOnHover={false} speed={0.4} className="font-brand text-[24px] sm:text-[32px] font-bold tracking-[0.3em] text-white uppercase mt-4">
              SOFTGENZ
            </GlitchText>
            
            {/* Subtle loading bar */}
            <div className="w-48 h-[1px] bg-white/10 mt-8 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-amber-500 to-transparent absolute inset-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
