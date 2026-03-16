import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer(){

return(

<footer className="relative pt-24 pb-10 border-t border-white/10 overflow-hidden">

{/* background moved to global layout */}

<div className="max-w-7xl mx-auto px-6">

{/* GRID */}

<div className="grid md:grid-cols-4 gap-12 mb-16">

{/* BRAND */}

<div>

<h3 className="text-2xl font-bold mb-4">

<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
KANNIYAKUMARIONE
</span>

</h3>

<p className="text-gray-400 text-sm leading-relaxed">

We help businesses grow online with modern websites,
Google Business optimization and digital solutions.

</p>

<div className="flex gap-4 mt-6">

<a href="#" className="hover:text-blue-400 transition">
<FaInstagram/>
</a>

<a href="#" className="hover:text-blue-400 transition">
<FaLinkedin/>
</a>

<a href="#" className="hover:text-green-400 transition">
<FaWhatsapp/>
</a>

</div>

</div>


{/* QUICK LINKS */}

<div>

<h4 className="font-semibold mb-4">
Quick Links
</h4>

<ul className="space-y-3 text-gray-400 text-sm">

<li><a href="#services" className="hover:text-white">Services</a></li>
<li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
<li><a href="#pricing" className="hover:text-white">Pricing</a></li>
<li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>

</ul>

</div>


{/* SERVICES */}

<div>

<h4 className="font-semibold mb-4">
Services
</h4>

<ul className="space-y-3 text-gray-400 text-sm">

<li>Website Development</li>
<li>Web Applications</li>
<li>AI Tools Integration</li>
<li>Google Business Optimization</li>

</ul>

</div>


{/* CONTACT */}

<div>

<h4 className="font-semibold mb-4">
Contact
</h4>

<ul className="space-y-3 text-gray-400 text-sm">

<li>Nagercoil, Tamil Nadu</li>

<li className="flex items-center gap-2">
<FaEnvelope/> kanniyakumarione@gmail.com
</li>

<li className="flex items-center gap-2">
<FaWhatsapp/> +91 73588 47752
</li>

</ul>

<a
href="https://wa.me/917358847752"
className="inline-block mt-5 px-5 py-2 rounded-lg bg-green-500 hover:scale-105 transition"
>

Chat on WhatsApp

</a>

</div>

</div>


{/* COPYRIGHT */}

<div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">

© {new Date().getFullYear()} Kanniyakumarione. All rights reserved.

</div>

</div>

</footer>

)
}