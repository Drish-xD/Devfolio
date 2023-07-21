import styles from '@styles/modules/project_page.module.scss';

export default function Project({ params: { slug } }: { params: { slug: string } }) {
  console.log(slug);

  return (
    <main className={`page ${styles.project}`}>
      <h1>hello world</h1>
      {/* <Markdown slug={slug} /> */}
    </main>
  );
}
