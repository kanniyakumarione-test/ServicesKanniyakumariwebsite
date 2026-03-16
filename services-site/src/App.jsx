import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Pricing from "./components/Pricing"
import GoogleBusiness from "./components/GoogleBusiness"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import WhatsApp from "./components/WhatsApp"
import Phone from "./components/Phone"
import logo from "./assets/logo.png"

function App(){

	const [loading, setLoading] = useState(true)
	// Use refs instead of state for animation to prevent re-rendering the whole App on every frame
	const mousePos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth/2 : 0, y: typeof window !== 'undefined' ? window.innerHeight/2 : 0 })
	const currentPos = useRef({ ...mousePos.current })
	const spotlightRef = useRef(null)
	const [showSpotlight, setShowSpotlight] = useState(true)
	const rafRef = useRef(null)

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 2500)
		return () => clearTimeout(timer)
	}, [])

	useEffect(()=>{
		// detect touch devices and disable spotlight for performance / UX
		const isTouch = (('ontouchstart' in window) || navigator.maxTouchPoints > 0)
		if(isTouch) setShowSpotlight(false)
	},[])

	useEffect(()=>{
		// animation loop to smoothly interpolate pos -> target
		// Using direct DOM manipulation via ref for performance
		const loop = ()=>{
			const target = mousePos.current
			const current = currentPos.current

			current.x += (target.x - current.x) * 0.12
			current.y += (target.y - current.y) * 0.12

			if(spotlightRef.current){
				spotlightRef.current.style.background = `radial-gradient(600px at ${current.x}px ${current.y}px, rgba(59,130,246,0.12), transparent 60%)`
			}

			rafRef.current = requestAnimationFrame(loop)
		}
		rafRef.current = requestAnimationFrame(loop)
		return ()=> cancelAnimationFrame(rafRef.current)
	},[])

	return(

	<div
		onMouseMove={(e) => { mousePos.current = { x: e.clientX, y: e.clientY } }}
		className="relative min-h-screen overflow-hidden"
	>

	<AnimatePresence>
		{loading && (
			<motion.div
				initial={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.8 }}
				className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
			>
				<motion.img
					src={logo}
					alt="Loading..."
					initial={{ scale: 0.8, opacity: 0.5 }}
					animate={{ scale: 1.1, opacity: 1 }}
					transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
					className="w-28 h-28 object-contain"
				/>
			</motion.div>
		)}
	</AnimatePresence>

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
				ref={spotlightRef}
				className="pointer-events-none absolute inset-0 opacity-60"
				style={{
					zIndex: -1,
					background: `radial-gradient(600px at ${currentPos.current.x}px ${currentPos.current.y}px, rgba(59,130,246,0.12), transparent 60%)`,
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
			<Phone/>
		</div>

</div>

)

}

export default App