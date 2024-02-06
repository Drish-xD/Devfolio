import SectionTitle from '@/components/SectionTitle';
import { ProjectCardProps } from '@/types';
import { getAllProjects } from '@/utils/contentful';

import Card from './Card';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section id="projects">
      <SectionTitle text="Projects" num={2} />
      <ProjectList />
    </section>
  );
}

const ProjectList = async () => {
  const projects = await getAllProjects();

  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <Card key={project.id as string} {...(project as ProjectCardProps)} />
      ))}
    </div>
  );
};
