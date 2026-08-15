"use client";
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import SiteLayout from "../components/SiteLayout"

const posts = [
  {
    featured: true,
    title: "How AI Automations Can Save Your Business Thousands of Hours",
    desc: "Discover how AI chatbots, automated invoicing, and predictive analytics can streamline operations for small businesses in Nagercoil.",
    date: "August 10, 2026",
    readTime: "7 min read",
    category: "Artificial Intelligence",
    href: "/ai-automation-customer-service",
  },
  {
    featured: false,
    title: "Why Your Local Business Needs a Mobile-First Website",
    desc: "If your website isn't built for thumbs, you are losing customers. Learn why mobile-first design is critical in 2026.",
    date: "August 20, 2026",
    readTime: "5 min read",
    category: "Web Development",
    href: "/mobile-first-website-nagercoil",
  },
  {
    featured: false,
    title: "How to Grow Your Business in Kanyakumari Online",
    desc: "Learn how local restaurants, shops, and clinics are using Google Business Profiles, websites, and Meta Ads to triple their local reach in 2026.",
    date: "April 17, 2026",
    readTime: "5 min read",
    category: "Business Strategy",
    href: "/how-to-grow-your-business-in-kanyakumari",
  },
  {
    featured: false,
    title: "Why Custom Software is Better Than Excel for Billing",
    desc: "If your staff is still copy-pasting customer data across spreadsheets, you are losing money. See how a simple digital dashboard solves this.",
    date: "April 10, 2026",
    readTime: "4 min read",
    category: "Software",
    href: "/custom-software-vs-excel",
  },
  {
    featured: false,
    title: "Top 5 SEO Strategies for Services Businesses in 2026",
    desc: "Stop hiding on page 5 of Google. Here are the precise steps service businesses use to rank number one.",
    date: "March 29, 2026",
    readTime: "6 min read",
    category: "SEO",
    href: "/seo-strategies-services-businesses",
  },
]

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured)
  const regularPosts = posts.filter((p) => !p.featured)

  return (
    <SiteLayout>
      <section className="relative px-6 pb-20 pt-36 lg:pb-24 lg:pt-48 bg-[#050505]" aria-labelledby="blog-heading">
        
        {/* Subtle Background Elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-[#050505] to-[#050505]"></div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-white/10 pb-8 md:pb-16 text-center md:text-left"
          >
            <p className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6">Blog</p>
            <h1 id="blog-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Journal &<br className="md:hidden" />
              <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent md:ml-4 tracking-normal">
                Insights
              </span>
            </h1>
            <p className="mt-8 text-lg font-light leading-relaxed text-gray-400 max-w-2xl">
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
                className="group block rounded-[2rem] bg-gradient-to-br from-white/[0.03] to-transparent p-8 ring-1 ring-white/10 transition-all hover:bg-white/[0.05] hover:ring-yellow-500/50 md:p-12"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-4 md:max-w-2xl">
                    <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-yellow-400">
                      <span>Featured</span>
                      <span className="h-1 w-1 rounded-full bg-yellow-400/50"></span>
                      <span>{featuredPost.category}</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-amber-500 md:text-5xl md:leading-[1.1]">
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
                
                <div className="mt-12 flex items-center gap-3 text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors">
                  Read article <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            )}

            {/* List Layout for Regular Posts (Editorial Style) */}
            <div className="mt-16 border-t border-white/10">
              <h3 className="py-8 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500">
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
                      <h4 className="font-display text-2xl font-bold tracking-tight text-white transition-colors group-hover:text-amber-500">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {post.desc}
                      </p>
                    </div>

                    <div className="flex md:w-32 flex-shrink-0 md:justify-end">
                       <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all group-hover:border-amber-500/50 group-hover:bg-amber-500/10 group-hover:text-amber-300">
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
