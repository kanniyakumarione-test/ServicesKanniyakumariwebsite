import { motion } from "framer-motion"
import SiteLayout from "../components/SiteLayout"
import { FaArrowLeft } from "react-icons/fa"

const sections = [
  {
    title: "1. Information We Collect",
    body: `When you use the contact form on this website, we collect your name, phone number, and the details of your project inquiry. This information is used only to respond to your enquiry and discuss your project. We do not collect this data silently — all submissions are visible to you before you send them via WhatsApp.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information you provide solely to respond to your enquiries, provide quotes, discuss your project, and deliver the services you request. We do not sell, rent, or share your personal data with third parties. Your information is not used for unsolicited marketing.`,
  },
  {
    title: "3. WhatsApp and Contact Channels",
    body: `Our contact form sends your enquiry via WhatsApp. By submitting the form, you are choosing to open WhatsApp with your details pre-filled. This data is then governed by WhatsApp's own privacy policy (https://www.whatsapp.com/legal/privacy-policy). We may also be contacted via email or phone as shown on the Contact page.`,
  },
  {
    title: "4. Cookies and Analytics",
    body: `This website may use basic analytics to understand page traffic and visitor behaviour. We do not use advertising cookies or build personal profiles. If Google Analytics or similar tools are added in future, this policy will be updated.`,
  },
  {
    title: "5. Third-Party Links",
    body: `This website contains links to external sites including WhatsApp, Google Business, and social media platforms. We are not responsible for the privacy practices of those sites and recommend reviewing their individual privacy policies.`,
  },
  {
    title: "6. Data Security",
    body: `We take reasonable steps to protect any information shared with us. However, no method of transmission over the internet is 100% secure. We encourage you to contact us only with information necessary for your enquiry.`,
  },
  {
    title: "7. Your Rights",
    body: `You have the right to request deletion or correction of any personal data you have shared with us. To do so, contact us directly at kanniyakumarione@gmail.com or via WhatsApp at +91 73588 47752 and we will respond promptly.`,
  },
  {
    title: "8. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated date. Continued use of this site constitutes acceptance of the updated policy.`,
  },
  {
    title: "9. Contact",
    body: `For any privacy-related questions, contact us at:\n\nEmail: kanniyakumarione@gmail.com\nPhone: +91 73588 47752\nLocation: Nagercoil, Tamil Nadu, India`,
  },
]

export default function PrivacyPolicyPage() {
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
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="mt-4 text-gray-400">
              Last updated: May 20, 2026 &nbsp;·&nbsp; Kanniyakumarione, Nagercoil, Tamil Nadu
            </p>

            <p className="mt-8 text-lg text-gray-300">
              Kanniyakumarione (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website at{" "}
              <a href="https://services.kanniyakumarione.com" className="text-blue-300 underline hover:text-white">
                services.kanniyakumarione.com
              </a>
              . This page explains what information we collect, how we use it, and your rights regarding your personal data.
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
            <h3 className="text-xl font-semibold">Questions about your data?</h3>
            <p className="mt-2 text-gray-400">Contact us directly and we will respond within 24 hours.</p>
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
