import Link from 'next/link';

export default function PagNotFound() {
  return (
    <main>
      <section id="not_found">
        <h1>404</h1>
        <h3>Page not found</h3>

        <Link href="/" data-hover="GO BACK">
          GO BACK
        </Link>
      </section>
    </main>
  );
}
