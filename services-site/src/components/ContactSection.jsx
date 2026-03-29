import { useState } from "react"
import { motion } from "framer-motion"

const initialForm = {
  name: "",
  phone: "",
  service: "Website Development",
  budget: "Rs. 5,000 - 15,000",
  message: "",
}

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)

  const handleChange = ({ target }) => {
    setForm((current) => ({
      ...current,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = [
      "Hello Kanniyakumarione, I want to discuss a project.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget}`,
      `Message: ${form.message}`,
    ].join("\n")

    window.open(
      `https://wa.me/917358847752?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <section id="contact-form" aria-labelledby="contact-form-heading" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 p-8 md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Contact Form</p>
          <h2 id="contact-form-heading" className="mt-6 text-4xl font-bold md:text-5xl">
            Tell Us About
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Your Project
            </span>
          </h2>
          <p className="mt-6 text-gray-400">
            Share a few details and we will turn your brief into a pre-filled project inquiry.
            It opens directly in WhatsApp so you can send it in one tap.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Free Consultation</h3>
            <p className="mt-3 text-sm text-gray-400">
              Prefer to speak first? Book a free consultation call and get guidance on pricing,
              timeline, features, and what package fits your business.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="tel:+917358847752"
                className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold transition hover:scale-105"
              >
                Book Free Call
              </a>
              <a
                href="mailto:kanniyakumarione@gmail.com"
                className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10"
              >
                Send Email
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="mb-3 block text-sm font-medium text-gray-300">Name</span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-blue-400"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-sm font-medium text-gray-300">Phone</span>
              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-blue-400"
                placeholder="+91 98765 43210"
              />
            </label>

            <label className="block">
              <span className="mb-3 block text-sm font-medium text-gray-300">Service</span>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-blue-400"
              >
                <option>Website Development</option>
                <option>Custom Software</option>
                <option>AI Services</option>
                <option>Automation Setup</option>
                <option>Google Ads</option>
                <option>Meta Ads</option>
                <option>SEO Services</option>
                <option>Google Business Optimization</option>
                <option>Logo Design</option>
                <option>Video Editing</option>
                <option>Photo Editing</option>
                <option>Photoshoot</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-3 block text-sm font-medium text-gray-300">Budget</span>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-blue-400"
              >
                <option>Rs. 5,000 - 15,000</option>
                <option>Rs. 15,000 - 35,000</option>
                <option>Rs. 35,000+</option>
                <option>Need guidance</option>
              </select>
            </label>
          </div>

          <label className="mt-6 block">
            <span className="mb-3 block text-sm font-medium text-gray-300">Message</span>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none transition focus:border-blue-400"
              placeholder="Tell us about your business, timeline, and what you need."
            />
          </label>

          <button
            type="submit"
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-center font-semibold transition hover:scale-[1.01]"
          >
            Send Project Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  )
}
