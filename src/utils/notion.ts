import { Client } from '@notionhq/client';
import { Properties } from '@types';
import { NotionToMarkdown } from 'notion-to-md';
import { cache } from 'react';

const NOTION_SECRET = process.env.NEXT_PUBLIC_NOTION_SECRET;
const DB_ID = process.env.NEXT_PUBLIC_NOTION_DB_ID;

const notion = new Client({ auth: NOTION_SECRET });
const n2m = new NotionToMarkdown({ notionClient: notion });

// get all projects details

export const getAllProjects = cache(async () => {
  if (!NOTION_SECRET || !DB_ID) throw new Error('Missing Notion Credentials');

  const query = await notion.databases.query({
    database_id: DB_ID,
    filter: {
      property: 'publish',
      checkbox: {
        equals: true
      }
    }
  });

  // @ts-ignore
  const rows: Properties[] = query.results.map((res) => res.properties);

  return rows.map(({ img, name, slug, tags }, index) => ({
    slug: slug.rich_text[0].text.content,
    img: img.files[0].file.url,
    name: name.title[0].text.content,
    tags: tags.multi_select.map((tag) => tag.name),
    id: index
  }));
});

// get single project details

export const getSingleProject = cache(async (urlSlug: string) => {
  if (!NOTION_SECRET || !DB_ID) throw new Error('Missing Notion Credentials');

  const res = await notion.databases.query({
    database_id: DB_ID,
    filter: {
      and: [
        {
          property: 'publish',
          checkbox: {
            equals: true
          }
        },
        {
          property: 'slug',
          rich_text: {
            equals: urlSlug
          }
        }
      ]
    }
  });

  // @ts-ignore
  const { img, name, tags, github, live }: Properties = res.results[0].properties;

  const properties = {
    name: name.title[0].text.content,
    img: img.files[0].file.url,
    tags: tags.multi_select.map((tag) => tag.name),
    github: github.url,
    live: live.url
  };

  const mdblocks = await n2m.pageToMarkdown(res.results[0].id);
  const { parent } = n2m.toMarkdownString(mdblocks);

  return { ...properties, mdx: parent };
});
