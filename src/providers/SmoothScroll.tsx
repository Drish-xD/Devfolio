'use client';

import { ReactNode, useLayoutEffect } from 'react';

import { Lenis, useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScrolling({ children }: { children: ReactNode }) {
  const lenis = useLenis(ScrollTrigger.update);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [lenis]);

  return (
    <Lenis root options={{ duration: 2 }}>
      {children}
    </Lenis>
  );
}
