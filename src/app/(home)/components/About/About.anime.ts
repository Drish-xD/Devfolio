import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { Power4, gsap } from 'gsap';
import SplitType from 'split-type';

export const useAboutAnimation = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = aboutRef.current;

      if (!container) return;

      const titleContent = new SplitType(container.querySelectorAll('h3')!, {
        types: 'chars,words'
      });

      const textContent = new SplitType(container.querySelectorAll('p')!, {
        types: 'chars,words'
      });

      gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            trigger: container,
            scrub: true,
            start: 'top 80%',
            end: 'bottom 20%'
          },
          ease: Power4.easeOut
        })
        .from(titleContent.chars, {
          opacity: 0.25,
          duration: 10,
          stagger: 5
        })
        .from(textContent.chars, {
          opacity: 0.25,
          duration: 10,
          stagger: 5
        });
    },
    { scope: aboutRef }
  );

  return aboutRef;
};
