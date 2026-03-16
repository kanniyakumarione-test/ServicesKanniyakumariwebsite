import { motion } from "framer-motion"
import { FaGoogle, FaMapMarkerAlt, FaStar, FaPhoneAlt, FaCheckCircle } from "react-icons/fa"

export default function GoogleBusiness(){

const features=[
{
icon:<FaMapMarkerAlt/>,
title:"Google Maps Visibility",
desc:"Your business appears when people search nearby services."
},
{
icon:<FaPhoneAlt/>,
title:"More Calls",
desc:"Customers can call your business directly from Google."
},
{
icon:<FaStar/>,
title:"Customer Reviews",
desc:"Build trust with ratings and reviews from customers."
},
{
icon:<FaGoogle/>,
title:"Higher Local Ranking",
desc:"Optimize your profile to rank above competitors."
}
]

const plans=[
{
name:"Basic Setup",
price:"₹2,000",
features:[
"Google Business Profile Creation",
"Business Information Setup",
"Location Verification Help",
"Contact Details Setup",
"Business Category Setup"
]
},
{
name:"Growth Package",
price:"₹5,000",
features:[
"Complete Profile Optimization",
"SEO Keyword Optimization",
"Business Photos Upload",
"Review Strategy",
"Google Maps Ranking Improvements"
],
popular:true
},
{
name:"Advanced Local SEO",
price:"₹10,000",
features:[
"Full Google Business Optimization",
"Monthly Post Updates",
"Review Management",
"Local SEO Strategy",
"Competitor Analysis"
]
}
]

return(

<section id="google-business" className="relative py-20 overflow-hidden">

<div className="max-w-7xl mx-auto px-6">


{/* SECTION HEADER */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-center mb-24"
>



<h2 className="text-4xl md:text-6xl font-bold mt-6">

Get Customers from  

<span className="bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">

Google Maps

</span>

</h2>

<p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">

Many customers search businesses directly on Google.
If your business is not visible on Google Maps, you are losing customers.
We help local businesses appear in search results and attract nearby customers.

</p>

</motion.div>


{/* FEATURES */}

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-32">

{features.map((feature,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
whileHover={{y:-10}}
className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl group relative"
>

<div className="text-3xl text-blue-400 mb-5">
{feature.icon}
</div>

<h3 className="text-xl font-semibold mb-3">
{feature.title}
</h3>

<p className="text-gray-400 text-sm">
{feature.desc}
</p>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 via-red-500/10 to-yellow-500/10 rounded-2xl"></div>

</motion.div>

))}

</div>


{/* HOW IT WORKS */}

<div className="text-center mb-20">

<h3 className="text-3xl font-bold mb-10">
How We Setup Your Google Business
</h3>

<div className="grid md:grid-cols-4 gap-8 text-gray-400">

<div>
<h4 className="text-lg font-semibold text-white">1. Create Profile</h4>
<p>We create and verify your Google Business listing.</p>
</div>

<div>
<h4 className="text-lg font-semibold text-white">2. Optimize Profile</h4>
<p>We add keywords, images and business details.</p>
</div>

<div>
<h4 className="text-lg font-semibold text-white">3. Improve Ranking</h4>
<p>We optimize your listing to appear in local search.</p>
</div>

<div>
<h4 className="text-lg font-semibold text-white">4. Attract Customers</h4>
<p>Your business gets calls, directions and reviews.</p>
</div>

</div>

</div>


{/* PRICING SECTION */}

<div className="grid md:grid-cols-3 gap-10">

{plans.map((plan,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.15}}
whileHover={{y:-12}}
className={`relative p-6 md:p-10 rounded-3xl backdrop-blur-xl border
${plan.popular
? "border-blue-400 bg-white/10 scale-105"
: "border-white/10 bg-white/5"}
`}
>

{plan.popular &&(
<div className="absolute -top-4 left-1/2 -translate-x-1/2
px-4 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500 to-red-500">

Most Popular

</div>
)}

<h3 className="text-2xl font-bold mb-4">
{plan.name}
</h3>

<div className="text-4xl font-bold mb-8">

{plan.price}

</div>

<ul className="space-y-3 mb-8">

{plan.features.map((feature,i)=>(
<li key={i} className="flex items-center gap-3 text-gray-300 text-sm">

<FaCheckCircle className="text-green-400"/>

{feature}

</li>
))}

</ul>

<a
href="https://wa.me/917358847752"
className="block text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 to-red-500 hover:scale-105 transition"
>

Get Started

</a>

</motion.div>

))}

</div>


{/* CTA SECTION */}

<div className="text-center mt-24">

<h3 className="text-3xl font-bold mb-4">
Start Getting Customers from Google Today
</h3>

<p className="text-gray-400 mb-8">
We help businesses appear in Google Maps and local search results.
</p>

<a
href="https://wa.me/917358847752"
className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-red-500 hover:scale-105 transition"
>

Setup My Google Business

</a>

</div>


</div>

</section>

)
}