import { motion } from "framer-motion"
import { FaCheckCircle, FaBolt } from "react-icons/fa"

export default function Pricing(){

const plans=[
{
name:"Starter Website",
price:"₹5,000",
tag:"Best for Small Businesses",
features:[
"1 Professional Page Website",
"Mobile Responsive Design",
"WhatsApp Chat Button",
"Contact Form Integration",
"Basic SEO Setup",
"Fast Loading Performance",
"Free Domain Setup Help",
"1 Month Support"
],
popular:false
},
{
name:"Business Website",
price:"₹15,000",
tag:"Most Popular",
features:[
"Up to 5 Website Pages",
"Premium UI / UX Design",
"Advanced SEO Optimization",
"Google Business Profile Setup",
"Speed Optimization",
"Contact Forms & Lead Capture",
"WhatsApp Integration",
"3 Months Support"
],
popular:true
},
{
name:"Premium Web Solution",
price:"₹35,000",
tag:"Advanced Digital Solution",
features:[
"Unlimited Pages",
"Custom Web Application",
"Admin Dashboard",
"Database Integration",
"AI Features / Automation",
"Advanced SEO Strategy",
"Performance Optimization",
"6 Months Support"
],
popular:false
}
]

return(

<section id="pricing" className="relative py-20 overflow-hidden">

<div className="max-w-7xl mx-auto px-6">


{/* HEADER */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-center mb-16"
>


<h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">

Affordable  

<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

Website Packages

</span>

for Growing Businesses

</h2>

<p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

Get a modern high-performance website designed to attract more customers
and grow your business online.

</p>

</motion.div>


{/* PRICING CARDS */}

<div className="grid lg:grid-cols-3 gap-10 mt-20">

{plans.map((plan,index)=>{

const isPopular = plan.popular

return(

<motion.div
key={index}
whileHover={{y:-12, scale:1.02}}
transition={{type:"spring", stiffness:200}}
className={`relative rounded-3xl p-[1px] 
${isPopular
? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
: "bg-white/10"}
`}
>

{/* inner card */}

<div className={`rounded-3xl p-6 md:p-10 backdrop-blur-xl ${isPopular ? "bg-black/70" : "bg-black/60"}`}> 


{/* badge */}

{isPopular && (

<div className="absolute -top-4 left-1/2 -translate-x-1/2
px-5 py-1 text-xs font-semibold rounded-full
bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg">

🔥 Most Popular

</div>

)}


{/* plan title */}

<h3 className="text-2xl font-bold mb-3">

{plan.name}

</h3>

<p className="text-gray-400 text-sm mb-6">

{plan.tag}

</p>


{/* price */}

<div className="flex items-end gap-2 mb-10">

<span className="text-5xl font-bold">

{plan.price}

</span>

<span className="text-gray-400 text-sm">

/project

</span>

</div>


{/* features */}

<ul className="space-y-4 mb-10">

{plan.features.map((f,i)=>(

<li key={i} className="flex items-center gap-3 text-gray-300 text-sm">

<div className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500/20">

✓

</div>

{f}

</li>

))}

</ul>


{/* button */}

<a
href="https://wa.me/917358847752"
className={`block text-center py-4 rounded-xl font-semibold transition
${isPopular
? "bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105"
: "bg-white/10 hover:bg-white/20"}
`}
>

Start This Project

</a>


</div>

</motion.div>

)

})}

</div>


{/* TRUST SECTION */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="mt-24 text-center"
>

<h3 className="text-3xl font-bold mb-6">

Why Businesses Choose Us

</h3>

<div className="grid md:grid-cols-3 gap-10 text-gray-400">

<div>
<h4 className="text-xl font-semibold text-white mb-2">

Fast Delivery

</h4>

<p>

Most websites delivered within 3-7 days.

</p>
</div>

<div>
<h4 className="text-xl font-semibold text-white mb-2">

Modern Design

</h4>

<p>

Premium UI inspired by modern SaaS websites.

</p>
</div>

<div>
<h4 className="text-xl font-semibold text-white mb-2">

Business Growth

</h4>

<p>

SEO optimized websites designed to bring customers.

</p>
</div>

</div>

</motion.div>


</div>

</section>

)
}