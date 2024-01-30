import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { Expo, gsap } from 'gsap';
import SplitType from 'split-type';

export const useAboutAnimation = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = aboutRef.current;

      if (!container) return;

      const titleContent = new SplitType(container.querySelectorAll('h3')!, {
        types: 'words'
      });

      const textContent = new SplitType(container.querySelectorAll('p')!, {
        types: 'words'
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
          ease: Expo.easeInOut
        })
        .from(titleContent.words, {
          opacity: 0.25,
          duration: 5,
          stagger: 5
        })
        .from(textContent.words, {
          opacity: 0.25,
          duration: 5,
          stagger: 5
        });
    },
    { scope: aboutRef }
  );

  return aboutRef;
};
