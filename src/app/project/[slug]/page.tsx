import { Markdown } from '@components';
import styles from '@styles/modules/project_page.module.scss';
import { ProjectProperties } from '@types';
import { getSingleProject } from '@utils/contentful';
import { Metadata } from 'next';

export default function Project({ params: { slug } }: { params: { slug: string } }) {
  return (
    <main className={`page ${styles.project}`}>
      <Markdown slug={slug} />
    </main>
  );
}

export const generateMetadata = async ({
  params: { slug }
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  // @ts-ignore
  const project: ProjectProperties = await getSingleProject(slug);

  return {
    title: project.name,
    keywords: project.tags,
    openGraph: { title: project.name, images: project.image },
    twitter: { title: project.name, images: project.image }
  };
};
