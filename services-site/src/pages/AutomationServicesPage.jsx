import LandingPageLayout from "../components/LandingPageLayout"

export default function AutomationServicesPage() {
  return (
    <LandingPageLayout
      theme="cyan"
      eyebrow="Automation Services"
      title="Business Automation for"
      highlight="Faster Follow-Up"
      description="We create automation workflows for lead capture, WhatsApp replies, internal alerts, repetitive tasks, and connected systems so your business responds faster with less manual work."
      snapshotTitle="Automation Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Lead routing, WhatsApp replies, alerts, and task triggers" },
        { label: "Business Outcome", value: "Quicker response time with less missed follow-up" },
        { label: "Works Best When", value: "Manual handoffs are causing delays or dropped leads" },
      ]}
      bullets={[
        "Lead automation",
        "WhatsApp workflows",
        "Task triggers",
        "API connections",
      ]}
      idealFor="Businesses with repeated enquiries, sales follow-up, booking requests, or multi-step internal approval processes."
      deliverable="A connected workflow that handles repetitive actions automatically and keeps your team focused on higher-value work."
      ctaTitle="Need fewer manual steps in your business?"
      ctaText="We build practical automations that improve response speed, reduce missed leads, and connect the tools your team already depends on."
      sections={[
        {
          title: "What We Automate",
          body: "We automate enquiry handling, notifications, follow-up flows, form handling, admin processes, and connected actions between your tools.",
        },
        {
          title: "Why It Helps",
          body: "Automation reduces missed leads, shortens response time, and helps your business operate with more consistency even when the team is busy.",
        },
        {
          title: "Best For",
          body: "This is ideal for businesses with frequent enquiries, manual follow-up, repeated team tasks, or multi-step internal processes.",
        },
      ]}
    />
  )
}
