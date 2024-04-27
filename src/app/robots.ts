import { MetadataRoute } from 'next';

import { APP_URL } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_next/', '/images/']
    },
    sitemap: `${APP_URL}/sitemap.xml`
  };
}
