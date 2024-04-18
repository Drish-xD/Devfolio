import { memo } from 'react';

import SectionTitle from '@/components/SectionTitle';
import { getAllProjects } from '@/utils/contentful';

import Card from './Card';
import styles from './Projects.module.scss';

const Projects = memo(function Projects() {
  return (
    <section id="projects">
      <SectionTitle text="Projects" num={2} />
      <ProjectList />
    </section>
  );
});

const ProjectList = memo(async function ProjectList() {
  const projects = await getAllProjects();

  return (
    <div className={styles.projects}>
      {projects!.map((project) => (
        <Card key={project.name} {...project} />
      ))}
    </div>
  );
});

export default Projects;
