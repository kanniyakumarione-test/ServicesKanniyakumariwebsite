import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function Portfolio() {
  const projects = [
    {
      title: "Modern Business Website",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
      desc: "High-converting business website designed to attract customers and improve search visibility with SEO-first structure.",
      tech: ["React", "Tailwind", "SEO"],
      result: "Improved search rankings within 30 days and increased monthly enquiries from the contact form.",
    },
    {
      title: "Employee Attendance System",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      desc: "Custom software for tracking employee attendance, generating automated reports, and reducing manual HR workload.",
      tech: ["React", "Node.js", "MySQL"],
      result: "Eliminated 4+ hours of manual record-keeping per week for the client's HR team.",
    },
    {
      title: "AI Content Generator",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      desc: "Automation-focused AI tool for generating social content and reducing repetitive manual writing tasks.",
      tech: ["AI", "Automation", "API"],
      result: "Cut content production time by 60% and enabled consistent weekly social posting.",
    },
    {
      title: "Travel Agency Growth Setup",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
      desc: "A complete digital package combining landing pages, inquiry flow improvements, and campaign-ready assets — launched in 5 days.",
      tech: ["Landing Pages", "UI/UX", "Lead Flow"],
      result: "WhatsApp enquiries started from day one of campaign launch — no waiting period.",
    },
  ]

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative flex flex-col items-center gap-8 md:flex-row md:gap-0"
            >
              {/* Image Side - 3D Container */}
              <div className={`relative z-10 w-full md:w-2/3 ${index % 2 === 1 ? "md:order-2 md:ml-auto" : ""}`}>
                {/* Decorative Background Glow */}
                <div className="absolute -inset-4 z-0 rounded-[3rem] bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                
                <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 z-10 mix-blend-overlay bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110 md:h-[500px]"
                  />
                </div>
              </div>

              {/* Text Side - Floating Glass Card */}
              <div className={`relative z-20 w-full md:w-5/12 ${index % 2 === 1 ? "md:order-1 md:-mr-16" : "md:-ml-16"}`}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:border-white/20 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)] md:p-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-pink-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  
                  <div className="relative z-10">
                    <h3 className="mb-4 text-3xl font-bold text-white transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent">
                      {project.title}
                    </h3>
                    <p className="mb-8 leading-relaxed text-gray-300">{project.desc}</p>
                    
                    <div className="mb-8 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="group/result relative overflow-hidden rounded-xl border border-green-500/30 bg-green-500/10 p-5 backdrop-blur-xl">
                      <div className="absolute inset-0 bg-green-500/20 translate-y-[100%] transition-transform duration-300 group-hover/result:translate-y-0" />
                      <div className="relative z-10">
                        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-green-400">
                          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> Result
                        </p>
                        <p className="mt-2 text-sm font-medium text-gray-200">{project.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-32 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/40 via-slate-900/80 to-purple-900/40 p-12 text-center shadow-2xl backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold md:text-4xl">Want to See More Work?</h3>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              We share detailed project screenshots, live interactive demos, and in-depth case studies directly via WhatsApp.
              Reach out and we will send you the most relevant examples for your industry.
            </p>
            <a
              href="https://wa.me/917358847752?text=Hi%2C%20I%20would%20like%20to%20see%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:scale-105 hover:shadow-green-500/50"
            >
              <FaWhatsapp className="text-2xl" />
              Request Full Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

