'use client';

import { ReactNode, useEffect, useLayoutEffect } from 'react';

import { useLenis } from '@studio-freight/react-lenis';

import Overlay from '@/components/Overlay';
import styles from '@/styles/common/Overlay.module.scss';
import { pageEnter, scrollTo } from '@/utils/PageTransition';

export default function Template({ children }: { children: ReactNode }) {
  const lenis = useLenis();
  useLayoutEffect(() => {
    pageEnter();
  }, []);

  useEffect(() => {
    if (lenis) {
      const hash = window.location.hash || '';
      scrollTo(lenis, hash!);
    }
  }, [lenis]);

  return (
    <>
      {children}
      <Overlay count={4} id="page" className={styles.overlay} />
    </>
  );
}
