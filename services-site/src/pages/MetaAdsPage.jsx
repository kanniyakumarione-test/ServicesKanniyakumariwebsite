import LandingPageLayout from "../components/LandingPageLayout"

export default function MetaAdsPage() {
  return (
    <LandingPageLayout
      theme="rose"
      eyebrow="Meta Ads Services"
      title="Meta Ads Support for"
      highlight="Awareness and Enquiries"
      description="We help businesses run Meta Ads on Facebook and Instagram to build awareness, generate enquiries, promote offers, and stay visible to the right audience."
      snapshotTitle="Meta Ads Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Audience targeting, offer creatives, and enquiry campaigns" },
        { label: "Business Outcome", value: "Stronger visibility and more message-driven leads" },
        { label: "Works Best When", value: "Your business depends on attention before people search" },
      ]}
      bullets={[
        "Facebook ads",
        "Instagram ads",
        "Audience targeting",
        "Campaign creatives",
      ]}
      idealFor="Salons, restaurants, boutiques, events, trainers, clinics, and brands that need consistent local attention on social platforms."
      deliverable="Campaigns and creative direction built to generate awareness, conversations, and better quality response from your audience."
      ctaTitle="Need more visibility on Instagram and Facebook?"
      ctaText="We shape Meta campaigns around your offer, your audience, and the kind of attention that turns into real enquiries."
      sections={[
        {
          title: "What We Handle",
          body: "We support campaign planning, audience setup, creative direction, offer positioning, basic landing flow support, and improvement-focused campaign structure.",
        },
        {
          title: "Why It Helps",
          body: "Meta Ads can put your business in front of the right people before they search, helping you stay visible, promote offers, and build consistent enquiry flow.",
        },
        {
          title: "Best For",
          body: "This works especially well for salons, restaurants, boutiques, trainers, clinics, events, and businesses that need stronger visibility on social platforms.",
        },
      ]}
    />
  )
}
