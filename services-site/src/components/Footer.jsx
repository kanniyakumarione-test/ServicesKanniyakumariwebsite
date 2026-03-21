import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 pb-10 pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                KANNIYAKUMARIONE
              </span>
            </h2>

            <p className="text-sm leading-relaxed text-gray-400">
              We help businesses grow online with modern websites, Google Business
              optimization and digital solutions.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://services.kanniyakumarione.com/"
                className="transition hover:text-blue-400"
                aria-label="Visit Kanniyakumarione website"
              >
                <FaGlobe />
              </a>

              <a
                href="mailto:kanniyakumarione@gmail.com"
                className="transition hover:text-blue-400"
                aria-label="Send an email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/917358847752"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-green-400"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#google-business" className="hover:text-white">Google Business</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>Website Development</li>
              <li>Web Applications</li>
              <li>AI Tools Integration</li>
              <li>Google Business Optimization</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>

            <address className="not-italic">
              <ul className="space-y-3 text-sm text-gray-400">
                <li>Nagercoil, Tamil Nadu</li>
                <li className="flex items-center gap-2">
                  <FaEnvelope />
                  <a href="mailto:kanniyakumarione@gmail.com" className="hover:text-white">
                    kanniyakumarione@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <a href="tel:+917358847752" className="hover:text-white">
                    +91 73588 47752
                  </a>
                </li>
              </ul>
            </address>

            <a
              href="https://wa.me/917358847752"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-lg bg-green-500 px-5 py-2 transition hover:scale-105"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          Copyright {new Date().getFullYear()} Kanniyakumarione. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
