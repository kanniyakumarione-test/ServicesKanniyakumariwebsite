export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://softgenz.kanniyakumarione.com/sitemap.xml',
  }
}
