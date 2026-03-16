import { FaWhatsapp } from "react-icons/fa"

export default function Whatsapp(){

const phone="917358847752"

return(

<div className="fixed bottom-6 right-6 z-40 group">

<a
href={`https://wa.me/${phone}?text=Hello%20I%20am%20interested%20in%20your%20services`}
target="_blank"
rel="noopener noreferrer"
className="flex items-center justify-center w-16 h-16 rounded-full
bg-green-500 shadow-lg hover:scale-110 transition duration-300 relative"
>

{/* pulse animation */}

<span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

<FaWhatsapp className="text-white text-3xl relative"/>

</a>

{/* tooltip (hidden on small screens) */}
<div className="hidden sm:block absolute right-20 top-1/2 -translate-y-1/2
bg-black text-white text-sm px-4 py-2 rounded-lg
opacity-0 group-hover:opacity-100 transition whitespace-nowrap">

Chat on WhatsApp

</div>

</div>

)

}