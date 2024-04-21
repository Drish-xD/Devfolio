'use client';

import { useEffect } from 'react';

import Link from '@/components/Link';
import styles from '@/styles/common/404.module.scss';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.notFound}>
      <h3>Something went wrong!</h3>
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
          reset();
        }}
      >
        Try again
      </Link>
    </main>
  );
}
