import { gsap } from '@utils/gsap';
import { RefObject, useEffect, useRef } from 'react';

export const useTitleAnime = (): RefObject<HTMLDivElement> => {
  const sectionHeaders = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const secHeader = sectionHeaders.current;
    // Animation
    if (!secHeader) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: secHeader,
            scrub: true
          }
        })
        .from(secHeader.querySelectorAll('h2'), {
          y: '100%',
          ease: 'power3.out',
          duration: 1,
          stagger: 0.1
        })
        .from(
          secHeader.querySelectorAll('span'),
          {
            scale: 0,
            ease: 'power3.out',
            duration: 1,
            stagger: 0.1,
            delay: 0.3
          },
          0
        );
    });

    return () => ctx.revert();
  }, []);

  return sectionHeaders;
};
