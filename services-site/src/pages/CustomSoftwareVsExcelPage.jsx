import { motion } from "framer-motion"
import SiteLayout from "../components/SiteLayout"

export default function CustomSoftwareVsExcelPage() {
  return (
    <SiteLayout>
      <section className="px-6 pb-20 pt-36 lg:pb-24 lg:pt-48">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-xl">
              Software & Automation
            </span>
            <span className="text-sm font-medium text-gray-400">April 10, 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
          >
            Why Custom Software is Better Than{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Excel for Billing
            </span>
          </motion.h1>
          
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-12 space-y-8 text-lg text-gray-300"
          >
            <p className="text-xl font-medium text-gray-200">
              For years, small businesses in Nagercoil and Kanyakumari have relied on Microsoft Excel and Google Sheets to handle customer logs, inventory, and billing. But as your business scales, this becomes a massive bottleneck.
            </p>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 my-10">
              <h2 className="text-2xl font-bold text-white mb-4">The problem with spreadsheets</h2>
              <ul className="space-y-3 list-inside list-disc ml-4">
                <li>Multiple versions of the same file floating around.</li>
                <li>Staff accidentally deleting critical rows of data.</li>
                <li>No secure way to restrict access to sensitive financial columns.</li>
                <li>Zero automation (you have to manually copy-paste to send a WhatsApp invoice).</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Enter: The Custom Web Dashboard</h2>
            <p>
              By migrating from Excel to a lightweight custom web application, the entire dynamic changes. Instead of a messy grid, your staff gets a clean, foolproof interface.
            </p>

            <h3 className="text-2xl font-bold text-cyan-300 mt-8 mb-4">1. Automated Invoicing</h3>
            <p>
              Imagine clicking a single "Checkout" button, and the system automatically generates a PDF invoice, updates your inventory, and WhatsApps the receipt securely to the customer. Custom software does this instantly.
            </p>

            <h3 className="text-2xl font-bold text-cyan-300 mt-8 mb-4">2. Unbreakable Data Security</h3>
            <p>
              In a custom dashboard, you can give your cashier a "Sales" view where they can only input new orders, while you (the owner) have an "Admin" view to see total daily revenue. This is fundamentally impossible to enforce in a shared Excel sheet.
            </p>

            <h3 className="text-2xl font-bold text-cyan-300 mt-8 mb-4">3. Cloud Access from Anywhere</h3>
            <p>
              Check your business metrics live from your phone while sitting at home. No need to ask your manager to "email the end-of-day sheet."
            </p>

            <div className="mt-16 rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-900/40 to-transparent p-10 text-center">
              <h3 className="text-3xl font-bold text-white">Stop losing time to manual data entry.</h3>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                Kanniyakumarione specializes in building secure, lightweight custom dashboards tailored precisely to how your business operates.
              </p>
              <a
                href="/software-services.html"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-bold tracking-wide text-white transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Explore Custom Software
              </a>
            </div>
          </motion.article>
        </div>
      </section>
    </SiteLayout>
  )
}
