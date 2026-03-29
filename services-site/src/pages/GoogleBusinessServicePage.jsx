import GoogleBusiness from "../components/GoogleBusiness"
import ContactSection from "../components/ContactSection"
import PageHero from "../components/PageHero"
import SiteLayout from "../components/SiteLayout"

export default function GoogleBusinessServicePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Google Business Service"
        title="Dedicated Google Maps Visibility Support for"
        highlight="Local Businesses"
        description="This page stands on its own for Google Business Profile setup, optimization, maps visibility, and local search improvements across Nagercoil and Kanyakumari."
      />
      <GoogleBusiness />
      <ContactSection />
    </SiteLayout>
  )
}
