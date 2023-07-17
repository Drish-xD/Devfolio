import styles from '@styles/modules/project_page.module.scss';
import { ProjectProps } from '@types';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

async function fetchProject(slug: string) {
  const notion = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/notion/${slug}`);
  if (!notion.ok) throw new Error('Failed to fetch data');
  return notion.json();
}

export default async function MarkDown({ slug }: { slug: string }) {
  const project: ProjectProps = await fetchProject(slug);
  const { name, img, mdx, github, live } = project!;

  return (
    <>
      <div className="section-header">
        <h2>{name}</h2>
      </div>

      <div className={styles.image_container}>
        <Image
          src={img}
          alt={`Project ${name} Thumbnail`}
          title={`Project ${name} Thumbnail`}
          sizes="(max-width: 425px) 80vw, (max-width: 768px) 65vw, 50vw"
          priority
          fill
        />
      </div>

      <MDXRemote source={mdx} />

      <div className={styles.project_links}>
        <Link href={github} data-hover="Github">
          Github
        </Link>
        {live && (
          <Link href={live} data-hover="Live">
            Live
          </Link>
        )}
      </div>
    </>
  );
}
