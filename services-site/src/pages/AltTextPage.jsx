import LandingPageLayout from "../components/LandingPageLayout"

export default function AltTextPage() {
  return (
    <LandingPageLayout
      theme="emerald"
      eyebrow="Alt Text Writing Services"
      title="Professional Alt Text for "
      highlight="SEO & Web Accessibility"
      description="We write descriptive, keyword-optimized, and WCAG-compliant alternative text for images across e-commerce platforms, publishing websites, and corporate domains."
      snapshotTitle="Service Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "E-commerce product catalogs, complex charts, diagrams, and high-volume image libraries." },
        { label: "Business Outcome", value: "Boosted Google Images ranking and full legal compliance for screen-reader accessibility." },
        { label: "Works Best When", value: "You have thousands of unoptimized product photos or are facing an accessibility audit." },
      ]}
      bullets={[
        "E-Commerce Catalog Writing",
        "Complex Diagram Descriptions",
        "SEO Keyword Integration",
        "WCAG 2.1 Compliance",
      ]}
      idealFor="Online retailers, publishers, Shopify store owners, educational platforms, and digital marketing agencies."
      deliverable="A comprehensive sheet of mapped alt text ready for injection, or direct integration into your CMS (WordPress, Shopify)."
      ctaTitle="Are your images invisible to Google?"
      ctaText="Search engines and screen readers can't see pictures. Our descriptive text directly translates your visual assets into SEO-ranking text."
      sections={[
        {
          title: "E-Commerce Optimization",
          body: "Products without descriptive alt text are losing millions of potential impression in Google Image Search. We write localized, high-conversion visual descriptors.",
        },
        {
          title: "Accessibility Compliance",
          body: "WCAG 2.1 requires accurate alt attributes for legally mandated web accessibility. We ensure visually impaired visitors understand every aspect of your visual content via screen readers.",
        },
        {
          title: "Complex Graphs & Diagrams",
          body: "Educational content and financial charts require technical interpretation. We break down complex visual data into logical, sequential text descriptions.",
        },
      ]}
    />
  )
}
