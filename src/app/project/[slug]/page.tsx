import styles from '@styles/modules/project_page.module.scss';
import { ProjectProps } from '@types';
import { nextImport } from '@utils/nextImport';
import { getSingleProject } from '@utils/notion';
import { Metadata } from 'next';

const Markdown = nextImport('Markdown');

export default function Project({ params: { slug } }: { params: { slug: string } }) {
  return (
    <main className={`page ${styles.project}`}>
      <Markdown slug={slug} />
    </main>
  );
}

export const revalidate = 1800;

export const generateMetadata = async ({
  params: { slug }
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const project: ProjectProps = await getSingleProject(slug);

  return {
    title: project.name,
    keywords: project.tags,
    openGraph: { title: project.name, images: project.img },
    twitter: { title: project.name, images: project.img }
  };
};
