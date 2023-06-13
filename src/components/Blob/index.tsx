'use client';

import useMousePosition from '@hooks/useMousePosition';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Blog() {
  // mouse Position hook and ref
  const mousePosition = useMousePosition();
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // gsap animation for blob
    gsap.to(blobRef.current, {
      left: mousePosition.x,
      top: mousePosition.y,
      duration: 1,
      ease: 'power1.out'
    });
  }, [mousePosition]);

  return (
    <>
      <div className="blob-wrapper">
        <div ref={blobRef} id="blob"></div>
      </div>
      <span id="blur"></span>
    </>
  );
}
