import { motion } from "framer-motion"

export default function Portfolio(){

const projects=[
{
title:"Modern Business Website",
image:"https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200",
desc:"High converting business website designed to attract local customers and rank on Google.",
tech:["React","Tailwind","SEO"]
},
{
title:"Employee Attendance System",
image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
desc:"Web application for tracking employee attendance and generating automated reports.",
tech:["React","Node.js","MySQL"]
},
{
title:"AI Content Generator",
image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
desc:"AI platform generating alt text and content automatically using advanced AI APIs.",
tech:["AI","Automation","API"]
},
{
title:"Travel Agency Website",
image:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
desc:"Interactive travel website for exploring destinations and contacting travel agents.",
tech:["React","Tailwind","UI/UX"]
}
]

return(

<section id="portfolio" className="relative py-28">

<div className="max-w-7xl mx-auto px-6">

{/* HEADER */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
className="text-center mb-24"
>

<h2 className="text-4xl md:text-6xl font-bold">

Our  

<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">

Work

</span>

</h2>

<p className="text-gray-400 mt-6 max-w-2xl mx-auto">
A collection of websites and applications designed to help businesses grow digitally.
</p>

</motion.div>



{/* PROJECTS */}

<div className="space-y-28">

{projects.map((project,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
className={`grid md:grid-cols-2 gap-12 items-center ${
index%2===1 ? "md:flex-row-reverse" : ""
}`}
>

{/* IMAGE */}

<motion.div
whileHover={{scale:1.03}}
className="relative rounded-3xl overflow-hidden"
>

<img
src={project.image}
alt={project.title}
className="w-full h-[420px] object-cover"
/
>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

</motion.div>



{/* TEXT */}

<div>

<h3 className="text-3xl font-semibold mb-4">
{project.title}
</h3>

<p className="text-gray-400 mb-6">
{project.desc}
</p>


{/* TECH */}

<div className="flex flex-wrap gap-3 mb-6">

{project.tech.map((tech,i)=>(

<span
key={i}
className="text-xs px-3 py-1 bg-white/10 border border-white/10 rounded-full"
>

{tech}

</span>

))}

</div>


{/* RESULT CARD */}

<div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-xl">

<p className="text-sm text-gray-300">
🚀 Result: Improved user engagement and faster performance.
</p>

</div>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}