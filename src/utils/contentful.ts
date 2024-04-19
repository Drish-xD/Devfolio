import { cache } from 'react';

import { Asset, createClient } from 'contentful';

import { ContentSkeleton, LinksSkeleton, ProjectSkeleton, ProjectsSkeleton } from '@/types';

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
  environment: process.env.NEXT_PUBLIC_ENVIRONMENT
});

export const getAllProjects = cache(async () => {
  try {
    const { items } = await client.getEntries<ProjectsSkeleton>({
      content_type: 'projects',
      order: ['fields.index'],
      select: ['fields.name', 'fields.slug', 'fields.tags', 'fields.image']
    });

    const projects = items.map(({ fields }) => {
      const image = fields?.image as Asset<undefined, string>;
      return {
        name: fields.name,
        slug: fields.slug,
        tags: fields.tags,
        image: {
          src: image ? `https:${image?.fields?.file?.url}` : '',
          alt: image ? image.fields?.description : fields.name
        }
      };
    });

    return projects;
  } catch (error) {
    console.log(error);
  }
});

export const getSingleProject = cache(async (slug_: string) => {
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
        src: img ? `https:${img.fields?.file?.url}` : '',
        alt: img ? img.fields.description : rest.name
      }
    };
  } catch (error) {
    console.log(error);
  }
});

export const getContent = cache(async () => {
  try {
    const { items } = await client.getEntries<ContentSkeleton>({
      content_type: 'portfolioContent'
    });

    return {
      about: items[0].fields.about || '',
      skills: items[0].fields.skills || []
    };
  } catch (error) {
    console.log(error);
  }
});

export const getNavlinks = cache(async () => {
  try {
    const { items } = await client.getEntries<LinksSkeleton>({
      content_type: 'links'
    });

    return {
      nav: items[0].fields.navLinks,
      contact: items[0].fields.contact
    };
  } catch (error) {
    console.log(error);
  }
});
