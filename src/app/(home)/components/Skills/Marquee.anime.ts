import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const useMarqueeAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = ref.current;
      if (!container) return;

      const rows = container.querySelectorAll('h3');

      rows!.forEach((row, index) => {
        const rowWidth = row.scrollWidth / 2;
        const isEven = index % 2;

        const initial = isEven ? 0 : -rowWidth;
        const animate = isEven ? -rowWidth : 0;

        gsap.set(row, { x: initial });

        gsap.to(row, {
          x: animate,
          duration: 4,
          scrollTrigger: {
            trigger: row,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 5
          }
        });
      });
    },
    { scope: ref }
  );

  return ref;
};
