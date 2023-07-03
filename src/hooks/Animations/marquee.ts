import { gsap } from '@lib/gsap';
import { RefObject, useLayoutEffect, useRef } from 'react';

const Marquee = (skills: string[][]): RefObject<HTMLHeadingElement[]> => {
  const rowRefs = useRef<HTMLHeadingElement[]>([]);

  useLayoutEffect(() => {
    const rows = rowRefs.current;

    if (!rows) return;

    const ctx = gsap.context(() => {
      rows.forEach((row, index) => {
        if (row) {
          const h3Width = row.querySelector('h3')!.clientWidth;
          const initial = index % 2 === 0 ? 0 : -h3Width;
          const animate = index % 2 === 0 ? -h3Width : 0;
          gsap.fromTo(
            row,
            {
              x: initial
            },
            {
              x: animate,
              duration: 4,
              scrollTrigger: {
                trigger: row,
                start: 'top bottom',
                scrub: 10
              }
            }
          );
        }
      });

      return () => ctx.kill();
    }, rowRefs);
  }, [skills]);

  return rowRefs;
};

export default Marquee;
