import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import SiteLayout from "../components/SiteLayout"

const posts = [
  {
    featured: true,
    title: "How to Grow Your Business in Kanyakumari Online",
    desc: "Learn how local restaurants, shops, and clinics are using Google Business Profiles, websites, and Meta Ads to triple their local reach in 2026.",
    date: "April 17, 2026",
    readTime: "5 min read",
    category: "Business Strategy",
    href: "/how-to-grow-your-business-in-kanyakumari.html",
  },
  {
    featured: false,
    title: "Why Custom Software is Better Than Excel for Billing",
    desc: "If your staff is still copy-pasting customer data across spreadsheets, you are losing money. See how a simple digital dashboard solves this.",
    date: "April 10, 2026",
    readTime: "4 min read",
    category: "Software",
    href: "/custom-software-vs-excel.html",
  },
  {
    featured: false,
    title: "Top 5 SEO Strategies for Services Businesses in 2026",
    desc: "Stop hiding on page 5 of Google. Here are the precise steps service businesses use to rank number one.",
    date: "March 29, 2026",
    readTime: "6 min read",
    category: "SEO",
    href: "/seo-strategies-services-businesses.html",
  },
]

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured)
  const regularPosts = posts.filter((p) => !p.featured)

  return (
    <SiteLayout>
      <section className="relative px-6 pb-20 pt-36 lg:pb-24 lg:pt-48" aria-labelledby="blog-heading">
        
        {/* Subtle Background Elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950"></div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-white/10 pb-8 md:pb-16"
          >
            <h1 id="blog-heading" className="text-4xl font-light tracking-tight text-white md:text-6xl">
              Journal & <span className="font-semibold text-blue-400">Insights</span>
            </h1>
            <p className="mt-4 text-lg text-gray-400">
              Technical essays, strategies, and case studies for modern businesses.
            </p>
          </motion.div>

          <div className="mt-12 md:mt-16">
            {/* Featured Post Typographic Design */}
            {featuredPost && (
              <motion.a
                href={featuredPost.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group block rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent p-8 ring-1 ring-white/10 transition-all hover:bg-white/[0.05] hover:ring-blue-500/50 md:p-12"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-4 md:max-w-2xl">
                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-blue-400">
                      <span>Featured</span>
                      <span className="h-1 w-1 rounded-full bg-blue-400/50"></span>
                      <span>{featuredPost.category}</span>
                    </div>
                    <h2 className="text-3xl font-medium text-white transition-colors group-hover:text-blue-300 md:text-5xl md:leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed md:text-xl">
                      {featuredPost.desc}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-4 text-sm text-gray-500 md:flex-col md:items-end md:gap-2">
                    <span className="whitespace-nowrap rounded-full bg-white/5 px-4 py-1 ring-1 ring-white/10">
                      {featuredPost.date}
                    </span>
                    <span className="whitespace-nowrap">{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <div className="mt-12 flex items-center gap-3 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Read article <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            )}

            {/* List Layout for Regular Posts (Editorial Style) */}
            <div className="mt-16 border-t border-white/10">
              <h3 className="py-8 text-xs font-medium uppercase tracking-widest text-gray-500">
                Latest Publications
              </h3>
              
              <div className="divide-y divide-white/10">
                {regularPosts.map((post, index) => (
                  <motion.a
                    key={post.title}
                    href={post.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex flex-col gap-4 py-8 transition-colors hover:bg-white/[0.02] md:flex-row md:items-baseline md:gap-10 md:px-6"
                  >
                    <div className="md:w-32 flex-shrink-0">
                      <p className="text-sm font-medium text-gray-500">{post.date}</p>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        {post.category}
                      </div>
                      <h4 className="text-2xl font-medium text-white transition-colors group-hover:text-cyan-300">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {post.desc}
                      </p>
                    </div>

                    <div className="flex md:w-32 flex-shrink-0 md:justify-end">
                       <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 group-hover:text-cyan-300">
                         <FaArrowRight className="-rotate-45 transition-transform group-hover:rotate-0" />
                       </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
