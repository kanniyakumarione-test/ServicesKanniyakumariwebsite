import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: {
    rollupOptions: isSsrBuild
      ? undefined
      : {
          input: {
            main: "index.html",
            services: "services.html",
            softwareServices: "software-services.html",
            aiServices: "ai-services.html",
            automationServices: "automation-services.html",
            portfolio: "portfolio.html",
            pricing: "pricing.html",
            googleBusinessService: "google-business.html",
            googleAds: "google-ads-services.html",
            metaAds: "meta-ads-services.html",
            logoDesign: "logo-design-services.html",
            videoEditing: "video-editing-services.html",
            photoEditing: "photo-editing-services.html",
            photoshoot: "photoshoot-services.html",
            faq: "faq.html",
            contact: "contact.html",
            websiteDeveloper: "website-developer-in-nagercoil.html",
            googleBusiness: "google-business-profile-setup-in-kanyakumari.html",
          },
        },
      },
}))
