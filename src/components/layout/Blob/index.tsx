'use client';

import { memo, useRef } from 'react';

import { useMousePosition } from '@/hooks/useMousePosition';
import { gsap, useGSAP } from '@/utils/gsap';

import styles from './Blob.module.scss';

const Blob = () => {
  const { x, y } = useMousePosition();
  const blobRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(blobRef.current, {
        rotation: 360,
        scaleX: 1.5,
        scaleY: 1,
        duration: 20,
        repeat: -1,
        yoyo: true
      });
    },
    { scope: blobRef }
  );

  useGSAP(
    () => {
      gsap.to(blobRef.current, {
        x,
        y,
        duration: 0.8,
        ease: 'power1'
      });
    },
    { dependencies: [x, y], scope: blobRef }
  );

  return <span className={styles.blob} aria-hidden='true' ref={blobRef} />;
};

const Noise = memo(function Noise() {
  return <span className={styles.noise} aria-hidden='true' />;
});

export { Blob, Noise };
