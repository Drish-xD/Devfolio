import { gsap } from '@utils/gsap';
import { RefObject, useEffect, useRef } from 'react';

export const useTitleAnime = (isScrollTrigger: boolean): RefObject<HTMLDivElement> => {
  const sectionHeaders = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const secHeader = sectionHeaders.current;
    // Animation
    if (!secHeader) return;
    const ctx = gsap.context(() => {
      const titleTl = gsap
        .timeline({
          scrollTrigger: {
            trigger: secHeader,
            scrub: 2,
            end: 'bottom center-=10%'
          },
          ease: 'power3.out'
        })
        .from(secHeader.querySelectorAll('h2'), {
          yPercent: 100,
          duration: 1,
          stagger: 0.1
        });

      if (isScrollTrigger) {
        titleTl.from(
          secHeader.querySelectorAll('span'),
          {
            scale: 0,
            duration: 1,
            stagger: 0.1,
            delay: 0.3
          },
          0
        );
        titleTl.scrollTrigger?.enable();
      } else {
        titleTl.scrollTrigger?.disable();
        titleTl.play();
      }
    });

    return () => ctx.revert();
  }, []);

  return sectionHeaders;
};
