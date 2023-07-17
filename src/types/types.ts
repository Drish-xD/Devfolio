export interface MousePosition {
  x: number | undefined;
  y: number | undefined;
}

export interface ProjectsProps {
  id: number;
  name: string;
  slug: string;
  img: string;
  tags: Array<string>;
}

export interface ProjectProps {
  name: string;
  img: string;
  tags: Array<string>;
  mdx: string;
  github: string;
  live: string;
}

export interface Properties {
  slug: { id: string; rich_text: { text: { content: string } }[] };
  img: { id: string; files: { name: string; file: { url: string } }[] };
  name: { id: string; title: { text: { content: string } }[] };
  tags: { id: string; multi_select: { id: string; name: string }[] };
}

export interface TransitionContextProps {
  completed: boolean;

  // eslint-disable-next-line no-unused-vars
  toggleCompleted: (value: boolean) => void;
}
