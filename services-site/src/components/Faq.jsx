"use client";
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

export const faqs = [
  {
    question: "How much does a business website cost?",
    answer:
      "Our pricing starts from Rs. 5,000 (approx. $60 USD) for a starter website and scales based on the number of pages, features, and custom functionality you need.",
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

export default function Faq({ hideHeader = false }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative overflow-hidden py-24 bg-[#050505] border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <p className="font-display text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-amber-500/80 mb-6">FAQ</p>
            <h2 id="faq-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Common Questions Before<br />
              <span className="font-editorial italic font-medium bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent mt-2 block tracking-normal">
                Starting a Project
              </span>
            </h2>
          </motion.div>
        )}

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.question} className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? 'border-amber-500/20 bg-[#0a0a0a]' : 'border-white/5 bg-[#0a0a0a]/50 hover:border-white/10 hover:bg-[#0a0a0a]'}`}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left group"
                >
                  <span className={`font-display text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-amber-500' : 'text-white group-hover:text-amber-200'}`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${isOpen ? 'border-amber-500/50 bg-amber-500/10 text-amber-500' : 'border-white/10 bg-black text-gray-500 group-hover:border-amber-500/30 group-hover:text-amber-300'}`}>
                    <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-8 pb-8 text-sm md:text-base leading-relaxed font-light text-gray-400 max-w-3xl">
                        {item.answer}
                      </p>
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
