import React from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "./index.css"

export default function renderPage(PageComponent) {
  const rootElement = document.getElementById("root")
  const app = (
    <React.StrictMode>
      <PageComponent />
    </React.StrictMode>
  )

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app)
    return
  }

  createRoot(rootElement).render(app)
}
