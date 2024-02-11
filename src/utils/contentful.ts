import { cache } from 'react';

import { Asset, createClient } from 'contentful';

import { ProjectSkeleton, ProjectsSkeleton } from '@/types';

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT
});

// Retrieve the list of projects
const getAllProjects = cache(async () => {
  try {
    const { items } = await client.getEntries<ProjectsSkeleton>({
      content_type: 'projects',
      order: ['fields.index'],
      select: ['fields.name', 'fields.slug', 'fields.tags', 'fields.image']
    });

    const projects = items.map(({ fields }) => {
      const image = fields.image as Asset<undefined, string>;
      return {
        name: fields.name,
        slug: fields.slug,
        tags: fields.tags,
        image: {
          src: `https:${image.fields.file?.url}`,
          alt: image.fields.description
        }
      };
    });

    return projects;
  } catch (error) {
    console.log(error);
  }
});

const getSingleProject = cache(async (slug_: string) => {
  try {
    const { items } = await client.getEntries<ProjectSkeleton>({
      content_type: 'projects',
      'fields.slug': slug_
    });

    const { image, ...rest } = items[0].fields;
    const img = image as Asset<undefined, string>;

    return {
      ...rest,
      image: {
        src: `https:${img.fields.file?.url}`,
        alt: img.fields.description
      }
    };
  } catch (error) {
    console.log(error);
  }
});

export { getAllProjects, getSingleProject };
