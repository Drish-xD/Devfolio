import { SectionHeader } from '@components';
import styles from '@styles/modules/project_page.module.scss';
import { ProjectProps } from '@types';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({ params: { slug } }: { params: { slug: string } }) {
  return (
    <main className={`page ${styles.project}`}>
      <MarkDown slug={slug} />
    </main>
  );
}

async function fetchProject(slug: string) {
  const notion = await fetch(`http://localhost:3000/api/notion/${slug}`);
  if (!notion.ok) throw new Error('Failed to fetch data');
  return notion.json();
}

async function MarkDown({ slug }: { slug: string }) {
  const { name, img, mdx, github, live }: ProjectProps = await fetchProject(slug);

  console.log(mdx);

  return (
    <>
      <SectionHeader text={name} />

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

      <MDXRemote source={mdx!} />

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
