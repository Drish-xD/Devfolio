'use client';

import { useMousePosition } from '@myhooks';
import { gsap } from '@utils/gsap';
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
      <span ref={blobRef}></span>
      <div></div>
    </div>
  );
}
