"use client";
import Hero from "../components/Hero"
import Technologies from "../components/Technologies"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import ServiceAreas from "../components/ServiceAreas"
import CaseStudies from "../components/CaseStudies"
import Testimonials from "../components/Testimonials"
import ClientTrustStrip from "../components/ClientTrustStrip"
import ContactSection from "../components/ContactSection"
import SiteLayout from "../components/SiteLayout"
import Strands from "../components/Strands"

const Divider = () => (
  <div className="h-40 w-full -my-12 relative z-0 flex items-center justify-center opacity-80 mix-blend-screen pointer-events-none">
    <Strands 
      colors={['#f59e0b', '#fbbf24', '#ffffff', '#262626']} 
      count={4} 
      waviness={1.2}
      amplitude={0.5}
    />
  </div>
);

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Divider />
      <Technologies />
      <Divider />
      <ClientTrustStrip />
      <Divider />
      <WhyChooseUs />
      <Divider />
      <Services variant="compact" />
      <Divider />
      <CaseStudies />
      <Divider />
      <Testimonials />
      <Divider />
      <ServiceAreas />
      <Divider />
      <ContactSection />
    </SiteLayout>
  )
}
