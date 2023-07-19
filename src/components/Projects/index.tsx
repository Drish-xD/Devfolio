import { SectionHeader } from '@components';
import { ProjectsProps } from '@types';
import { getAllProjects } from '@utils/notion';

import Card from './Card';

export const revalidate = 1800;

export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <section className="global-section" id="projects">
      <SectionHeader text="Projects" num={2} />
      <div className="projects-container">
        {projects.map((project: ProjectsProps) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
