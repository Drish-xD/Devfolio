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
    <article className="project-card" ref={ref}>
      <Image
        src={`https://raw.githubusercontent.com/Drish-xD/${image}`}
        alt="project-thumbnail"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="card-cover">
        <span />
      </div>
      <div className="card-info">
        <h3>
          {Array.from(name).map((letter: string, i: number) => (
            <span className="letter" key={i}>
              {letter}
            </span>
          ))}
        </h3>
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
      <Link href={github} className="link">
        ↗
      </Link>
    </article>
  );
};

export default forwardRef(Card);
