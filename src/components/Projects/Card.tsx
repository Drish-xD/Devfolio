'use client';

import { useCardsAnime } from '@myhooks';
import { ProjectCardProps } from '@types';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ project }: { project: ProjectCardProps }) => {
  const projectsRef = useCardsAnime();
  const { name, tags, image, id, slug } = project!;

  return (
    <article ref={(ref: HTMLDivElement) => (projectsRef.current[id] = ref)}>
      <Image
        src={image}
        alt={`Project ${name} Thumbnail`}
        title={`Project ${name} Thumbnail`}
        sizes="(max-width: 425px) 80vw, (max-width: 768px) 65vw, 50vw"
        priority
        fill
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
      <Link href={`/project/${slug}`} shallow>
        ↗
      </Link>
    </article>
  );
};

export default Card;
