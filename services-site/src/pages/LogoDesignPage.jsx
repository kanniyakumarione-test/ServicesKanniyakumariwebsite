import LandingPageLayout from "../components/LandingPageLayout"

export default function LogoDesignPage() {
  return (
    <LandingPageLayout
      theme="rose"
      eyebrow="Logo Design Services"
      title="Logo Design for"
      highlight="Stronger Brand Identity"
      description="We design clean, memorable logos and visual identity assets that help businesses look professional, recognizable, and ready for digital and print use."
      snapshotTitle="Brand Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Logo direction, identity assets, and practical brand use" },
        { label: "Business Outcome", value: "A more recognizable and trustworthy brand presence" },
        { label: "Works Best When", value: "Your business has grown past a temporary or inconsistent look" },
      ]}
      bullets={[
        "Logo concepts",
        "Brand direction",
        "Social-ready assets",
        "Business identity",
      ]}
      idealFor="New businesses, rebrands, service providers, local shops, and founders preparing for stronger digital visibility."
      deliverable="A visual identity direction that feels more professional across websites, profiles, ads, and business materials."
      ctaTitle="Need branding that feels more established?"
      ctaText="We design logos and identity assets that work in real business use, not just in a mockup, so your brand stays consistent everywhere."
      sections={[
        {
          title: "What We Design",
          body: "We create logo concepts, identity directions, profile visuals, and practical brand assets for digital platforms, marketing, and everyday business use.",
        },
        {
          title: "Why It Matters",
          body: "A strong logo helps your business look more trustworthy, more memorable, and more consistent across websites, ads, and social media.",
        },
        {
          title: "Best For",
          body: "This is ideal for new businesses, rebrands, service providers, local shops, and brands preparing for better online visibility.",
        },
      ]}
    />
  )
}
