import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import PageHero from "../components/PageHero"
import SiteLayout from "../components/SiteLayout"

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Web, Software, Automation, and Marketing Services for"
        highlight="Nagercoil and Kanyakumari"
        description="Browse our website development, custom software, automation, SEO, Google Business, Google Ads, and Meta Ads services as dedicated offerings for growing businesses."
      />
      <Services variant="full" />
      <WhyChooseUs />
    </SiteLayout>
  )
}
