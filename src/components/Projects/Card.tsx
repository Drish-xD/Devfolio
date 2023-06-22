import Image from 'next/image';
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
    <div className="project-card" ref={ref}>
      <div className="card-image" id={`card_${id}`}>
        <Noise id={id} />
        <Image
          src={`https://raw.githubusercontent.com/Drish-xD/${image}`}
          alt="project-thumbnail"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ filter: `url(#noise_${id})` }}
        />
        <div className="tags">
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="card-info">
        <h3>{name}</h3>
        <p>{desc}</p>
        {/* <Link href={github}>Github</Link>
        {live && <Link href={live}>Demo</Link>} */}
      </div>
    </div>
  );
};

export default forwardRef(Card);
