import { SectionHeader } from '@components';
import { getAllProjects } from '@utils/contentful';

import Card from './Card';

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section className="global-section" id="projects">
      <SectionHeader text="Projects" num={2} />
      <div className="projects-container">
        {projects.map((project) => (
          // @ts-ignore
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
