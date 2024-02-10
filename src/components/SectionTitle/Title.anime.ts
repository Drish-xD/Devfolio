import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export const useTitleAnimation = (isScrollTrigger: boolean) => {
  const titleRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const sectionTitle = titleRef.current;

      if (!sectionTitle) return;

      const titleTl = gsap
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
        });

      if (isScrollTrigger) {
        titleTl.from('sub', {
          yPercent: 160
        });
        titleTl.scrollTrigger?.enable();
      } else {
        titleTl.scrollTrigger?.disable();
        titleTl.play();
      }
    },
    { scope: titleRef }
  );

  return titleRef;
};
