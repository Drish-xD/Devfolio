'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useLayoutEffect } from 'react';

import { useLenis } from '@studio-freight/react-lenis';

import { useTransition } from '@/providers';
import styles from '@/styles/common/Overlay.module.scss';

const Overlay = dynamic(() => import('@/components/Overlay'), { ssr: false });

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
      lenis?.scrollTo(target, { duration: 2 });
    }
  }, [lenis, pathname, isPending]);

  return (
    <>
      {children}
      <Overlay count={4} id="page" className={styles.overlay} />
    </>
  );
}
