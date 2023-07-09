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
        src={`https://raw.githubusercontent.com/Drish-xD/portfolio_2.0/main/public/images/${image}`}
        alt={`Project ${name} Thumbnail`}
        title={`Project ${name} Thumbnail`}
        fill
        loading="lazy"
        sizes="(max-width: 425px) 75%, (max-width: 768px) 65%, 50%"
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
      <Link href={github} target="_blank" prefetch={false}>
        ↗
      </Link>
    </article>
  );
};

export default forwardRef(Card);
