import { FaPhoneAlt } from "react-icons/fa"

export default function Phone(){

const phone="917358847752"

return(

<div className="fixed bottom-6 left-6 z-40 group">

<a
href={`tel:+${phone}`}
className="flex items-center justify-center w-16 h-16 rounded-full
bg-blue-600 shadow-lg hover:scale-110 transition duration-300 relative"
>

{/* pulse animation */}

<span className="absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75 animate-ping"></span>

<FaPhoneAlt className="text-white text-2xl relative"/>

</a>

{/* tooltip (hidden on small screens) */}
<div className="hidden sm:block absolute left-20 top-1/2 -translate-y-1/2
bg-black text-white text-sm px-4 py-2 rounded-lg
opacity-0 group-hover:opacity-100 transition whitespace-nowrap">

Call Now

</div>

</div>

)

}