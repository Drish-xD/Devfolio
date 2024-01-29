import { getAllProjects } from '@/utils/contentful';

const URL = 'https://drishxd.dev';

export default async function sitemap() {
  // static routes
  const routes = [''].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date()
  }));

  // dynamic routes
  const projects = (await getAllProjects()).map(({ slug }) => ({
    url: `${URL}/project/${slug}`,
    lastModified: new Date()
  }));
  return [...routes, ...projects];
}
