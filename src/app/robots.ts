import { MetadataRoute } from 'next';

import { APP_URL } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === 'prod';

  return {
    rules: {
      userAgent: '*',
      ...(isProd && { allow: '/' }),
      disallow: isProd ? ['/_next/', '/images/'] : '/'
    },
    sitemap: isProd ? `${APP_URL}/sitemap.xml` : undefined
  };
}
