'use client';

import { Fragment, memo } from 'react';

import { useLoaderAnime } from './Loader.anime';
import styles from './Loader.module.scss';

const Loader = memo(function Loader() {
  const { ref, hideLoader } = useLoaderAnime();

  if (hideLoader) return;

  return (
    <section ref={ref} className={styles.loader}>
      <div>
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
});

export default Loader;
