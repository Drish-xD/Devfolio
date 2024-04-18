'use client';

import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useLayoutEffect } from 'react';

import { useLenis } from '@studio-freight/react-lenis';

import Overlay from '@/components/Overlay';
import { useTransition } from '@/providers';
import styles from '@/styles/common/Overlay.module.scss';

export default function Template({ children }: { children: ReactNode }) {
  const { isPending, pageEnter } = useTransition();
  const pathname = usePathname();
  const lenis = useLenis();

  useLayoutEffect(() => {
    pageEnter();
  }, []);

  useEffect(() => {
    if (lenis && !isPending) {
      const hash = window.location.hash || '';
      const target = hash && hash !== '#' ? hash : 0;
      lenis?.scrollTo(target, { duration: 2, lock: true });
    }
  }, [lenis, pathname, isPending]);

  return (
    <>
      {children}
      <Overlay count={4} id="page" className={styles.overlay} />
    </>
  );
}
