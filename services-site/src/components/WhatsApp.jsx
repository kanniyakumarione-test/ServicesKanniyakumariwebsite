import { FaWhatsapp } from "react-icons/fa"

export default function Whatsapp() {
  const phone = "917358847752"

  return (
    <div className="group fixed bottom-6 right-6 z-40">
      <a
        href={`https://wa.me/${phone}?text=Hello%20I%20am%20interested%20in%20your%20services`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kanniyakumarione on WhatsApp"
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition duration-300 hover:scale-110"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
        <FaWhatsapp className="relative text-3xl text-white" />
      </a>

      <div className="absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-black px-4 py-2 text-sm text-white opacity-0 transition group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </div>
    </div>
  )
}
