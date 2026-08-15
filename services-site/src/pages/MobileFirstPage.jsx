"use client";
import Link from 'next/link';
import { motion } from "framer-motion"
import { FaArrowLeft, FaCheckCircle, FaMobileAlt, FaChartLine } from "react-icons/fa"
import SiteLayout from "../components/SiteLayout"

export default function MobileFirstPage() {
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
            Web Development &bull; August 20, 2026
          </motion.div>

          <motion.h1
            id="article-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl text-white"
          >
            Why Your Local Business Needs a{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
              Mobile-First Website
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
              Did you know that over 80% of local searches in Nagercoil, Kanyakumari, and surrounding districts are performed on mobile phones? If your website requires zooming, pinching, or waiting 10 seconds to load on a 4G connection, you are handing your customers directly to your competitors.
            </p>

            <p>
              In the early days of the internet, web developers designed websites for massive desktop monitors. Mobile phones were an afterthought. Today, the script has completely flipped. Google now exclusively uses <strong>Mobile-First Indexing</strong>, meaning if your website isn't flawlessly optimized for a smartphone, Google acts as if your website doesn't exist.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <FaMobileAlt className="text-amber-500" /> What Exactly is Mobile-First Design?
            </h2>
            <p>
              Mobile-first design is a philosophy where the website is physically built, coded, and structured for the smallest screen (a smartphone) first. Once the mobile experience is perfected—ensuring massive, easily tappable buttons, instantly readable text, and lightning-fast load times—the design is then scaled up to fit tablets and desktop monitors.
            </p>
            <ul className="space-y-4 my-6 bg-black/40 p-6 rounded-2xl border border-white/5">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
                <span><strong>Thumb-Friendly Navigation:</strong> Menus and contact buttons are placed within easy reach of a user's thumb (usually at the bottom of the screen).</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
                <span><strong>Readable Typography:</strong> Font sizes are naturally large, preventing the dreaded "pinch-to-zoom" frustration.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
                <span><strong>Blazing Fast Assets:</strong> Images are compressed and served in next-gen formats (like WebP) so they load instantly on cellular networks.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Google Penalty for Desktop-Only Sites</h2>
            <p>
              In 2024, Google officially rolled out strict Core Web Vitals algorithms. These algorithms deploy automated bots that scan your website simulating a mid-range smartphone on a 4G connection. 
            </p>
            <p>
              If your buttons are too close together (causing "fat-finger" misclicks), if your text is too small, or if the layout shifts while loading, Google issues a penalty. This penalty actively suppresses your ranking, pushing your business off Page 1 and burying you on Page 4 where no customer will ever find you. A mobile-first build is the only way to bulletproof your SEO against these penalties.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <FaChartLine className="text-amber-500" /> Speed Translates Directly to Revenue
            </h2>
            <p>
              Consider a tourist visiting Kanyakumari. They are standing on the street, searching for "best seafood restaurant near me" or "local taxi service." They click the first link. If that website takes more than 3 seconds to load, <strong>53% of users will immediately hit the back button</strong>. 
            </p>
            <p>
              That is a lost sale. By building a mobile-first architecture utilizing modern frameworks like Next.js (which we use exclusively at SOFTGENZ), your website loads in milliseconds. We utilize server-side rendering to deliver a fully formed page to the user's phone before they even have a chance to blink.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Case Study: The Local Edge</h2>
            <p>
              When a local Nagercoil retail business upgraded from a legacy WordPress template to a custom mobile-first web app, they saw a <strong>140% increase in mobile session duration</strong> and a massive spike in direct WhatsApp inquiries. Why? Because the "Contact Us via WhatsApp" button was pinned to the bottom of the mobile screen, always within reach of the user's thumb. Friction was eliminated.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Conclusion: Stop Losing Customers to Bad Design</h2>
            <p>
              Your website is often the first impression a customer has of your business. If it looks broken on their phone, they will assume your actual business is similarly outdated. Investing in a true mobile-first digital presence is not an expense—it is the highest ROI marketing engine your business can deploy.
            </p>

            <div className="mt-16 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-black p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white">Is your website actually mobile-ready?</h3>
              <p className="mt-4 text-gray-300 text-lg">
                Don't guess. SOFTGENZ specializes in lightning-fast, highly-optimized mobile-first web applications designed specifically to dominate local search rankings in Kanyakumari. 
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                Get a Free Website Audit Today
              </Link>
            </div>
          </motion.article>
        </div>
      </section>
    </SiteLayout>
  )
}
