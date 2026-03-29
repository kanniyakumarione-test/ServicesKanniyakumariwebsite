import LandingPageLayout from "../components/LandingPageLayout"

export default function VideoEditingPage() {
  return (
    <LandingPageLayout
      theme="amber"
      eyebrow="Video Editing Services"
      title="Video Editing for"
      highlight="Promotions and Content"
      description="We edit business videos for promotions, reels, ads, explainers, and social content so your brand communicates clearly and looks polished online."
      snapshotTitle="Video Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Promos, reels, ad edits, and social-first content" },
        { label: "Business Outcome", value: "More attention and sharper communication online" },
        { label: "Works Best When", value: "Raw footage exists but the final content still feels unfinished" },
      ]}
      bullets={[
        "Promo videos",
        "Reels editing",
        "Ad creatives",
        "Social content",
      ]}
      idealFor="Brands active on Instagram and Facebook, plus businesses that want sharper promo content for offers and launches."
      deliverable="Edited videos that feel cleaner, faster, and more ready for social media, ads, and digital campaigns."
      ctaTitle="Need stronger video content for promotions?"
      ctaText="We turn raw clips into polished reels, explainers, and ad creatives that support your campaigns, launches, and everyday content flow."
      sections={[
        {
          title: "What We Edit",
          body: "We edit promotional videos, short-form content, ad creatives, business intros, walkthrough clips, and simple marketing videos for online use.",
        },
        {
          title: "Why It Helps",
          body: "Strong video content increases attention, improves ad performance, and helps businesses communicate offers and credibility faster.",
        },
        {
          title: "Best For",
          body: "This fits salons, restaurants, boutiques, agencies, trainers, clinics, travel businesses, and brands active on Instagram and Facebook.",
        },
      ]}
    />
  )
}
