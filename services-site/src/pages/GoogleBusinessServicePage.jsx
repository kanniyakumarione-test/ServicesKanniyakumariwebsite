"use client";
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
        description="Expert Google Business Profile setup, optimization, maps visibility, and local search improvements for businesses globally."
      />
      <GoogleBusiness />
      <ContactSection />
    </SiteLayout>
  )
}
