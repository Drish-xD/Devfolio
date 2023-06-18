import Image from 'next/image';
import Link from 'next/link';
import { ForwardRefRenderFunction, forwardRef } from 'react';

import Noise from './Noise';

interface ProjectProps {
  id: number;
  name: string;
  desc: string;
  image: string;
  github: string;
  live: string;
  tags: Array<string>;
}

const Card: ForwardRefRenderFunction<HTMLDivElement, ProjectProps> = ({ ...projects }, ref) => {
  const { id, name, desc, github, live, tags, image } = projects;

  return (
    <div ref={ref} className="project-card" id={`card_${id}`}>
      <Noise id={id} />
      <Image src={image} alt="project-thumbnail" fill style={{ filter: `url(#noise_${id})` }} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{desc}</p>
        <Link href={github}>Github</Link>
        {live && <Link href={live}>Demo</Link>}
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default forwardRef(Card);
