'use client';

import Image from 'next/image';

import Link from '@/components/Link';
import Overlay from '@/components/Overlay';
import { ProjectProperties } from '@/types';

import { useCardsAnimation } from './Card.anime';

const Card = ({ ...project }: ProjectProperties) => {
  const ref = useCardsAnimation();
  const {
    name,
    tags,
    image: { src, alt },
    slug
  } = project;

  return (
    <article ref={ref}>
      <Image
        src={src}
        alt={alt || name}
        sizes="(max-width: 425px) 100vw, (max-width: 768px) 70vw, 50vw"
        fill
      />

      <CardInfo name={name} tags={tags} />

      <Link href={`/projects/${slug}`} animate={false}>
        <span>↗</span>
      </Link>

      <Overlay
        count={3}
        name="project"
        dir="row"
        bg={{
          blur: 99,
          color: '20, 20, 20'
        }}
      />
    </article>
  );
};

export default Card;

const CardInfo = ({ name, tags }: Pick<ProjectProperties, 'name' | 'tags'>) => {
  return (
    <hgroup>
      <h3>
        {Array.from(name!).map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </h3>

      <ul>
        {tags!.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    </hgroup>
  );
};
