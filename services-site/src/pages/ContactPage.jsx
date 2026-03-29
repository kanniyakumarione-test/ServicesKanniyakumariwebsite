import ContactSection from "../components/ContactSection"
import PageHero from "../components/PageHero"
import SiteLayout from "../components/SiteLayout"

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Start Your Project with a"
        highlight="Direct Inquiry"
        description="Use this page to reach out for websites, software, automation, AI, ads, or creative services with one clear enquiry flow."
      />
      <ContactSection />
    </SiteLayout>
  )
}
