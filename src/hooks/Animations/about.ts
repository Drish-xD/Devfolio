import { gsap } from '@lib/gsap';
import { useLayoutEffect, useRef } from 'react';
import SplitType from 'split-type';

export default function AboutAnime() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = aboutRef.current;

    if (!container) return;

    const textContent = new SplitType(container.querySelector('p')!, {
      types: 'lines',
      tagName: 'span'
    });
    const ctx = gsap.context(() => {
      gsap
        .timeline({ paused: true })
        .to(container.querySelector('h3'), {
          duration: 1,
          backgroundPositionX: 0,
          scrollTrigger: {
            trigger: container.querySelector('h3'),
            scrub: 1,
            start: 'top center+=20%',
            end: 'bottom top'
          }
        })
        .to(textContent.lines, {
          duration: 5,
          backgroundPositionX: 0,
          stagger: 1,
          scrollTrigger: {
            trigger: textContent.lines,
            scrub: 2,
            start: 'top center+=20%',
            end: 'bottom top'
          }
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return aboutRef;
}
