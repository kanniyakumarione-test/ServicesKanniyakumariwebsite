import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

export default function Hero(){

return(

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">

{/* background grid moved to global App layout */}

<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">


{/* badge */}

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-sm mb-6"
>

🌍 Website Developer in Nagercoil

</motion.div>



{/* headline */}

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
className="text-5xl md:text-7xl font-extrabold leading-tight"
>

Create  

<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

Future-Ready Websites

</span>

</motion.h1>



{/* subtitle */}

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.3}}
className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
>

Modern websites, powerful web apps and Google Business optimization to help businesses in Nagercoil grow online.

</motion.p>



{/* buttons */}

<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:0.5}}
className="mt-10 flex justify-center gap-4 flex-wrap"
>

<a
href="#pricing"
className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition flex items-center gap-2"
>

View Packages
<FaArrowRight/>

</a>


<a
href="https://wa.me/917358847752"
className="px-8 py-4 rounded-xl border border-white/20 hover:bg-white/10 transition"
>

Chat on WhatsApp

</a>

</motion.div>



{/* floating service badges */}

<div className="mt-20 flex flex-wrap justify-center gap-6">

{[
"Website Development",
"Web Applications",
"Google Business",
"SEO Optimization",
"UI/UX Design"
].map((item,i)=>(

<motion.div
key={i}
whileHover={{scale:1.1}}
className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl"
>

{item}

</motion.div>

))}

</div>


</div>

</section>

)

}