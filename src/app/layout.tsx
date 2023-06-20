'use client';

import { Blob } from '@components';
import { jetBrain, offBit } from '@fonts/font';
import { Lenis, useLenis } from '@studio-freight/react-lenis';
import '@styles/global.scss';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ReactNode, useEffect } from 'react';

export const metadata = {
  title: 'Drish | Portfolio',
  description: 'Drish'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const lenis = useLenis(ScrollTrigger.update);
  useEffect(ScrollTrigger.refresh, [lenis]);

  return (
    <html lang="en" className={`${jetBrain.variable} ${offBit.variable}`}>
      <body>
        <Lenis
          root
          options={{
            duration: 1.5,
            smoothWheel: true,
            smoothTouch: true
          }}
        >
          <Blob />
          {children}
        </Lenis>
      </body>
    </html>
  );
}
