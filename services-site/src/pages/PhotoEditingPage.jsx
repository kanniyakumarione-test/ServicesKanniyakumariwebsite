import LandingPageLayout from "../components/LandingPageLayout"

export default function PhotoEditingPage() {
  return (
    <LandingPageLayout
      theme="emerald"
      eyebrow="Photo Editing Services"
      title="Photo Editing for"
      highlight="Better Visual Presentation"
      description="We edit business photos for social media, products, campaigns, menus, portfolios, and branding so your visuals look cleaner, brighter, and more professional."
      snapshotTitle="Photo Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Retouching, cleanup, consistency, and campaign-ready visuals" },
        { label: "Business Outcome", value: "Images that look more polished and trustworthy" },
        { label: "Works Best When", value: "Your photos are usable, but not yet strong enough for marketing" },
      ]}
      bullets={[
        "Retouching",
        "Product edits",
        "Social visuals",
        "Campaign images",
      ]}
      idealFor="Boutiques, restaurants, salons, e-commerce sellers, agencies, and any business that relies on visual presentation."
      deliverable="A sharper image set that looks more consistent across websites, listings, menus, social posts, and ads."
      ctaTitle="Need your business photos to look more polished?"
      ctaText="We refine visuals for digital use so your products, spaces, and brand content feel cleaner, brighter, and more professional."
      sections={[
        {
          title: "What We Edit",
          body: "We improve product images, business photos, profile visuals, menu images, campaign graphics, and social content visuals for better presentation.",
        },
        {
          title: "Why It Matters",
          body: "Better-edited images help your business look more polished and increase trust across websites, listings, social media, and ads.",
        },
        {
          title: "Best For",
          body: "This service is useful for boutiques, restaurants, salons, agencies, e-commerce sellers, and businesses that rely on visual presentation.",
        },
      ]}
    />
  )
}
