import { MetadataRoute } from 'next';

import { APP_URL, isProd } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(isProd && { allow: '/' }),
      disallow: isProd ? ['/_next/'] : '/'
    },
    sitemap: isProd ? `${APP_URL}/sitemap.xml` : undefined
  };
}
