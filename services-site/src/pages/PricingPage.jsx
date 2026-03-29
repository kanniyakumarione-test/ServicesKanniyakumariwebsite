import Pricing from "../components/Pricing"
import Faq from "../components/Faq"
import ContactSection from "../components/ContactSection"
import PageHero from "../components/PageHero"
import SiteLayout from "../components/SiteLayout"

export default function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing"
        title="Clear Service Packages for"
        highlight="Growing Businesses"
        description="Compare service packages, support levels, and project scope options so you can choose the right starting point for your business."
      />
      <Pricing />
      <ContactSection />
    </SiteLayout>
  )
}
