'use client';

import { ReactNode, useLayoutEffect } from 'react';

import { Lenis, useLenis } from '@studio-freight/react-lenis';

import { ScrollTrigger, gsap, useGSAP } from '@/utils/gsap';

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  const lenis = useLenis(ScrollTrigger.update);
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [lenis]);

  return (
    <Lenis root options={{ duration: 2, syncTouch: true }}>
      {children}
    </Lenis>
  );
}
