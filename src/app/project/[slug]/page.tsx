import { Markdown } from '@components';
import styles from '@styles/modules/project_page.module.scss';

export default function Project({ params: { slug } }: { params: { slug: string } }) {
  return (
    <main className={`page ${styles.project}`}>
      <Markdown slug={slug} />
    </main>
  );
}
