'use client';

import { GoogleTag } from '@components';
import { jetBrain, offBit } from '@fonts/font';
import { METADATA } from '@lib/data';
import { ScrollTrigger } from '@lib/gsap';
import { nextImport } from '@lib/nextImport';
import { useHoverTextAnimation } from '@myhooks';
import { Lenis, useLenis } from '@studio-freight/react-lenis';
import '@styles/global.scss';
import { Analytics } from '@vercel/analytics/react';
import { ReactNode, useLayoutEffect } from 'react';

// dynamic imports
const { Blob, Navbar, Footer } = {
  Blob: nextImport('Blob'),
  Navbar: nextImport('Navbar'),
  Footer: nextImport('Footer')
};

// meta data
export const metadata = METADATA;

export default function RootLayout({ children }: { children: ReactNode }) {
  // smooth scroll using lenis
  const lenis = useLenis(ScrollTrigger.update);
  useLayoutEffect(() => ScrollTrigger.refresh, [lenis]);

  const ref = useHoverTextAnimation();

  return (
    <html lang="en" className={`${jetBrain.variable} ${offBit.variable}`}>
      <GoogleTag />
      <body ref={ref}>
        <Lenis
          root
          options={{
            duration: 2,
            smoothWheel: true
          }}
        >
          <Navbar />
          {children}
          <Blob />
          <Footer />
          <Analytics />
        </Lenis>
      </body>
    </html>
  );
}
