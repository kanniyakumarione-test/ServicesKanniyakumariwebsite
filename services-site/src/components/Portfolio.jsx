import { motion } from "framer-motion"

export default function Portfolio() {
  const projects = [
    {
      title: "Modern Business Website",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
      desc: "High converting business website designed to attract local customers and rank on Google.",
      tech: ["React", "Tailwind", "SEO"],
    },
    {
      title: "Employee Attendance System",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      desc: "Web application for tracking employee attendance and generating automated reports.",
      tech: ["React", "Node.js", "MySQL"],
    },
    {
      title: "AI Content Generator",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      desc: "AI platform generating alt text and content automatically using advanced AI APIs.",
      tech: ["AI", "Automation", "API"],
    },
    {
      title: "Travel Agency Website",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
      desc: "Interactive travel website for exploring destinations and contacting travel agents.",
      tech: ["React", "Tailwind", "UI/UX"],
    },
  ]

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} className="mb-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Portfolio</p>
          <h2 id="portfolio-heading" className="mt-6 text-4xl font-bold md:text-6xl">
            Our
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Work
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            A collection of websites and applications designed to help businesses grow digitally.
          </p>
        </motion.div>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid items-center gap-12 md:grid-cols-2"
            >
              <motion.div whileHover={{ scale: 1.03 }} className={`${index % 2 === 1 ? "md:order-2" : ""} relative overflow-hidden rounded-3xl`}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </motion.div>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="mb-4 text-3xl font-semibold">{project.title}</h3>
                <p className="mb-6 text-gray-400">{project.desc}</p>

                <div className="mb-6 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-sm text-gray-300">
                    Result: Improved user engagement and faster performance.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
