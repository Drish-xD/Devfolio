import { MetadataRoute } from 'next';

import { getAllProjects } from '@/utils/contentful';

const URL = 'https://drishxd.dev';
const STATIC_ROUTES = [''];

export const dynamic = 'force-static';

/**
 * Generate sitemap for static and dynamic routes.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // static routes
  const routes: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'never',
    priority: 1.0
  }));

  // dynamic routes
  const projects = await projectsSitemap();

  return [...routes, ...projects];
}

/**
 * Retrieves the sitemap for all projects.
 */
const projectsSitemap = async () => {
  const projects = (await getAllProjects()) || [];

  const projectsSitemap: MetadataRoute.Sitemap = projects.map(({ slug }) => ({
    url: `${URL}/project/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1.0
  }));

  return projectsSitemap;
};
