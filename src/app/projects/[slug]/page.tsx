// import { Markdown } from '@/components';

export default function Project({ params: { slug } }: { params: { slug: string } }) {
  return <main>{/* <Markdown slug={slug} /> */}</main>;
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
