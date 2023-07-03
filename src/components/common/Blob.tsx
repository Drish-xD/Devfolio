'use client';

import { gsap } from '@lib/gsap';
import { useMousePosition } from '@myhooks';
import { useLayoutEffect, useRef } from 'react';

export default function Blob() {
  const { x, y } = useMousePosition();
  const blobRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.to(blobRef.current, {
      left: x,
      top: y,
      duration: 1,
      ease: 'power1.out'
    });
  }, [x, y]);

  return (
    <div className="blob-wrapper">
      <div ref={blobRef} id="blob"></div>
      <span id="blur"></span>
    </div>
  );
}
