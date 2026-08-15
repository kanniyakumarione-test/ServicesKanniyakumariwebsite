"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"
import InfiniteMenu from './InfiniteMenu';
import logo from '../assets/softgenz.png';

export default function Portfolio() {
  const projects = [
    {
      title: "Kanniyakumari One",
      link: "https://kanniyakumarione.com",
      image: logo.src,
      desc: "The central digital platform providing utility tools, local tracking, and business services for the Kanniyakumari region.",
      tech: ["React", "Next.js", "Full-Stack"],
      result: "Centralized local services into a single accessible portal.",
    },
    {
      title: "Jiya's Bridal Studio",
      link: "https://jiyasbridalstudio.com",
      image: logo.src,
      desc: "A premium, visually stunning portfolio and booking website designed for a high-end bridal makeup studio.",
      tech: ["React", "Tailwind CSS", "UI/UX"],
      result: "Elevated brand presence and streamlined customer inquiry flow.",
    },
    {
      title: "Tamil Bible Online",
      link: "https://tamilbible.kanniyakumarione.com",
      image: logo.src,
      desc: "A fast, accessible digital Bible platform designed for the Tamil-speaking community with advanced search capabilities.",
      tech: ["Next.js", "API Integration", "Web Apps"],
      result: "Delivered a highly performant reading experience for thousands of users.",
    },
    {
      title: "Roshinth Electrical Works",
      link: "https://roshinth-electrical-works.vercel.app/",
      image: logo.src,
      desc: "A professional service website highlighting electrical contracting expertise, featuring service catalogs and contact forms.",
      tech: ["React", "Vercel", "Tailwind"],
      result: "Established a strong online presence to capture local service requests.",
    },
    {
      title: "Digital Invitation Platform",
      link: "https://invitation.kanniyakumarione.com",
      image: logo.src,
      desc: "An interactive web application allowing users to create, customize, and share beautiful digital event invitations seamlessly.",
      tech: ["React", "Canvas", "UI Design"],
      result: "Replaced traditional paper invites with a modern, eco-friendly digital alternative.",
    },
    {
      title: "KKOne URL Shortener",
      link: "https://kkoneurl.kanniyakumarione.com",
      image: logo.src,
      desc: "A custom URL shortening service built to provide branded, concise links for local businesses and marketing campaigns.",
      tech: ["React", "Node.js", "Database"],
      result: "Simplified link sharing and improved click tracking metrics.",
    }
  ]

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
          <div className="w-full h-[600px] md:h-[800px] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <InfiniteMenu 
              items={projects.map(p => ({
                image: p.image,
                link: p.link,
                title: p.title,
                description: p.desc
              }))} 
              scale={1.5} 
            />
          </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-32 relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#050505] p-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-3xl font-display font-medium tracking-tight md:text-5xl text-white">Want to See More Work?</h3>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 font-light">
              We share detailed project screenshots, live interactive demos, and in-depth case studies directly via WhatsApp.
              Reach out and we will send you the most relevant examples for your industry.
            </p>
            <Link
              href="https://wa.me/917358847752?text=Hi%2C%20I%20would%20like%20to%20see%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-amber-500/10 px-8 py-4 font-semibold text-amber-500 transition-all hover:bg-amber-500 hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              <FaWhatsapp className="text-2xl" />
              Request Full Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

