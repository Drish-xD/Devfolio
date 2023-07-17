import { SectionHeader } from '@components';
import { ProjectsProps } from '@types';

import Card from './Card';

const fetchProjects = async () => {
  const notion = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/notion/`);
  return notion.json();
};

export default async function Projects() {
  const projects = await fetchProjects();

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
