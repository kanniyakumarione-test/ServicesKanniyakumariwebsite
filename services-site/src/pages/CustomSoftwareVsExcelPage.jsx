"use client";
import Link from 'next/link';
import { motion } from "framer-motion"
import { FaArrowLeft, FaFileExcel, FaCode, FaChartPie, FaLock } from "react-icons/fa"
import SiteLayout from "../components/SiteLayout"

export default function CustomSoftwareVsExcelPage() {
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
            Software Solutions &bull; April 10, 2026
          </motion.div>

          <motion.h1
            id="article-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl text-white"
          >
            Why Custom Software is Better Than{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-sky-400 bg-clip-text text-transparent">
              Excel for Billing
            </span>
          </motion.h1>
          
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 max-w-none text-lg text-gray-300 space-y-8 leading-relaxed"
          >
            <p className="text-xl font-medium text-gray-200 border-l-4 border-amber-500 pl-4 py-2 bg-white/5 rounded-r-lg">
              If your staff is still copy-pasting customer data across multiple spreadsheets, trying to figure out who paid and who didn't, you are losing money. See how a simple digital dashboard can automate your entire business.
            </p>

            <p>
              Microsoft Excel and Google Sheets are fantastic tools. They are the digital duct tape that holds countless small businesses together. But there comes a point in every growing business where spreadsheets transform from a helpful tool into a massive operational bottleneck.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <FaFileExcel className="text-amber-500" /> The Hidden Costs of Spreadsheets
            </h2>
            <p>
              When a local wholesale distributor in Nagercoil relies on Excel for inventory and billing, things inevitably break down. Here are the core issues with running a business on spreadsheets:
            </p>
            <ul className="space-y-4 my-6 bg-black/40 p-6 rounded-2xl border border-white/5">
              <li><strong>Version Confusion:</strong> "Inventory_Final_V3_UPDATED.xlsx" being sent back and forth over email guarantees that someone is looking at outdated data.</li>
              <li><strong>Human Error:</strong> A single accidental backspace or a mistyped formula can break the entire financial calculation, often going unnoticed for weeks.</li>
              <li><strong>Zero Automation:</strong> Spreadsheets cannot automatically email a customer an invoice, nor can they text a client a payment reminder. All of this requires manual human labor.</li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
              <FaCode className="text-amber-500" /> The Power of Custom Web Applications
            </h2>
            <p>
              Transitioning from Excel to a custom-built web application completely changes how a business operates. Custom software acts as a central "brain" for your business, accessible securely from anywhere in the world on a mobile phone or laptop.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <FaChartPie className="text-3xl text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Real-Time Dashboards</h3>
                <p className="text-sm text-gray-400">Instead of scrolling through thousands of rows, the software automatically generates visual dashboards showing daily revenue, unpaid invoices, and low inventory.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <FaLock className="text-3xl text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Granular Security</h3>
                <p className="text-sm text-gray-400">In Excel, anyone with the file can copy it or delete data. With custom software, you can give a cashier access to billing without letting them see your wholesale costs.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Automating the Boring Work</h2>
            <p>
              The most significant ROI of custom software is automation. Imagine a system where the moment you click "Generate Bill", the software automatically deducts the items from your inventory, sends a PDF invoice to the client's WhatsApp, logs the sale in your ledger, and schedules a follow-up reminder if the bill isn't paid in 7 days.
            </p>
            <p>
              This isn't futuristic—this is standard functionality we build for businesses every day. It frees up your staff to focus on actual customer service and sales, rather than acting as human data-entry robots.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Case Study: The Supply Chain Upgrade</h2>
            <p>
              A hardware supply company in Kanyakumari was losing thousands of rupees a month due to miscalculated Excel inventory. After upgrading to a custom cloud-based ERP system built by SOFTGENZ, their error rate dropped to 0%, and they saved over 40 hours of manual data entry per week. The software paid for itself in less than three months.
            </p>

            <div className="mt-16 rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-black p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-white">Outgrown your spreadsheets?</h3>
              <p className="mt-4 text-gray-300 text-lg">
                Stop running your modern business on outdated tools. SOFTGENZ builds secure, lightning-fast custom software tailored perfectly to your unique business workflows.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 px-8 py-4 font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                Request a Software Demo
              </Link>
            </div>
          </motion.article>
        </div>
      </section>
    </SiteLayout>
  )
}
