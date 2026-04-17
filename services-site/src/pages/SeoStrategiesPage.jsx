import { motion } from "framer-motion"
import SiteLayout from "../components/SiteLayout"

export default function SeoStrategiesPage() {
  return (
    <SiteLayout>
      <section className="px-6 pb-20 pt-36 lg:pb-24 lg:pt-48">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-300 backdrop-blur-xl">
              SEO & Reach
            </span>
            <span className="text-sm font-medium text-gray-400">March 29, 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
          >
            Top 5 SEO Strategies for{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Services Businesses
            </span>
          </motion.h1>
          
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 space-y-8 text-lg text-gray-300"
          >
            <p className="text-xl font-medium text-gray-200">
              When a pipe breaks, people don't scroll Instagram for a plumber. They go to Google and type "Emergency Plumber near me". If your business relies on providing a service, SEO is the most predictable form of marketing. 
            </p>
            <p>
              Here are the top 5 strategies service businesses must implement right now.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Dedicated Local Landing Pages</h2>
            <p>
              Having one "Services" page that lists all your services and all the cities you serve is completely ineffective. Google ranks specific pages for specific intent. Create unique pages for specific keywords like <em>"Electrician in Nagercoil"</em> or <em>"Wedding Photographer in Kanyakumari"</em>.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Schema Markup (JSON-LD)</h2>
            <p>
              This is invisible code in your website's header that tells search engines exactly who you are, what you do, and where you operate. Adding `LocalBusiness` or `ProfessionalService` schema markup guarantees Google understands your service radius.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Consistent NAP Listings</h2>
            <p>
              NAP stands for Name, Address, Phone number. Google looks at external directories (JustDial, Sulekha, IndiaMart) to verify your business data. If your address is listed differently on 5 different websites, Google's algorithm will penalize your trust score. Ensure your NAP is identical everywhere.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">4. The "Silo" Website Structure</h2>
            <p>
              Don't interlink your pages randomly. Create a strict SEO cluster. For example: A main "Cleaning Services" page, which links down to "Carpet Cleaning Nagercoil" and "Office Cleaning Kanyakumari". This structure pushes SEO authority down to the pages that drive leads.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">5. Lightning-Fast Mobile Experience</h2>
            <p>
              Over 80% of local service queries are done on mobile phones. If your website takes more than 3 seconds to load, the user will leave, and Google will drop your ranking for "high bounce rate". Ensure your images are in WebP format and your site uses modern tech (like React/Vite) rather than bloated themes.
            </p>

            <div className="mt-16 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/40 to-transparent p-10 text-center">
              <h3 className="text-3xl font-bold text-white">Is your website actually ranking?</h3>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                We handle deep technical SEO audits and complete content restructuring for businesses that need to dominate local search.
              </p>
              <a
                href="/contact.html"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 font-bold tracking-wide text-white transition hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Request an SEO Audit
              </a>
            </div>
          </motion.article>
        </div>
      </section>
    </SiteLayout>
  )
}
