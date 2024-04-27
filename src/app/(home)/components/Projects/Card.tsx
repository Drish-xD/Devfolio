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
        quality={100}
        sizes='(max-width: 320px) 67.5vw, (max-width: 768px) 63.75vw, 37.52vw'
        fill
        placeholder='blur'
        blurDataURL={image?.base64}
        priority={false}
      />

      <CardInfo name={name} tags={tags} />

      <Link href={`/projects/${slug}`} disableHover>
        <span>↗</span>
      </Link>

      <Overlay count={3} id='project' />
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
