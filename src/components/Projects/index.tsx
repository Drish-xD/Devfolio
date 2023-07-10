'use client';

import { SectionHeader } from '@components';
import { useCardsAnime } from '@myhooks';
import { PROJECTSJSON } from 'utils/data';

import Card from './Card';

export default function Projects() {
  const projectsRef = useCardsAnime();

  return (
    <section className="global-section" id="projects">
      <SectionHeader text="Projects" num={2} />
      <div className="projects-container">
        {PROJECTSJSON.map((project, index) => (
          <Card
            key={index}
            {...project}
            ref={(ref: HTMLDivElement) => (projectsRef.current[index] = ref)}
          />
        ))}
      </div>
    </section>
  );
}
