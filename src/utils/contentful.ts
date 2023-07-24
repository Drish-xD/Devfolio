import { createClient } from 'contentful';
import { cache } from 'react';

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN!
});

// Retrieve the list of projects
const getAllProjects = cache(async () => {
  const res = await client.getEntries({
    content_type: 'projects'
  });

  const items = res.items.map((i) => i.fields);

  return items.map(({ name, slug, tags, image }, index) => ({
    id: index,
    name,
    slug,
    tags,
    // @ts-ignore
    image: `https:${image.fields.file.url}`
  }));
});

const getSingleProject = cache(async (slug_: string) => {
  const response = await client.getEntries({
    content_type: 'projects',
    'fields.slug': slug_
  });

  const { name, slug, tags, github, live, mdx, image } = response.items[0].fields;

  return {
    name,
    slug,
    tags,
    github,
    live,
    mdx,
    // @ts-ignore
    image: `https:${image.fields.file.url}`
  };
});

export { getAllProjects, getSingleProject };
