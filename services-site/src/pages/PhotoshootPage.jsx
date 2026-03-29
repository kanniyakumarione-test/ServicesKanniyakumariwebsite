import LandingPageLayout from "../components/LandingPageLayout"

export default function PhotoshootPage() {
  return (
    <LandingPageLayout
      theme="emerald"
      eyebrow="Photoshoot Services"
      title="Photoshoot Support for"
      highlight="Business Branding"
      description="We help businesses with photoshoot planning and content support for branding, social media, campaigns, products, interiors, and promotional visuals."
      snapshotTitle="Shoot Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Brand shoots, product visuals, spaces, and campaign content" },
        { label: "Business Outcome", value: "Stronger original content for every marketing channel" },
        { label: "Works Best When", value: "Stock visuals no longer represent the quality of your business" },
      ]}
      bullets={[
        "Brand shoots",
        "Product shoots",
        "Social content",
        "Campaign visuals",
      ]}
      idealFor="Restaurants, salons, boutiques, clinics, travel businesses, gyms, and brands building a stronger visual library."
      deliverable="A more usable collection of original visuals for websites, social media, menus, ads, listings, and promotions."
      ctaTitle="Need original visuals instead of generic content?"
      ctaText="We support business photoshoots that give you better material for websites, campaigns, social media, and everyday brand communication."
      sections={[
        {
          title: "What We Cover",
          body: "We support business photoshoots for products, spaces, services, branding, campaigns, and digital content planning.",
        },
        {
          title: "Why It Helps",
          body: "Good photos give you stronger material for websites, ads, social media, listings, and promotional campaigns across every channel.",
        },
        {
          title: "Best For",
          body: "This is ideal for restaurants, salons, boutiques, clinics, travel businesses, gyms, and brands that need stronger visual content.",
        },
      ]}
    />
  )
}
