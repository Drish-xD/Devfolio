'use client';

import Image from 'next/image';

import Link from '@/components/Link';
import Overlay from '@/components/Overlay';
import { ProjectCardProps } from '@/types';

import { useCardsAnimation } from './Card.anime';

const Card = ({ ...project }: ProjectCardProps) => {
  const ref = useCardsAnimation();
  const { name, tags, image, id, slug } = project;

  return (
    <article ref={(projectRef: HTMLDivElement) => (ref.current[id] = projectRef)}>
      <Image
        src={image}
        alt={`${name} Thumbnail`}
        sizes="(max-width: 425px) 100vw, (max-width: 768px) 70vw, 50vw"
        fill
      />
      <hgroup>
        <h3>
          {Array.from(name).map((letter, i) => (
            <span key={i}>{letter}</span>
          ))}
        </h3>

        <div>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </hgroup>

      <Link href={`/projects/${slug}`} animate={false}>
        ↗
      </Link>
      <Overlay count={3} name="project" dir="row" />
    </article>
  );
};

export default Card;
