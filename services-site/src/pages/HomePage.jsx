import Hero from "../components/Hero"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import ServiceAreas from "../components/ServiceAreas"
import CaseStudies from "../components/CaseStudies"
import Testimonials from "../components/Testimonials"
import ClientTrustStrip from "../components/ClientTrustStrip"
import ContactSection from "../components/ContactSection"
import SiteLayout from "../components/SiteLayout"

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <ClientTrustStrip />
      <WhyChooseUs />
      <Services variant="compact" />
      <CaseStudies />
      <Testimonials />
      <ServiceAreas />
      <ContactSection />
    </SiteLayout>
  )
}
