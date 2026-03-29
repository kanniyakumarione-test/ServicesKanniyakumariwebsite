import LandingPageLayout from "../components/LandingPageLayout"

export default function AiServicesPage() {
  return (
    <LandingPageLayout
      theme="violet"
      eyebrow="AI Services"
      title="AI Solutions for"
      highlight="Business Efficiency"
      description="We help businesses use AI for chat support, content generation, workflow improvement, automation, and faster customer handling without adding more manual work."
      snapshotTitle="AI Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Chat support, content systems, and AI-assisted workflows" },
        { label: "Business Outcome", value: "Higher output with faster handling of routine requests" },
        { label: "Works Best When", value: "The team spends too much time on repeated questions or content tasks" },
      ]}
      bullets={[
        "AI chatbots",
        "Content workflows",
        "Business automation",
        "API integrations",
      ]}
      idealFor="Agencies, service businesses, clinics, education brands, and teams that want practical AI instead of hype-driven experiments."
      deliverable="A focused AI setup that supports customer communication, internal speed, and repeatable content or workflow tasks."
      ctaTitle="Want AI that actually helps the business run better?"
      ctaText="We apply AI where it reduces friction, improves consistency, and saves real team time across communication, content, and operations."
      sections={[
        {
          title: "What We Offer",
          body: "We build practical AI-assisted systems for customer communication, content tasks, internal workflows, and connected digital operations.",
        },
        {
          title: "Why It Helps",
          body: "AI can shorten response time, reduce repeated manual work, and improve how your team handles enquiries, content, and routine tasks.",
        },
        {
          title: "Best For",
          body: "This service works well for agencies, service businesses, clinics, education brands, and teams that want more output with fewer repetitive tasks.",
        },
      ]}
    />
  )
}
