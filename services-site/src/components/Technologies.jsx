"use client";
import React from 'react';
import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiNodedotjs, 
  SiTypescript, 
  SiPython, 
  SiPostgresql, 
  SiMongodb, 
  SiVercel,
  SiDocker,
  SiGithub,
  SiGraphql,
  SiPrisma,
  SiRedis,
  SiFigma,
  SiOpenai,
  SiKubernetes,
  SiSupabase,
  SiStripe
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techList = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Redis", Icon: SiRedis },
  { name: "Prisma", Icon: SiPrisma },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Supabase", Icon: SiSupabase },
  { name: "AWS", Icon: FaAws },
  { name: "Vercel", Icon: SiVercel },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "GitHub", Icon: SiGithub },
  { name: "Figma", Icon: SiFigma },
  { name: "Stripe", Icon: SiStripe },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Framer", Icon: SiFramer }
];

export default function Technologies() {
  const logos = techList.map(({ name, Icon }) => ({
    node: (
      <div className="flex items-center gap-4 px-6 py-2 mx-4 group cursor-default">
        <Icon className="text-4xl md:text-5xl text-white/40 group-hover:text-amber-500 transition-colors duration-300" />
        <span className="text-xl md:text-2xl font-bold tracking-tight text-white/30 group-hover:text-white transition-colors duration-300">
          {name}
        </span>
      </div>
    )
  }));

  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden border-t border-b border-white/5 bg-transparent">
      <div className="mx-auto max-w-7xl px-6 mb-8 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-amber-500/80">
          Powered By Modern Technologies
        </h2>
      </div>
      
      <LogoLoop 
        logos={logos}
        speed={40}
        direction="left"
        logoHeight={50}
        gap={40}
        fadeOut={true}
        fadeOutColor="#050505"
        scaleOnHover={true}
      />
    </section>
  );
}
