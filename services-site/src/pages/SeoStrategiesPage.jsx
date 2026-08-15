"use client";
import Link from 'next/link';
import { motion } from "framer-motion"
import { FaArrowLeft, FaSearchLocation, FaEdit, FaLink, FaChartBar } from "react-icons/fa"
import SiteLayout from "../components/SiteLayout"

export default function SeoStrategiesPage() {
  return (
    <SiteLayout>
      <section className="px-6 pb-20 pt-36 lg:pb-24 lg:pt-48" aria-labelledby="article-heading">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-yellow-300 transition hover:text-white"
            >
              <FaArrowLeft className="text-xs" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold text-yellow-300 backdrop-blur-xl"
          >
            SEO & Marketing &bull; March 29, 2026
          </motion.div>

          <motion.h1
            id="article-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl text-white"
          >
            Top 5 SEO Strategies for{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
              Service Businesses
            </span>{" "}
            in 2026
          </motion.h1>
          
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 max-w-none text-lg text-gray-300 space-y-8 leading-relaxed"
          >
            <p className="text-xl font-medium text-gray-200 border-l-4 border-amber-500 pl-4 py-2 bg-white/5 rounded-r-lg">
              Stop hiding on Page 5 of Google. If you run a service-based business in Kanyakumari or Nagercoil, ranking #1 on Google for your core services is the most guaranteed way to generate predictable, high-value leads.
            </p>

            <p>
              Search Engine Optimization (SEO) is often misunderstood as a dark art involving keyword stuffing and spammy links. In 2026, Google's AI is incredibly smart. It rewards businesses that provide genuine value, fast websites, and clear local authority. Here are the 5 exact strategies service businesses use to dominate search rankings today.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <FaSearchLocation className="text-amber-500" /> 1. Hyper-Local Keyword Targeting
            </h2>
            <p>
              Instead of trying to rank for a massive, impossible keyword like "Best Electrician," you must target hyper-local long-tail keywords. People search differently now; they search with intent.
            </p>
            <p>
              Your website pages should specifically target phrases like <strong>"Emergency Electrician in Nagercoil"</strong> or <strong>"AC Repair Services in Kanyakumari."</strong> Create a dedicated, highly detailed landing page on your website for every single service you offer, tied directly to your city.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <FaEdit className="text-amber-500" /> 2. Content Built for Human Questions
            </h2>
            <p>
              Google's "Helpful Content Update" actively penalizes generic, AI-spun garbage. Your blog and service pages need to actually answer the specific questions your local customers have.
            </p>
            <p>
              If you run a pest control service, write an article titled <em>"How to Stop Termites Before Monsoon Season in Tamil Nadu."</em> By providing highly specific, expert advice, you build trust with the reader and signal to Google that you are a topical authority in your local area.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <FaLink className="text-amber-500" /> 3. The Power of Local Backlinks
            </h2>
            <p>
              A backlink is when another website links to yours. Google treats this as a "vote of confidence." However, a link from a random blog in Russia will hurt you. You need <em>local</em> relevance.
            </p>
            <ul className="space-y-4 my-6 bg-black/40 p-6 rounded-2xl border border-white/5">
              <li>Get listed in the local Kanyakumari Chamber of Commerce or local business directories.</li>
              <li>Sponsor a local youth sports team or charity event in exchange for a link from their website.</li>
              <li>Partner with non-competing local businesses (e.g., a plumber links to an electrician) to share local authority.</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <FaChartBar className="text-amber-500" /> 4. Schema Markup (The Secret Weapon)
            </h2>
            <p>
              Schema Markup (specifically JSON-LD) is code you put on your website that speaks directly to Google's bots in their native language. While humans see your website visually, bots read the Schema code to instantly understand who you are.
            </p>
            <p>
              By adding a <strong>LocalBusiness</strong> or <strong>ProfessionalService</strong> Schema to your site, you explicitly tell Google your exact coordinates, your operating hours, your service area, and your pricing. This is how you win "Rich Snippets" (the highly visible boxes that appear at the very top of Google).
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Technical Speed & Mobile Optimization</h2>
            <p>
              As mentioned in our other guides, if your website takes longer than 3 seconds to load on a mobile phone, Google will penalize you. Optimize your images, minify your CSS, and ensure your website is hosted on a modern edge network (like Vercel or AWS) rather than a cheap shared hosting server.
            </p>

            <div className="mt-16 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-black p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white">Need expert SEO implementation?</h3>
              <p className="mt-4 text-gray-300 text-lg">
                At SOFTGENZ, we bake advanced technical SEO and Schema Markup directly into the code of every website we build. Stop losing traffic to your competitors.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                Claim Your Free SEO Audit
              </Link>
            </div>
          </motion.article>
        </div>
      </section>
    </SiteLayout>
  )
}
