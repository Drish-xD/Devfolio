'use client';

import Link from 'next/link';

export default function PagNotFound() {
  return (
    <main>
      <section id="not_found">
        <h1>404</h1>
        <h3>Page not found</h3>

        <Link href="/" data-value="GO BACK" className="hover-animation">
          GO BACK
        </Link>
      </section>
    </main>
  );
}
