'use client';

import { ReactNode, useEffect, useLayoutEffect } from 'react';

import { useLenis } from '@studio-freight/react-lenis';

import Overlay from '@/components/Overlay';
import { useTransition } from '@/providers';
import styles from '@/styles/common/Overlay.module.scss';
import { scrollTo } from '@/utils/scrollTo';

export default function Template({ children }: { children: ReactNode }) {
  const { pageEnter } = useTransition();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      const hash = window.location.hash || '';
      scrollTo(lenis, hash);
    }
  }, [lenis]);

  useLayoutEffect(() => {
    pageEnter();
  }, []);

  return (
    <>
      {children}
      <Overlay count={4} id="page" className={styles.overlay} />
    </>
  );
}
