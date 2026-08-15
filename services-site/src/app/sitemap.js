import fs from 'fs';
import path from 'path';

export default function sitemap() {
  const baseUrl = 'https://softgenz.kanniyakumarione.com';

  // We can hardcode the most important ones or read the directories
  const routes = [
    '',
    '/services',
    '/software-services',
    '/ai-services',
    '/automation-services',
    '/portfolio',
    '/pricing',
    '/google-business',
    '/google-ads-services',
    '/meta-ads-services',
    '/logo-design-services',
    '/video-editing-services',
    '/photo-editing-services',
    '/photoshoot-services',
    '/faq',
    '/contact',
    '/website-developer-in-nagercoil',
    '/google-business-profile-setup-in-kanyakumari',
    '/blog',
    '/mobile-first-website-nagercoil',
    '/ai-automation-customer-service',
    '/how-to-grow-your-business-in-kanyakumari',
    '/custom-software-vs-excel',
    '/seo-strategies-services-businesses',
    '/data-annotation-services',
    '/alt-text-writing-services',
    '/accessibility-services',
    '/privacy-policy',
    '/about',
    '/terms-of-service',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
