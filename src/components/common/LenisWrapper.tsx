'use client';

import { ScrollTrigger } from '@lib/gsap';
import { useHoverTextAnimation } from '@myhooks';
import { Lenis, useLenis } from '@studio-freight/react-lenis';
import { ReactNode, useLayoutEffect } from 'react';

export default function LenisWrapper({ children }: { children: ReactNode }) {
  // smooth scroll using lenis
  const lenis = useLenis(ScrollTrigger.update);
  useLayoutEffect(() => ScrollTrigger.refresh, [lenis]);

  const ref = useHoverTextAnimation();

  return (
    <body ref={ref}>
      <Lenis
        root
        options={{
          duration: 2,
          smoothWheel: true
        }}
      >
        {children}
      </Lenis>
    </body>
  );
}
