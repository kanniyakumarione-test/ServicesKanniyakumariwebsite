import LandingPageLayout from "../components/LandingPageLayout"

export default function GoogleAdsPage() {
  return (
    <LandingPageLayout
      theme="amber"
      eyebrow="Google Ads Services"
      title="Google Ads Campaigns for"
      highlight="Local Lead Generation"
      description="We help businesses launch and improve Google Ads campaigns that bring targeted traffic, calls, enquiries, and better-quality leads from search intent."
      snapshotTitle="Ads Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Search campaigns, keyword intent, and conversion tracking" },
        { label: "Business Outcome", value: "More enquiries from people already looking to buy" },
        { label: "Works Best When", value: "You want faster lead flow than SEO alone can provide" },
      ]}
      bullets={[
        "Search ads",
        "Lead campaigns",
        "Keyword targeting",
        "Conversion tracking",
      ]}
      idealFor="Local service businesses, clinics, education brands, agencies, and businesses that need ready-to-buy traffic."
      deliverable="A cleaner campaign setup with better targeting, stronger offer alignment, and a more direct path from search to enquiry."
      ctaTitle="Want high-intent traffic instead of random clicks?"
      ctaText="We align Google Ads with landing pages, offers, and tracking so your campaigns focus on qualified leads and measurable enquiries."
      sections={[
        {
          title: "What We Manage",
          body: "We handle campaign setup, keyword research, ad copy, targeting, landing page alignment, and basic conversion tracking improvements.",
        },
        {
          title: "Why It Works",
          body: "Google Ads helps you appear when customers are actively searching for the services you offer, making it a strong channel for direct lead generation.",
        },
        {
          title: "Best For",
          body: "This fits local service businesses, agencies, clinics, education brands, and businesses that want ready-to-buy traffic faster than organic growth alone.",
        },
      ]}
    />
  )
}
