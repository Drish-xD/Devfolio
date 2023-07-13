import { gsap } from '@utils/gsap';
import { RefObject, useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';

export const useAboutAnime = (): RefObject<HTMLDivElement> => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = aboutRef.current;

    if (!container) return;

    const textContent = new SplitType(container.querySelectorAll('p:not(:last-of-type)')!, {
      types: 'lines',
      tagName: 'span'
    });
    const ctx = gsap.context(() => {
      gsap
        .timeline({ paused: true })
        .to(container.querySelector('h3'), {
          backgroundPositionX: 0,
          scrollTrigger: {
            trigger: container.querySelector('h3'),
            scrub: true
          }
        })
        .to(textContent.lines, {
          duration: 10,
          backgroundPositionX: 0,
          stagger: 5,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: textContent.lines,
            scrub: 2,
            start: 'top center+=20%',
            end: 'bottom top-=20%'
          }
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return aboutRef;
};
