import { SectionHeader } from '@components';
import styles from '@styles/modules/project_page.module.scss';
import { ProjectProperties } from '@types';
import { getSingleProject } from '@utils/contentful';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

export default async function MarkDown({ slug }: { slug: string }) {
  // @ts-ignore
  const project: ProjectProperties = await getSingleProject(slug);
  const { name, image, mdx, github, live, tags } = project;

  return (
    <>
      <SectionHeader text={name} trigger={false} />
      <div className={styles.image_container}>
        <Image
          src={image}
          alt={`Project ${name} Thumbnail`}
          title={`Project ${name} Thumbnail`}
          sizes="80vw"
          priority
          fill
        />
      </div>

      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
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
