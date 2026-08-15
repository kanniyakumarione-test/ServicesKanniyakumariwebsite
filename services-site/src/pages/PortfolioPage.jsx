"use client";
import Portfolio from "../components/Portfolio"
import BeforeAfter from "../components/BeforeAfter"
import CaseStudies from "../components/CaseStudies"
import PageHero from "../components/PageHero"
import SiteLayout from "../components/SiteLayout"

export default function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHero
        title="See the Kind of Websites and"
        highlight="Digital Projects We Build"
        description="Explore our project samples, case studies, and before-and-after improvements to see the quality of our work firsthand."
      />
      <Portfolio />
      <BeforeAfter />
      <CaseStudies />
    </SiteLayout>
  )
}
