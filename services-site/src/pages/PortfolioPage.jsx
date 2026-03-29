import Portfolio from "../components/Portfolio"
import BeforeAfter from "../components/BeforeAfter"
import CaseStudies from "../components/CaseStudies"
import PageHero from "../components/PageHero"
import SiteLayout from "../components/SiteLayout"

export default function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="See the Kind of Websites and"
        highlight="Digital Projects We Build"
        description="This page brings together project samples, case studies, and before-and-after improvements so visitors can review your work like a full service website."
      />
      <Portfolio />
      <BeforeAfter />
      <CaseStudies />
    </SiteLayout>
  )
}
