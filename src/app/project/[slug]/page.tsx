import ReactMarkdown from 'react-markdown';

export default function Project({ params: { slug } }: { params: { slug: string } }) {
  return (
    <main className="page">
      <MarkDown slug={slug} />
    </main>
  );
}

const fetchProject = async (slug: string) => {
  const notion = await fetch(`http://localhost:3000/api/notion/${slug}`);
  return notion.json();
};

async function MarkDown({ slug }: { slug: string }) {
  const mdPage = await fetchProject(slug);

  return <ReactMarkdown>{mdPage}</ReactMarkdown>;
}
