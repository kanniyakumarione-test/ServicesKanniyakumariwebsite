import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

export const faqs = [
  {
    question: "How much does a business website cost?",
    answer:
      "Our pricing starts from Rs. 5,000 for a starter website and scales based on the number of pages, features, and custom functionality you need.",
  },
  {
    question: "How long does delivery usually take?",
    answer:
      "Simple business websites are often delivered within 3 to 7 days. Larger web apps and advanced SEO work take longer depending on scope.",
  },
  {
    question: "Do you provide domain and hosting help?",
    answer:
      "Yes. We help with domain setup, hosting guidance, deployment, and launch support so you are not left figuring out technical steps alone.",
  },
  {
    question: "Will the website be SEO-friendly?",
    answer:
      "Yes. We build pages with mobile responsiveness, fast loading, strong structure, and local SEO-friendly content for search visibility.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Every package includes a support period, and we can continue helping with edits, updates, and ongoing improvements after launch.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">FAQ</p>
          <h2 id="faq-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            Common Questions Before
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Starting a Project
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  <FaChevronDown className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-6 pb-6 text-gray-400">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
