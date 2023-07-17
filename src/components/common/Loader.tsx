'use client';

import { useLoaderAnime } from '@myhooks';
import { Fragment } from 'react';

export default function Loader() {
  const [loaderRef, shouldAnimate] = useLoaderAnime();

  if (!shouldAnimate) return;

  return (
    <section className="loader" ref={loaderRef}>
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
