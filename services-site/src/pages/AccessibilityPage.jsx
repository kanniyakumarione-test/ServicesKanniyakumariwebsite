import LandingPageLayout from "../components/LandingPageLayout"

export default function AccessibilityPage() {
  return (
    <LandingPageLayout
      theme="amber"
      eyebrow="Web Accessibility Services"
      title="WCAG Audits & Remediation for "
      highlight="Inclusive Digital Growth"
      description="Ensure your websites, applications, and documents are usable by everyone. We provide rigorous accessibility testing to keep you legally compliant and universally accessible."
      snapshotTitle="Service Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "WCAG 2.1/2.2 AA Audits, screen-reader testing, keyboard-only navigation paths, and color contrast remediation." },
        { label: "Business Outcome", value: "Protection against ADA compliance lawsuits and access to a massive underserved market." },
        { label: "Works Best When", value: "You are preparing a major software launch, updating a municipal website, or modernizing an enterprise application." },
      ]}
      bullets={[
        "WCAG 2.1 / 2.2 Audits",
        "Screen Reader Testing",
        "Aria Pattern Implementation",
        "Developer Remediation Guides",
      ]}
      idealFor="Enterprise software companies, healthcare platforms, e-commerce brands, government contractors, and educational institutions."
      deliverable="A prioritized list of critical violations alongside exact code-level solutions on how your developers must fix them."
      ctaTitle="Is your website blocking 15% of users?"
      ctaText="Relying purely on automated tools misses 70% of real accessibility blockers. Let our human experts ensure your software works for absolutely everyone."
      sections={[
        {
          title: "Deep Technical Auditing",
          body: "We go beyond generic Lighthouse scans. Our team manually navigates your platform using VoiceOver, NVDA, and strictly keyboard paths to find the logical errors automated bots miss.",
        },
        {
          title: "Remediation & Code Support",
          body: "Finding the problem is only half the battle. We provide your development team with exact ARIA-compliant code snippets, semantic HTML structures, and contrast configurations.",
        },
        {
          title: "Ongoing Compliance",
          body: "Digital platforms shift constantly. We offer recurring check-ups to ensure that new code pushes or fresh content uploads do not violate your accessibility baselines.",
        },
      ]}
    />
  )
}
