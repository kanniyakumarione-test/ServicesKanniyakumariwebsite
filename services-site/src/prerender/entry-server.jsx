import React from "react"
import { renderToString } from "react-dom/server"
import HomePage from "../pages/HomePage"
import ServicesPage from "../pages/ServicesPage"
import SoftwareServicesPage from "../pages/SoftwareServicesPage"
import AiServicesPage from "../pages/AiServicesPage"
import AutomationServicesPage from "../pages/AutomationServicesPage"
import PortfolioPage from "../pages/PortfolioPage"
import PricingPage from "../pages/PricingPage"
import FaqPage from "../pages/FaqPage"
import ContactPage from "../pages/ContactPage"
import GoogleBusinessServicePage from "../pages/GoogleBusinessServicePage"
import GoogleAdsPage from "../pages/GoogleAdsPage"
import MetaAdsPage from "../pages/MetaAdsPage"
import LogoDesignPage from "../pages/LogoDesignPage"
import VideoEditingPage from "../pages/VideoEditingPage"
import PhotoEditingPage from "../pages/PhotoEditingPage"
import PhotoshootPage from "../pages/PhotoshootPage"
import WebsiteDeveloperPage from "../pages/WebsiteDeveloperPage"
import GoogleBusinessPage from "../pages/GoogleBusinessPage"

const pageMap = {
  "index.html": HomePage,
  "services.html": ServicesPage,
  "software-services.html": SoftwareServicesPage,
  "ai-services.html": AiServicesPage,
  "automation-services.html": AutomationServicesPage,
  "portfolio.html": PortfolioPage,
  "pricing.html": PricingPage,
  "faq.html": FaqPage,
  "contact.html": ContactPage,
  "google-business.html": GoogleBusinessServicePage,
  "google-ads-services.html": GoogleAdsPage,
  "meta-ads-services.html": MetaAdsPage,
  "logo-design-services.html": LogoDesignPage,
  "video-editing-services.html": VideoEditingPage,
  "photo-editing-services.html": PhotoEditingPage,
  "photoshoot-services.html": PhotoshootPage,
  "website-developer-in-nagercoil.html": WebsiteDeveloperPage,
  "google-business-profile-setup-in-kanyakumari.html": GoogleBusinessPage,
}

export function getPageNames() {
  return Object.keys(pageMap)
}

export function renderPage(pageName) {
  const PageComponent = pageMap[pageName]

  if (!PageComponent) {
    throw new Error(`No prerender page registered for ${pageName}`)
  }

  return renderToString(
    <React.StrictMode>
      <PageComponent />
    </React.StrictMode>,
  )
}
