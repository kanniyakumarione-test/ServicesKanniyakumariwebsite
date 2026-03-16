import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"

export default function Testimonials(){

const testimonials=[

{
name:"Arun Kumar",
business:"Restaurant Owner - Nagercoil",
review:"Our restaurant started appearing on Google Maps and we are getting more customers every week. Great service!",
image:"https://randomuser.me/api/portraits/men/32.jpg"
},

{
name:"Priya Joseph",
business:"Boutique Owner",
review:"Very professional website development. My business now looks premium online and customers trust it more.",
image:"https://randomuser.me/api/portraits/women/44.jpg"
},

{
name:"Rahul Das",
business:"Gym Trainer",
review:"My Google Business profile was optimized perfectly and now I receive daily calls from new clients.",
image:"https://randomuser.me/api/portraits/men/67.jpg"
},

{
name:"Maria Thomas",
business:"Beauty Salon",
review:"Amazing service and support. The website and Google profile helped increase bookings.",
image:"https://randomuser.me/api/portraits/women/68.jpg"
}

]

return(

<section id="testimonials" className="relative py-28 overflow-hidden">

<div className="max-w-7xl mx-auto px-6">

{/* HEADER */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
className="text-center mb-20"
>

<h2 className="text-4xl md:text-6xl font-bold">

What  

<span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">

Clients Say

</span>

</h2>

<p className="text-gray-400 mt-6 max-w-2xl mx-auto">
Businesses in Nagercoil trust us to build their digital presence.
</p>

</motion.div>



{/* SLIDER */}

<div className="relative overflow-hidden">

<motion.div
animate={{x:["0%","-50%"]}}
transition={{duration:25,repeat:Infinity,ease:"linear"}}
className="flex gap-8 w-max"
>

{[...testimonials,...testimonials].map((item,index)=>(

<div
key={index}
className="w-[320px] p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative group"
>

{/* glow */}

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl"></div>


{/* review */}

<p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
“{item.review}”
</p>


{/* stars */}

<div className="flex text-yellow-400 mb-6 relative z-10">

<FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>

</div>


{/* client */}

<div className="flex items-center gap-4 relative z-10">

<img
src={item.image}
alt={`${item.name} - ${item.business}`}
className="w-12 h-12 rounded-full object-cover"
/>

<div>

<h4 className="font-semibold">
{item.name}
</h4>

<p className="text-sm text-gray-400">
{item.business}
</p>

</div>

</div>

</div>

))}

</motion.div>

</div>



{/* CTA */}

<div className="text-center mt-24">

<h3 className="text-3xl font-bold mb-4">
Ready to Grow Your Business?
</h3>

<p className="text-gray-400 mb-8">
Get a professional website that attracts customers.
</p>

<a
href="https://wa.me/917358847752"
className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition"
>
Start Your Project
</a>

</div>

</div>

</section>

)

}