'use client';

import { Fragment } from 'react';

// import { useLoaderAnime } from '@/hooks';

export default function Loader() {
  // const [loaderRef, shouldAnimate] = useLoaderAnime();
  console.log('Loader component');

  return (
    <section className="loader">
      <div className="grid">
        {[...Array(7)].map((_, i) => (
          <Fragment key={i}>
            <span>B</span>
            <span>O</span>
            <span>N</span>
            <span>J</span>
            <span>O</span>
            <span>U</span>
            <span>R</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
