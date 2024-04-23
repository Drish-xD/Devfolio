'use client';

import Image from 'next/image';
import { memo } from 'react';

import Link from '@/components/Link';
import Overlay from '@/components/Overlay';
import { ProjectProperties } from '@/types';

import { useCardsAnimation } from './Card.anime';

const Card = memo(function Card({ ...project }: ProjectProperties) {
  const ref = useCardsAnimation();
  const { name, tags, image, slug } = project;

  return (
    <article ref={ref}>
      <Image
        src={image?.src}
        alt={image?.alt || name}
        sizes="(min-width: 780px) calc(37.52vw + 15px), calc(61.09vw + 20px)"
        quality={100}
        fill
        placeholder="blur"
        blurDataURL={image?.base64}
      />

      <CardInfo name={name} tags={tags} />

      <Link href={`/projects/${slug}`} animate={false}>
        <span>↗</span>
      </Link>

      <Overlay count={3} id="project" />
    </article>
  );
});

export default Card;

const CardInfo = memo(function CardInfo({ name, tags }: Pick<ProjectProperties, 'name' | 'tags'>) {
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
});
