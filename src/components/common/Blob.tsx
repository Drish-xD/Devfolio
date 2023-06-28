'use client';

import { useMousePosition } from '@myhooks';
import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function Blob() {
  // mouse Position hook and ref
  const { x, y } = useMousePosition();
  const blobRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // gsap animation for blob
    gsap.to(blobRef.current, {
      left: x,
      top: y,
      duration: 1,
      ease: 'power1.out'
    });
  }, [x, y]);

  return (
    <>
      <div className="blob-wrapper">
        <div ref={blobRef} id="blob"></div>
        <span id="blur"></span>
      </div>
    </>
  );
}
