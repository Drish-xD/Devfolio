import { useRef } from 'react';

import { gsap, useGSAP } from '@/utils/gsap';

export const useTitleAnimation = () => {
  const titleRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sectionTitle = titleRef.current;

      if (!sectionTitle) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionTitle,
            scrub: 2,
            start: 'top 90%',
            end: 'bottom 40%'
          },
          ease: 'power3.out'
        })
        .duration(1)
        .from('span', {
          yPercent: 100,
          stagger: 0.1
        })
        .from('sub', {
          yPercent: 160
        });
    },
    { scope: titleRef }
  );

  return titleRef;
};
