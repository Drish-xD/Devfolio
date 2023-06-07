'use client';

import useMousePosition from '@/Hooks/useMousePosition';
import '@/styles/global.scss';
import gsap from 'gsap';
import { ReactNode, useEffect, useRef } from 'react';

export const metadata = {
  title: 'Drish | Portfolio',
  description: 'Drish'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // mouse Position hook and ref
  const mousePosition = useMousePosition();
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap animation for blob
    gsap.to(blobRef.current, {
      left: mousePosition.x,
      top: mousePosition.y,
      duration: 3,
      ease: 'power2.out'
    });
  }, [mousePosition]);

  return (
    <html lang="en">
      <body>
        <div ref={blobRef} id="blob"></div>
        <span id="blur"></span>
        {children}
      </body>
    </html>
  );
}
