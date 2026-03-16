import { motion } from "framer-motion"
import {
FaLaptopCode,
FaServer,
FaRobot,
FaGoogle,
FaCheckCircle
} from "react-icons/fa"

export default function Services(){

const services=[
{
icon:<FaLaptopCode/>,
title:"Website Development",
desc:"Modern responsive websites designed to help businesses attract more customers online.",
features:[
"SEO optimized structure",
"Ultra fast performance",
"Mobile-first responsive design",
"Contact forms & lead capture"
]
},
{
icon:<FaServer/>,
title:"Custom Web Applications",
desc:"Powerful software systems built to automate and simplify business operations.",
features:[
"Attendance systems",
"Billing & invoicing software",
"Admin dashboards",
"Cloud hosting integration"
]
},
{
icon:<FaRobot/>,
title:"AI Powered Tools",
desc:"Advanced AI features that help businesses automate communication and content.",
features:[
"AI chatbots",
"Automation tools",
"Image → alt text generators",
"API integrations"
]
},
{
icon:<FaGoogle/>,
title:"Google Business Optimization",
desc:"Improve visibility on Google Maps and attract more local customers.",
features:[
"Profile setup",
"SEO optimization",
"Review management",
"Local ranking improvement"
]
}
]

return(

<section id="services" className="relative py-20 overflow-hidden">


<div className="max-w-7xl mx-auto px-6">


{/* SECTION HEADER */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="text-center mb-20"
>



<h2 className="text-4xl md:text-5xl font-bold mt-6">

Digital Solutions for  

<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

Modern Businesses

</span>

</h2>

<p className="text-gray-400 mt-6 max-w-3xl mx-auto">

We help businesses in Nagercoil and Kanyakumari grow online with modern websites,
automation tools and digital solutions designed for performance and scalability.

</p>

</motion.div>


{/* SERVICES GRID */}

<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

{services.map((service,index)=>(
<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*0.1}}
whileHover={{y:-10}}
className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-2xl overflow-hidden"
>

{/* glow border */}

<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:via-purple-500/20 transition duration-500"></div>

{/* icon */}

<div className="text-3xl text-blue-400 mb-6">
{service.icon}
</div>

<h3 className="text-2xl font-semibold mb-4">
{service.title}
</h3>

<p className="text-gray-400 mb-6">
{service.desc}
</p>

<ul className="space-y-2">

{service.features.map((feature,i)=>(
<li key={i} className="flex items-center gap-2 text-sm text-gray-300">

<FaCheckCircle className="text-green-400"/>

{feature}

</li>
))}

</ul>

</motion.div>
))}

</div>


{/* PROCESS SECTION */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className="mt-28"
>

<h3 className="text-3xl font-bold text-center mb-12">

Our Simple  

<span className="text-blue-400">
Development Process
</span>

</h3>

<div className="grid md:grid-cols-4 gap-8 text-center">

{[
{
title:"Consultation",
desc:"We understand your business and goals."
},
{
title:"Design",
desc:"We design a modern UI and experience."
},
{
title:"Development",
desc:"We build fast and scalable solutions."
},
{
title:"Launch",
desc:"Your website goes live with full support."
}
].map((step,index)=>(
<motion.div
key={index}
whileHover={{scale:1.05}}
className="bg-white/5 p-6 rounded-xl border border-white/10"
>

<h4 className="text-xl font-semibold mb-2">
{step.title}
</h4>

<p className="text-gray-400 text-sm">
{step.desc}
</p>

</motion.div>
))}

</div>

</motion.div>

</div>

</section>

)

}