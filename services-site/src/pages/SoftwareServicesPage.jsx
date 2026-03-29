import LandingPageLayout from "../components/LandingPageLayout"

export default function SoftwareServicesPage() {
  return (
    <LandingPageLayout
      theme="blue"
      eyebrow="Custom Software Services"
      title="Custom Software Solutions for"
      highlight="Growing Businesses"
      description="We build custom software, admin dashboards, internal tools, billing systems, and business applications that simplify daily operations and reduce manual work."
      snapshotTitle="Software Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Dashboards, internal tools, billing, and operations flow" },
        { label: "Business Outcome", value: "Less manual work and better day-to-day control" },
        { label: "Works Best When", value: "Spreadsheets and scattered tools are slowing the team down" },
      ]}
      bullets={[
        "Admin dashboards",
        "Billing and invoicing",
        "Attendance systems",
        "Operations software",
      ]}
      idealFor="Clinics, schools, agencies, shops, and service teams that need a system shaped around their real process."
      deliverable="A business tool your team can actually use every day, with cleaner workflows and fewer repetitive admin tasks."
      ctaTitle="Need software that fits your workflow?"
      ctaText="We design custom systems around how your team already operates, then connect them with websites, enquiries, and follow-up processes when needed."
      sections={[
        {
          title: "What We Build",
          body: "We create internal business tools, dashboards, tracking systems, billing software, and custom applications based on how your business already works.",
        },
        {
          title: "Why It Matters",
          body: "Custom software saves time, reduces repeated manual tasks, improves accuracy, and gives you more control over your operations.",
        },
        {
          title: "Best For",
          body: "This service fits clinics, schools, agencies, shops, service teams, and businesses that need a more reliable operational workflow.",
        },
      ]}
    />
  )
}
