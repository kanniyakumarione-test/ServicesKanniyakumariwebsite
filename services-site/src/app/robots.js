export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://services.kanniyakumarione.com/sitemap.xml',
  }
}
