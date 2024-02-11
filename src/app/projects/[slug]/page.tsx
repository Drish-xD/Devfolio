import Image from 'next/image';

import Link from '@/components/Link';
import { getSingleProject } from '@/utils/contentful';

import styles from './project_page.module.scss';

export default async function Project({ params: { slug } }: { params: { slug: string } }) {
  const project = await getSingleProject(slug);

  const {
    name,
    image: { src, alt },
    mdx,
    github,
    live,
    tags
  } = project!;

  return (
    <main className={styles.project_page}>
      <h1>{name}</h1>
      <figure>
        <Image src={src} alt={alt || name} sizes="80vw" priority fill />
      </figure>

      <Tags />
      {/* <MDXRemote source={mdx} lazy /> */}

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

// generating meta data dynamically
// export const generateMetadata = async ({
//   params: { slug }
// }: {
//   params: { slug: string };
// }): Promise<Metadata> => {
//   // @ts-ignore
//   const project: ProjectProperties = await getSingleProject(slug);

//   return {
//     title: project.name,
//     keywords: project.tags,
//     openGraph: { title: project.name, images: project.image, url: project.slug },
//     twitter: { title: project.name, images: project.image },
//     alternates: { canonical: project.slug }
//   };
// };
