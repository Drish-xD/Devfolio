import styles from '@styles/modules/project_page.module.scss';
import { ProjectProps } from '@types';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

import SectionHeader from 'components/common/SectionHeader';

export default function MarkDown({ project }: { project: ProjectProps }) {
  const { name, img, mdx, github, live } = project!;

  return (
    <>
      <SectionHeader text={name} trigger={false} />
      <div className={styles.image_container}>
        <Image
          src={img}
          alt={`Project ${name} Thumbnail`}
          title={`Project ${name} Thumbnail`}
          sizes="80vw"
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
