import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Script from 'next/script';

import { MDXRemote } from 'next-mdx-remote/rsc';

import Link from '@/components/Link';
import { METADATA, getProjectSchema } from '@/constants';
import { getAllProjects, getSingleProject } from '@/utils/contentful';

import styles from './ProjectPage.module.scss';

export default async function Project({ params: { slug } }: { params: { slug: string } }) {
  const project = await getSingleProject(slug);

  if (!project) {
    notFound();
  }
  const { name, image, tags, mdx, github, live } = project;
  const projectSchema = getProjectSchema(project);

  return (
    <main className={styles.project_page}>
      <h1>{name}</h1>
      <figure>
        <Image
          src={image.src}
          alt={image.alt || name}
          quality={100}
          sizes='(max-width: 320px) 90vw, (max-width: 768px) 85vw, 75vw'
          priority
          fill
          placeholder='blur'
          blurDataURL={image.base64}
        />
      </figure>
      <Tags />
      <MDXRemote source={mdx || ''} />

      <ProjectLinks />
      <Script
        id='structured-schema'
        strategy='beforeInteractive'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: projectSchema }}
      />
    </main>
  );

  function ProjectLinks() {
    return (
      <div className={styles.links}>
        {github && (
          <Link href={github} disableExitAnimation rel='noopener noreferrer'>
            Github
          </Link>
        )}
        {live && (
          <Link href={live} disableExitAnimation>
            Live
          </Link>
        )}
      </div>
    );
  }

  function Tags() {
    return <ul className={styles.tags}>{tags?.map((tag, i) => <li key={i}>{tag}</li>)}</ul>;
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  if (!projects) {
    throw new Error('Unable to fetch Projects, Please Check.');
  }
  return projects.map((project) => ({ slug: project.slug }));
}

export const generateMetadata = async ({
  params: { slug }
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const project = await getSingleProject(slug);

  if (!project) {
    return {
      title: 'Page Not Found',
      alternates: { canonical: '/404' }
    };
  }

  return {
    title: project?.name,
    description: project.mdx?.split('## Key Features')[0]?.trim(),
    keywords: [...((METADATA?.keywords as string[]) || []), ...(project?.tags || [])],
    openGraph: { title: project?.name, images: project?.image.src, url: project?.slug },
    twitter: { title: project?.name, images: project?.image.src },
    alternates: { canonical: `projects/${project?.slug}` }
  };
};

export const dynamic = 'force-static';
