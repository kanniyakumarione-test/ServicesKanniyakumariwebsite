import { useState, useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Pricing from "./components/Pricing"
import GoogleBusiness from "./components/GoogleBusiness"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import WhatsApp from "./components/WhatsApp"

function App(){

	const [target, setTarget] = useState({ x: typeof window !== 'undefined' ? window.innerWidth/2 : 0, y: typeof window !== 'undefined' ? window.innerHeight/2 : 0 })
	const [pos, setPos] = useState(target)
	const [showSpotlight, setShowSpotlight] = useState(true)
	const rafRef = useRef(null)

	useEffect(()=>{
		// detect touch devices and disable spotlight for performance / UX
		const isTouch = (('ontouchstart' in window) || navigator.maxTouchPoints > 0)
		if(isTouch) setShowSpotlight(false)
	},[])

	useEffect(()=>{
		// animation loop to smoothly interpolate pos -> target
		const loop = ()=>{
			setPos(prev=>{
				const nx = prev.x + (target.x - prev.x) * 0.12
				const ny = prev.y + (target.y - prev.y) * 0.12
				return { x: nx, y: ny }
			})
			rafRef.current = requestAnimationFrame(loop)
		}
		rafRef.current = requestAnimationFrame(loop)
		return ()=> cancelAnimationFrame(rafRef.current)
	},[target])

	return(

	<div
		onMouseMove={(e) => setTarget({ x: e.clientX, y: e.clientY })}
		className="relative min-h-screen overflow-hidden"
	>

	{/* Global background glows (single source for whole site) */}
	<div className="hidden sm:block absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-500 opacity-10 blur-[160px] rounded-full pointer-events-none z-0"></div>
	<div className="hidden sm:block absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-red-500 opacity-10 blur-[160px] rounded-full pointer-events-none z-0"></div>

		{/* Global grid background (single source) */}
		<div
			className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
			style={{ zIndex: -2 }}
		/>

		{/* Global cursor spotlight (follows mouse) */}
		{showSpotlight && (
			<div
				className="pointer-events-none absolute inset-0 opacity-60"
				style={{
					zIndex: -1,
					background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.12), transparent 60%)`,
				}}
			/>
		)}

		<div className="relative z-10">
			<Navbar/>

			<Hero/>

			<Services/>

			<Portfolio/>

			<Pricing/>

			<GoogleBusiness/>

			<Testimonials/>

			<Footer/>

			<WhatsApp/>
		</div>

</div>

)

}

export default App