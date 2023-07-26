'use client';

import { useHoverAnime } from '@myhooks';
import styles from '@styles/modules/project_page.module.scss';
import Link from 'next/link';

export default function ProjectLinks({ github, live }: { github: string; live: string }) {
  const ref = useHoverAnime();

  return (
    <div className={styles.project_links} ref={ref}>
      <Link href={github} data-hover="Github" target="_blank">
        Github
      </Link>
      {live && (
        <Link href={live} data-hover="Live" target="_blank">
          Live
        </Link>
      )}
    </div>
  );
}
