import LandingPageLayout from "../components/LandingPageLayout"

export default function GoogleBusinessPage() {
  return (
    <LandingPageLayout
      theme="emerald"
      eyebrow="Google Business Profile Setup in Kanyakumari"
      title="Get Found on Google Maps Across"
      highlight="Kanyakumari"
      description="We help local businesses set up, optimize, and improve their Google Business Profile so nearby customers can find them, call them, and trust them faster as part of a broader digital growth setup."
      snapshotTitle="Maps Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Profile setup, categories, photos, and local ranking signals" },
        { label: "Business Outcome", value: "Better visibility on Google Maps and local search" },
        { label: "Works Best When", value: "Customers search nearby before deciding who to call" },
      ]}
      bullets={[
        "Profile setup",
        "Category optimization",
        "Keyword refinement",
        "Maps visibility support",
      ]}
      idealFor="Restaurants, clinics, salons, gyms, agencies, repair services, and location-based businesses across Kanyakumari."
      deliverable="A clearer Google Business presence that is easier for nearby customers to find, compare, and trust."
      ctaTitle="Need to show up better on Google Maps?"
      ctaText="We improve the details, categories, and local trust signals that help your business get noticed when nearby customers are ready to choose."
      sections={[
        {
          title: "Setup and Optimization",
          body: "We help configure business details, service categories, descriptions, images, and ranking signals so your profile is ready for local search.",
        },
        {
          title: "Why Businesses Use It",
          body: "A stronger Google Business Profile helps you show up when customers search nearby services, compare providers, and decide who to contact first, especially when paired with websites, SEO, and ads.",
        },
        {
          title: "Best For",
          body: "This works especially well for restaurants, clinics, salons, gyms, agencies, repair services, and other location-driven businesses in Kanyakumari district.",
        },
      ]}
    />
  )
}
