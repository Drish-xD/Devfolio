import { Client } from '@notionhq/client';
import { NextRequest, NextResponse } from 'next/server';
import { NotionToMarkdown } from 'notion-to-md';

const NOTION_SECRET = process.env.NEXT_PUBLIC_NOTION_SECRET;
const DB_ID = process.env.NEXT_PUBLIC_NOTION_DB_ID;

const notion = new Client({ auth: NOTION_SECRET });
const n2m = new NotionToMarkdown({ notionClient: notion });

export async function GET(request: NextRequest) {
  if (!NOTION_SECRET || !DB_ID) throw new Error('Missing Notion Credentials');

  const { pathname } = new URL(request.nextUrl);
  const slug = pathname.split('/').filter(Boolean)[2];

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
            equals: slug
          }
        }
      ]
    }
  });

  const page = res.results[0];
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return NextResponse.json(mdString);
}