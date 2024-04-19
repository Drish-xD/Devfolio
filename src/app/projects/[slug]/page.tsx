import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { MDXRemote } from 'next-mdx-remote/rsc';

import Link from '@/components/Link';
import { getSingleProject } from '@/utils/contentful';

import styles from './ProjectPage.module.scss';

export default async function Project({ params: { slug } }: { params: { slug: string } }) {
  const project = await getSingleProject(slug);

  if (!project) {
    notFound();
  }

  const { name, image, tags, mdx, github, live } = project;

  return (
    <main className={styles.project_page}>
      <h1>{name}</h1>
      <figure>
        <Image src={image.src} alt={image.alt || name} sizes="80vw" priority fill />
      </figure>
      <Tags />
      <MDXRemote source={mdx || ''} />

      <ProjectLinks />
    </main>
  );

  function ProjectLinks() {
    return (
      <div className={styles.links}>
        {github && <Link href={github}>Github</Link>}
        {live && <Link href={live}>Live</Link>}
      </div>
    );
  }

  function Tags() {
    return <ul className={styles.tags}>{tags?.map((tag, i) => <li key={i}>{tag}</li>)}</ul>;
  }
}

export const generateMetadata = async ({
  params: { slug }
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const project = await getSingleProject(slug);

  if (!project) {
    return {
      title: 'Page Not Found'
    };
  }

  return {
    title: project?.name,
    keywords: project?.tags,
    openGraph: { title: project?.name, images: project?.image.src, url: project?.slug },
    twitter: { title: project?.name, images: project?.image.src },
    alternates: { canonical: project?.slug }
  };
};
