'use client';

import { useProjectAnimation } from '@hooks/useProjectsAnimation';
import { projectsJson } from '@lib/data';

import Card from './Card';

export default function Projects() {
  const leftProjectsRef = useProjectAnimation(2);
  const rightProjectsRef = useProjectAnimation(5);

  return (
    <section className="global-section" id="projects">
      <div className="section-header">
        <h2>Projects</h2>
        <span>(02)</span>
      </div>
      <div className="projects-container">
        <div className="half_container left">
          {projectsJson.left.map((project, index) => (
            <Card
              key={project.id}
              {...project}
              ref={(ref: HTMLDivElement) => (leftProjectsRef.current[index] = ref)}
            />
          ))}
        </div>

        <div className="half_container right">
          {projectsJson.right.map((project, index) => (
            <Card
              key={project.id}
              {...project}
              ref={(ref: HTMLDivElement) =>
                (rightProjectsRef.current[index + projectsJson.left.length] = ref)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
