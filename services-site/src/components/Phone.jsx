import { FaPhoneAlt } from "react-icons/fa"

export default function Phone() {
  const phone = "917358847752"

  return (
    <div className="group fixed bottom-6 left-6 z-40">
      <a
        href={`tel:+${phone}`}
        aria-label="Call Kanniyakumarione"
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 shadow-lg transition duration-300 hover:scale-110"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75" />
        <FaPhoneAlt className="relative text-2xl text-white" />
      </a>

      <div className="absolute left-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-lg bg-black px-4 py-2 text-sm text-white opacity-0 transition group-hover:opacity-100 sm:block">
        Call Now
      </div>
    </div>
  )
}
