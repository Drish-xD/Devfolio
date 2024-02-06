export interface MousePosition {
  x?: number;
  y?: number;
}

export interface ProjectProperties {
  index: number;
  name: string;
  slug: string;
  tags: string[];
  image: string;
  mdx: string;
  github: string;
  live: string;
}

export interface ProjectCardProps {
  id: number;
  slug: string;
  name: string;
  image: string;
  tags: string[];
}
