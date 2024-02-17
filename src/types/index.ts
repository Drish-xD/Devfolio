import type { EntryFieldTypes, EntrySkeletonType } from 'contentful';

export interface MousePosition {
  x?: number;
  y?: number;
}

export interface TransitionContextProps {
  pageEnter: () => Promise<void>;
  pageExit: (href: string) => Promise<void>;
}

// Contentful types

// Links Types (Navbar | Contacts)
interface Links {
  navLinks: EntryFieldTypes.Object;
  contact?: EntryFieldTypes.Object;
}

export type LinksSkeleton = EntrySkeletonType<Links, 'links'>;

// Content Types (About | Skills)
interface Content {
  about?: EntryFieldTypes.Text;
  skills?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type ContentSkeleton = EntrySkeletonType<Content, 'portfolioContent'>;

// Projects Types
export interface ProjectCards {
  index: EntryFieldTypes.Integer;
  name: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export interface Project extends ProjectCards {
  mdx?: EntryFieldTypes.Text;
  github?: EntryFieldTypes.Symbol;
  live?: EntryFieldTypes.Symbol;
}

export type ProjectsSkeleton = EntrySkeletonType<ProjectCards, 'projects'>;

export type ProjectSkeleton = EntrySkeletonType<Project, 'projects'>;

export interface ProjectProperties {
  name: string;
  slug: string;
  tags?: string[];
  image: {
    src: string;
    alt?: string;
  };
  mdx?: string;
  github?: string;
  live?: string;
}
