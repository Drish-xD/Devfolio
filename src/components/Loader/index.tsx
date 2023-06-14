'use client';

import useLoaderAnimation from '@hooks/useLoaderAnimation';
import { Fragment } from 'react';

export default function Loader() {
  useLoaderAnimation();

  return (
    <section className="loader">
      <div className="loader-overlay"></div>
      <div className="grid">
        {/* Repeat the word 7 times */}
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
