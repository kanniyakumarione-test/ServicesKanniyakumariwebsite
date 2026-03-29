import Hero from "../components/Hero"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import ServiceAreas from "../components/ServiceAreas"
import CaseStudies from "../components/CaseStudies"
import SiteLayout from "../components/SiteLayout"

export default function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <WhyChooseUs />
      <Services variant="compact" />
      <CaseStudies />
      <ServiceAreas />
    </SiteLayout>
  )
}
