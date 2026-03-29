import LandingPageLayout from "../components/LandingPageLayout"

export default function WebsiteDeveloperPage() {
  return (
    <LandingPageLayout
      theme="blue"
      eyebrow="Website Developer in Nagercoil"
      title="SEO-Friendly Websites for"
      highlight="Businesses in Nagercoil"
      description="Kanniyakumarione builds modern business websites for local brands that need stronger online trust, better Google visibility, and better support from a broader digital services partner."
      snapshotTitle="Website Snapshot"
      snapshotItems={[
        { label: "Typical Focus", value: "Business websites, landing pages, and local SEO structure" },
        { label: "Business Outcome", value: "More trust, better discoverability, and cleaner first impressions" },
        { label: "Works Best When", value: "Your business needs a stronger digital base before scaling ads or automation" },
      ]}
      bullets={[
        "Business websites",
        "Local SEO structure",
        "Mobile-first design",
        "Fast launch timelines",
      ]}
      idealFor="Restaurants, salons, clinics, shops, travel agencies, and service businesses that need a more credible online presence."
      deliverable="A website that looks stronger, explains your offer clearly, and gives the business a better foundation for SEO, ads, and follow-up."
      ctaTitle="Need a website that actually supports growth?"
      ctaText="We build business websites that do more than look good. They help you earn trust, capture enquiries, and support the rest of your digital marketing."
      sections={[
        {
          title: "What We Build",
          body: "We create brochure websites, landing pages, portfolio websites, and business websites that can connect with SEO, ads, automation, and follow-up systems.",
        },
        {
          title: "Why Local SEO Matters",
          body: "Customers in Nagercoil search by service and location. A well-structured website helps your business appear more trustworthy and easier to discover.",
        },
        {
          title: "Who This Fits",
          body: "This service is ideal for restaurants, salons, clinics, shops, travel agencies, and growing service businesses that need a stronger digital presence and room to scale into ads or automation later.",
        },
      ]}
    />
  )
}
