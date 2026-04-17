import { motion } from "framer-motion"
import SiteLayout from "../components/SiteLayout"

export default function HowToGrowPage() {
  return (
    <SiteLayout>
      <section className="px-6 pb-20 pt-36 lg:pb-24 lg:pt-48" aria-labelledby="article-heading">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-300 backdrop-blur-xl"
          >
            Business Strategy &bull; April 17, 2026
          </motion.div>

          <motion.h1
            id="article-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
          >
            How to Grow Your Business in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Kanyakumari Online
            </span>
          </motion.h1>
          
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 max-w-none text-lg text-gray-300 space-y-6"
          >
            <p className="text-xl font-medium text-gray-200">
              The digital landscape in Nagercoil and Kanyakumari is shifting rapidly. With tourism surging and local consumer habits moving online, businesses that rely solely on foot traffic are leaving massive opportunities on the table.
            </p>

            <h2 className="mt-12 text-3xl font-bold text-white">1. Dominate Local Maps with Google Business</h2>
            <p>
              When a tourist or a local searches for "best restaurant near me" or "plumber in Nagercoil", they don't look at billboards—they look at Google Maps. 
            </p>
            <p>
              Having a well-optimized Google Business Profile is the highest-ROI activity you can do. This means:
            </p>
            <ul className="list-inside list-disc space-y-2 mt-4 ml-4">
              <li>Uploading high-quality, professional photos of your establishment.</li>
              <li>Actively collecting 5-star reviews (and responding to all of them).</li>
              <li>Posting weekly updates exactly like you would on social media.</li>
            </ul>

            <h2 className="mt-12 text-3xl font-bold text-white">2. A Fast, SEO-Optimized Website</h2>
            <p>
              Social media is borrowed space. Your website is your digital storefront. An optimized website not only makes your brand look highly credible, but it is necessary to capture "high-intent" local SEO keywords like <em className="text-white">Website Developer in Nagercoil</em> or <em className="text-white">Travel Agency Kanyakumari</em>.
            </p>

            <h2 className="mt-12 text-3xl font-bold text-white">3. Targeted Meta and Google Ads</h2>
            <p>
              Once your organic foundation (Website + Google Business) is set, you can scale predictability using Meta Ads and Google Ads. Because the Kanyakumari district has specific demographic pockets, Meta Ads can be remarkably cheap and effective when targeted properly.
            </p>

            <div className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white">Ready to grow?</h3>
              <p className="mt-2 text-gray-300">
                Kanniyakumarione helps local businesses establish powerful online presences. Connect with us today to start your digital transformation.
              </p>
              <a
                href="/contact.html"
                className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
              >
                Book a Consultation
              </a>
            </div>
          </motion.article>
        </div>
      </section>
    </SiteLayout>
  )
}
