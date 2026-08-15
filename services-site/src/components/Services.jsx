"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"
import {
  FaLaptopCode,
  FaServer,
  FaRobot,
  FaCog,
  FaGoogle,
  FaBullhorn,
  FaCamera,
  FaPalette,
  FaPhotoVideo,
  FaImage,
  FaCheckCircle,
  FaUniversalAccess,
  FaFileAlt,
  FaDatabase
} from "react-icons/fa"
import BorderGlow from './BorderGlow';
import OptionWheel from './OptionWheel';
import Folder from './Folder';
import LightRays from './LightRays';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

const serviceGroups = [
  {
    title: "Web and Systems",
    summary: "Build the core digital systems your business runs on.",
    services: [
      {
        icon: <FaLaptopCode />,
        title: "Website Development",
        href: "/website-developer-in-nagercoil",
        desc: "Modern responsive websites designed to help businesses attract more customers online.",
        features: [
          "SEO optimized structure",
          "Ultra fast performance",
          "Mobile-first responsive design",
          "Contact forms and lead capture",
        ],
      },
      {
        icon: <FaServer />,
        title: "Custom Web Applications",
        href: "/software-services",
        desc: "Powerful software systems built to automate and simplify business operations.",
        features: [
          "Attendance systems",
          "Billing and invoicing software",
          "Admin dashboards",
          "Cloud hosting integration",
        ],
      },
      {
        icon: <FaRobot />,
        title: "AI Services",
        href: "/ai-services",
        desc: "Practical AI solutions that improve workflows, communication, and business efficiency.",
        features: [
          "AI chatbots",
          "Content workflows",
          "Business task support",
          "API integrations",
        ],
      },
      {
        icon: <FaCog />,
        title: "Automation Systems",
        href: "/automation-services",
        desc: "Workflow automation that reduces manual work and improves follow-up speed.",
        features: [
          "Lead automation workflows",
          "WhatsApp and form integrations",
          "Task triggers",
          "Connected business systems",
        ],
      },
    ],
  },
  {
    title: "Growth and Visibility",
    summary: "Get discovered more easily and turn attention into enquiries.",
    services: [
      {
        icon: <FaGoogle />,
        title: "Google Business Optimization",
        href: "/google-business",
        desc: "Improve visibility on Google Maps and attract more local customers.",
        features: [
          "Profile setup",
          "SEO optimization",
          "Review management",
          "Local ranking improvement",
        ],
      },
      {
        icon: <FaBullhorn />,
        title: "Google Ads and Meta Ads",
        href: "/google-ads-services",
        desc: "Paid ad campaigns that help local businesses reach ready-to-buy customers faster.",
        features: [
          "Google Search Ads",
          "Meta Ads campaign setup",
          "Lead generation campaigns",
          "Ad creative and optimization",
        ],
      },
    ],
  },
  {
    title: "Creative and Content",
    summary: "Strengthen your brand presentation with better visual assets.",
    services: [
      {
        icon: <FaPalette />,
        title: "Logo Design",
        href: "/logo-design-services",
        desc: "Brand identity and logo design for businesses that need a more professional and memorable presence.",
        features: [
          "Logo concepts",
          "Brand direction",
          "Profile visuals",
          "Identity assets",
        ],
      },
      {
        icon: <FaPhotoVideo />,
        title: "Video Editing",
        href: "/video-editing-services",
        desc: "Video editing for promotions, reels, ads, explainers, and social media content.",
        features: [
          "Promo edits",
          "Reels editing",
          "Ad creatives",
          "Social video content",
        ],
      },
      {
        icon: <FaImage />,
        title: "Photo Editing",
        href: "/photo-editing-services",
        desc: "Photo editing for products, branding visuals, campaigns, menus, and social media content.",
        features: [
          "Retouching",
          "Product edits",
          "Campaign visuals",
          "Social-ready images",
        ],
      },
      {
        icon: <FaCamera />,
        title: "Photoshoot Support",
        href: "/photoshoot-services",
        desc: "Photoshoot planning and content support for branding, products, promotions, and campaigns.",
        features: [
          "Brand shoots",
          "Product shoots",
          "Promo visuals",
          "Campaign content",
        ],
      },
    ],
  },
  {
    title: "Data and Accessibility",
    summary: "Ensure your data is labeled and your platforms are usable by everyone.",
    services: [
      {
        icon: <FaDatabase />,
        title: "Data Annotation",
        href: "/data-annotation-services",
        desc: "High-quality, accurate data labeling and annotation for AI, machine learning and research.",
        features: [
          "Image and video bounding",
          "Audio transcription",
          "Text categorization",
          "Custom NLP datasets",
        ],
      },
      {
        icon: <FaFileAlt />,
        title: "Alt Text Writing",
        href: "/alt-text-writing-services",
        desc: "Accurate, descriptive alternative text for images to improve SEO and assist screen readers.",
        features: [
          "E-commerce product descriptions",
          "Educational diagrams",
          "SEO keyword integration",
          "WCAG compliance",
        ],
      },
      {
        icon: <FaUniversalAccess />,
        title: "Accessibility Services",
        href: "/accessibility-services",
        desc: "Audits and remediation to ensure your digital properties are completely accessible to all users.",
        features: [
          "WCAG 2.1 audits",
          "Screen reader testing",
          "Keyboard navigation",
          "Remediation support",
        ],
      },
    ],
  },
]

export default function Services({ variant = "full", hideHeader = false }) {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  const allServices = serviceGroups.flatMap(g => g.services);
  const serviceTitles = allServices.map(s => s.title);
  const selectedService = allServices[selectedServiceIndex];

  const compactGroups = serviceGroups.map((group) => ({
    ...group,
    items: group.services.slice(0, 4).map((service) => ({
      label: service.title,
      href: service.href,
    })),
  }))

  return (
    <section id="services" aria-labelledby="services-heading" className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24 text-center"
          >
            <p className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6">Services</p>
            <h2 id="services-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Digital Solutions for<br />
              <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-2 block tracking-normal">
                Modern Businesses
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-gray-400 font-light leading-relaxed text-sm md:text-base">
              We help businesses worldwide grow with websites, custom software, AI, automation,
              SEO, Google Business optimization, paid ads, and creative content services
              designed for performance, visibility, and scalable digital growth.
            </p>
          </motion.div>
        )}

        {variant === "compact" ? (
          <div className="grid gap-8 md:grid-cols-2">
            {compactGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative flex flex-col h-full"
              >
                <BorderGlow
                  className="flex flex-col h-full p-8 md:p-10 transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
                  backgroundColor="#0a0a0a"
                  glowColor="38 92 50"
                >

                <p className="relative z-10 font-display text-[11px] font-bold uppercase tracking-[0.22em] text-amber-500">
                  {group.title}
                </p>
                <p className="relative z-10 mt-4 text-base font-light text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {group.summary}
                </p>
                
                <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-xs font-medium tracking-wide text-gray-400 transition-all hover:border-amber-500/40 hover:bg-amber-500/5 hover:text-amber-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
                <Link
                  href="/services"
                  className="relative z-10 mt-auto pt-10 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-amber-500/80 transition-all hover:text-amber-400 hover:gap-3"
                >
                  View all services <span>&rarr;</span>
                </Link>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="relative min-h-[600px] w-full flex flex-col justify-center items-center">
            
            {/* Initial Folder State */}
            {!isFolderOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center space-y-12"
              >
                <div className="text-center">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Service Catalog</h3>
                  <p className="text-gray-400">Click to explore our offerings</p>
                </div>
                
                <Folder 
                  onOpen={() => setIsFolderOpen(true)}
                  className="mt-8 mb-16"
                  items={[
                    <div key="1" className="w-full h-full bg-[#151515] rounded-xl p-4 flex flex-col gap-3 border border-white/5 shadow-2xl">
                      <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                      <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                    </div>,
                    <div key="2" className="w-full h-full bg-[#181818] rounded-xl p-4 flex flex-col gap-3 border border-white/5 shadow-2xl">
                      <div className="h-2 w-5/6 bg-amber-500/20 rounded-full" />
                      <div className="h-2 w-full bg-amber-500/10 rounded-full" />
                      <div className="h-2 w-2/3 bg-amber-500/10 rounded-full" />
                    </div>,
                    <div key="3" className="w-full h-full bg-[#222222] rounded-xl p-4 flex flex-col gap-3 border border-amber-500/20 shadow-2xl">
                      <div className="h-3 w-1/2 bg-amber-500/50 rounded-full mb-2 shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
                      <div className="h-2 w-full bg-white/10 rounded-full" />
                      <div className="h-2 w-4/5 bg-white/5 rounded-full" />
                      <div className="mt-auto h-8 w-8 rounded-full border-2 border-amber-500/30 self-end" />
                    </div>
                  ]}
                />
              </motion.div>
            )}

            {/* Revealed Split Layout */}
            {isFolderOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full flex flex-col lg:flex-row gap-10 lg:gap-16"
              >
                {/* Left Side: Interactive Option Wheel */}
                <div className="w-full lg:w-5/12 xl:w-2/5 h-[300px] lg:h-[700px] relative border-b lg:border-b-0 lg:border-r border-white/5 pb-10 lg:pb-0 shrink-0">
                  <OptionWheel 
                    items={serviceTitles} 
                    defaultSelected={0} 
                    onChange={(idx) => setSelectedServiceIndex(idx)} 
                    activeColor="#fbbf24"
                    textColor="#404040"
                    fontSize={1.4}
                    side="left"
                    tilt={2}
                    spacing={1.6}
                    inset={10}
                    loop={true}
                  />
                </div>

                {/* Right Side: Single Service Detail */}
                <div className="w-full lg:w-7/12 xl:w-3/5 flex items-center relative z-0">
                  <motion.div
                    key={`service-${selectedServiceIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-12 shadow-2xl flex flex-col"
                  >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none z-10" />
                
                {/* Dynamic WebGL Light Rays */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <LightRays 
                    raysColor="#fbbf24"
                    raysOrigin="top-center"
                    raysSpeed={0.8}
                    pulsating={true}
                    followMouse={true}
                    mouseInfluence={0.2}
                    rayLength={1.8}
                    lightSpread={1.2}
                    fadeDistance={1.0}
                    saturation={1.5}
                  />
                </div>
                
                <div className="relative z-20 mb-8 text-5xl text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]">{selectedService.icon}</div>
                
                <h4 className="relative z-10 mb-4 font-display text-3xl md:text-4xl font-bold tracking-wide text-white">{selectedService.title}</h4>
                <p className="relative z-10 mb-8 text-lg text-gray-400 leading-relaxed max-w-2xl">{selectedService.desc}</p>
                
                <div className="relative z-10 mb-10">
                  <h5 className="text-[11px] font-bold uppercase tracking-widest text-amber-500 mb-4">Key Features</h5>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {selectedService.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-200 bg-white/5 p-4 rounded-xl border border-white/5 shadow-inner">
                        <FaCheckCircle className="text-emerald-500/80 mt-0.5 shrink-0 text-base" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={selectedService.href}
                  className="relative z-10 mt-auto inline-flex self-start items-center gap-2 rounded-full bg-amber-500/10 px-8 py-4 text-[11px] font-bold uppercase tracking-widest text-amber-500 border border-amber-500/50 backdrop-blur-md transition-all hover:bg-amber-500 hover:text-black hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                >
                  Explore Service <span>&rarr;</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    )}

        {variant === "full" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-40 mb-20"
          >
            <div className="mb-20 text-center">
              <p className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6">How We Work</p>
              <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Our Proven <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">Delivery Process</span>
              </h3>
              <p className="mx-auto mt-6 max-w-2xl text-gray-400 leading-relaxed font-light">
                A streamlined, stress-free workflow designed to take you from initial idea to live launch and beyond.
              </p>
            </div>

            <div className="relative mx-auto max-w-4xl">
              <ScrollStack 
                useWindowScroll={true} 
                itemDistance={40}
                baseScale={0.9}
                scaleDuration={0.4}
                className="-mt-[10vh]"
              >
                {[
                  {
                    num: "01",
                    title: "Consultation",
                    desc: "We understand your goals, audience, and service mix.",
                  },
                  {
                    num: "02",
                    title: "Strategy",
                    desc: "We shape the right website, software, automation, or ad plan.",
                  },
                  {
                    num: "03",
                    title: "Execution",
                    desc: "We build, automate, launch campaigns, and connect systems.",
                  },
                  {
                    num: "04",
                    title: "Growth",
                    desc: "We refine performance with support, reporting, and improvements.",
                  },
                ].map((step, idx) => (
                  <ScrollStackItem
                    key={step.title}
                    itemClassName="bg-[#0a0a0a] border border-amber-500/10 hover:border-amber-500/30 transition-colors duration-500 flex flex-col justify-center items-center text-center group"
                  >
                    {/* Giant Watermark Number */}
                    <div className="absolute right-10 top-4 text-[200px] font-display font-bold text-white/[0.02] group-hover:text-amber-500/[0.05] transition-colors pointer-events-none select-none">
                      {step.num}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 font-display text-xl font-bold tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                        {step.num}
                      </div>
                      <h4 className="mb-4 font-display text-4xl md:text-5xl font-bold text-white tracking-wide">{step.title}</h4>
                      <p className="max-w-md mx-auto text-base md:text-lg leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">{step.desc}</p>
                    </div>
                  </ScrollStackItem>
                ))}
              </ScrollStack>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
