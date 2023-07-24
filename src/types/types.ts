export interface MousePosition {
  x: number | undefined;
  y: number | undefined;
}

export interface ProjectCardProps {
  id: number;
  slug: string;
  name: string;
  image: string;
  tags: string[];
}

export interface ProjectProperties {
  name: string;
  slug: string;
  tags: string[];
  image: string;
  mdx: string;
  github: string;
  live: string;
}

export interface TransitionContextProps {
  completed: boolean;

  // eslint-disable-next-line no-unused-vars
  toggleCompleted: (value: boolean) => void;
}
