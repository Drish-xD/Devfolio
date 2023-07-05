'use client';

import { useHoverAnime } from '@myhooks';
import { Lenis, useLenis } from '@studio-freight/react-lenis';
import { ScrollTrigger } from '@utils/gsap';
import { ReactNode, useLayoutEffect } from 'react';

export default function LenisWrapper({ children }: { children: ReactNode }) {
  // smooth scroll using lenis
  const lenis = useLenis(ScrollTrigger.update);
  useLayoutEffect(() => ScrollTrigger.refresh, [lenis]);

  const ref = useHoverAnime();

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
