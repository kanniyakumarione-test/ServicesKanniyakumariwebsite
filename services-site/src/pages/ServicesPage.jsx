import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import ContactSection from "../components/ContactSection"
import PageHero from "../components/PageHero"
import SiteLayout from "../components/SiteLayout"

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Web, Software, Automation, and Marketing Services for"
        highlight="Businesses Worldwide"
        description="Browse our website development, custom software, automation, SEO, Google Business, Google Ads, and Meta Ads services — delivered remotely for growing businesses everywhere."
      />
      <Services variant="full" hideHeader={true} />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </SiteLayout>
  )
}
