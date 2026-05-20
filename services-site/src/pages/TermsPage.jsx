import { motion } from "framer-motion"
import SiteLayout from "../components/SiteLayout"
import { FaArrowLeft } from "react-icons/fa"

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing this website and engaging with Kanniyakumarione for services (including website development, software creation, AI implementation, automation, and digital marketing), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our services.`,
  },
  {
    title: "2. Service Scope and Deliverables",
    body: `All projects will begin with a consultation phase where the scope of work is defined. Once a scope is agreed upon and development/setup begins, any requests outside of that initial scope may be subject to additional fees. We strive for fast delivery, but timelines provided are estimates and can be affected by client response times and feedback rounds.`,
  },
  {
    title: "3. Payments and Refunds",
    body: `Project payments are typically structured in milestones (e.g., upfront deposit and final payment upon delivery). Due to the custom, labor-intensive nature of digital services, software development, and ad campaign setups, all payments made are non-refundable once work has commenced.`,
  },
  {
    title: "4. Client Responsibilities",
    body: `To ensure timely delivery, clients are expected to provide necessary assets (such as logos, copy, server access, or specific requirements) promptly. Delays in providing these assets will result in project delays. We are not liable for delays caused by the client.`,
  },
  {
    title: "5. Intellectual Property",
    body: `Upon full and final payment, the client owns the rights to the final deliverables (website, software, graphics). However, Kanniyakumarione retains the right to use screenshots, links, and case studies of the completed project in our portfolio and marketing materials unless a strict Non-Disclosure Agreement (NDA) is signed prior to commencement.`,
  },
  {
    title: "6. Post-Launch Support",
    body: `Our service packages often include a defined period of post-launch support (e.g., 1, 3, or 6 months). This support covers bug fixes, minor content updates, and basic guidance. It does not cover the development of entirely new features or structural redesigns. Once the support period ends, further maintenance can be arranged via a separate agreement.`,
  },
  {
    title: "7. Third-Party Platforms",
    body: `We utilize third-party platforms (like Google Ads, Meta Ads, WhatsApp, Hosting Providers). We are not responsible for changes to their algorithms, policies, or pricing, nor for any downtime or account suspensions enforced by these third parties.`,
  },
  {
    title: "8. Limitation of Liability",
    body: `Kanniyakumarione shall not be liable for any indirect, incidental, or consequential damages (including loss of profits or data) arising out of the use or inability to use our services or deliverables. Our maximum liability shall not exceed the amount paid by the client for the specific service in question.`,
  },
]

export default function TermsPage() {
  return (
    <SiteLayout>
      <section className="px-6 pb-24 pt-36 lg:pt-48">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-white"
            >
              <FaArrowLeft className="text-xs" />
              Back to Home
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Legal
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Terms of{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="mt-4 text-gray-400">
              Last updated: May 20, 2026 &nbsp;·&nbsp; Kanniyakumarione, Nagercoil, Tamil Nadu
            </p>
          </motion.div>

          <div className="mt-12 space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h2 className="text-xl font-semibold text-white">{section.title}</h2>
                <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-gray-400">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-transparent p-8 text-center">
            <h3 className="text-xl font-semibold">Have questions about these terms?</h3>
            <p className="mt-2 text-gray-400">We prefer clear, honest agreements. Contact us if you need clarification.</p>
            <a
              href="/contact.html"
              className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-semibold text-white transition hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
