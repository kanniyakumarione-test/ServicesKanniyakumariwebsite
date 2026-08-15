"use client";
import Faq from "../components/Faq"
import ContactSection from "../components/ContactSection"
import PageHero from "../components/PageHero"
import SiteLayout from "../components/SiteLayout"

export default function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Answers People Ask Before Starting a"
        highlight="Digital Project"
        description="Find clear answers about pricing, delivery time, hosting, support, and project expectations to get clarity quickly."
      />
      <Faq hideHeader={true} />
      <ContactSection />
    </SiteLayout>
  )
}
