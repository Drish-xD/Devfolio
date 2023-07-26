'use client';

import { TransitionLayout } from '@components';
import { TransitionProvider } from '@context/TransitionContext';
import { Lenis, useLenis } from '@studio-freight/react-lenis';
import { ScrollTrigger, gsap } from '@utils/gsap';
import { ReactNode, useLayoutEffect } from 'react';

export default function LenisWrapper({ children }: { children: ReactNode }) {
  // smooth scroll using lenis
  const lenis = useLenis(ScrollTrigger.update);
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [lenis]);

  useLayoutEffect(() => {
    if (lenis) {
      lenis!.scrollTo('header');
    }
  }, [lenis]);

  gsap.registerPlugin(ScrollTrigger);

  return (
    <body onContextMenu={(e) => e.preventDefault()}>
      <Lenis
        root
        options={{
          duration: 2,
          smoothWheel: true
        }}
      >
        <TransitionProvider>
          <TransitionLayout>
            <div>{children}</div>
          </TransitionLayout>
        </TransitionProvider>
      </Lenis>
    </body>
  );
}
