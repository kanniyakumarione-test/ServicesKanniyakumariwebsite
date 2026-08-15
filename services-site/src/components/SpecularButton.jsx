"use client";
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SIZES = {
  sm: 'text-[0.85rem] px-[22px] py-[10px]',
  md: 'text-[1rem] px-[30px] py-[14px]',
  lg: 'text-[1.15rem] px-10 py-[18px]'
};

const SpecularButton = ({
  children = 'Get Started',
  size = 'lg',
  radius = 18,
  className = '',
  as = 'div',
  onClick,
  baseColor, // Ignored legacy props
  lineColor,
  tint,
  tintOpacity,
  textColor,
  ...props
}) => {
  const Component = as === 'button' ? motion.button : motion.div;
  const btnRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Component
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex cursor-pointer overflow-hidden items-center justify-center border border-white/10 font-medium leading-none tracking-[0.01em] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_8px_24px_rgba(0,0,0,0.25)] transition-colors duration-300 ${SIZES[size] || SIZES.md}${className ? ' ' + className : ''}`}
      style={{ borderRadius: `${radius}px` }}
      {...props}
    >
      {/* Specular Mouse Tracking Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 opacity-0 transition-opacity duration-300"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(120px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.4), transparent 40%)`,
          borderRadius: `${radius}px`,
        }}
      />
      
      {/* Base Shimmer / Lighting */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

      {/* Content */}
      <span className="relative z-10 flex w-full items-center justify-center gap-2">
        {children}
      </span>
    </Component>
  );
};

export default SpecularButton;
