'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { useMousePosition } from '@/hooks/useMousePosition';

import styles from './blob.module.scss';

export default function Blob() {
  const { x, y } = useMousePosition();
  const blobRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.to(blobRef.current, {
      rotation: 360,
      scaleX: 1.5,
      scaleY: 1,
      duration: 20,
      repeat: -1,
      yoyo: true
    });
  });

  useGSAP(
    () => {
      gsap.to(blobRef.current, {
        x,
        y,
        duration: 1,
        ease: 'power1.out'
      });
    },
    { dependencies: [x, y] }
  );

  return <span className={styles.blob} aria-hidden="true" ref={blobRef} />;
}
