import fs from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"

const rootDir = process.cwd()
const clientDir = path.join(rootDir, "dist")
const ssrDir = path.join(rootDir, "dist-ssr")

async function findSsrEntry() {
  const entries = await fs.readdir(ssrDir)
  const match = entries.find((file) => file.endsWith(".js") || file.endsWith(".mjs"))

  if (!match) {
    throw new Error("Unable to find SSR entry file in dist-ssr")
  }

  return path.join(ssrDir, match)
}

async function prerender() {
  const ssrEntryPath = await findSsrEntry()
  const { getPageNames, renderPage } = await import(pathToFileURL(ssrEntryPath).href)

  for (const pageName of getPageNames()) {
    const htmlPath = path.join(clientDir, pageName)
    const html = await fs.readFile(htmlPath, "utf8")
    const appHtml = renderPage(pageName)
    const prerenderedHtml = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    await fs.writeFile(htmlPath, prerenderedHtml, "utf8")
  }

  await fs.rm(ssrDir, { recursive: true, force: true })
}

prerender().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
