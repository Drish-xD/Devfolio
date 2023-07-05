import Image from 'next/image';
import Link from 'next/link';
import { ForwardRefRenderFunction, forwardRef } from 'react';

interface ProjectProps {
  id: number;
  name: string;
  image: string;
  github: string;
  live: string;
  tags: Array<string>;
}

const Card: ForwardRefRenderFunction<HTMLDivElement, ProjectProps> = ({ ...projects }, ref) => {
  const { name, tags, image, github } = projects;

  return (
    <article ref={ref}>
      <Image
        src={`https://raw.githubusercontent.com/Drish-xD/${image}`}
        alt="project-thumbnail"
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <span>
        <span />
      </span>
      <hgroup>
        <h3>
          {Array.from(name).map((letter: string, i: number) => (
            <span className="letter" key={i}>
              {letter}
            </span>
          ))}
        </h3>

        <div>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </hgroup>
      <Link href={github} target="_blank">
        ↗
      </Link>
    </article>
  );
};

export default forwardRef(Card);
