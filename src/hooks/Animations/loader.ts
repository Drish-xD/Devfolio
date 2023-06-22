import { gsap } from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const LoaderAnime = (): React.RefObject<HTMLElement> => {
  const loader_tl = gsap.timeline();
  const loaderRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Wave Letter Animation
      loader_tl
        .to('.grid', {
          autoAlpha: 1
        })
        .from('.grid span', {
          opacity: 1,
          duration: 0.75,
          scale: 0.001,
          rotate: 10,
          yPercent: 40,
          ease: 'power1.inOut',
          delay: 0.5,
          stagger: {
            amount: 2,
            from: 'end',
            grid: [7, 7],
            yoyo: true,
            repeat: 3
          }
        })
        // Loader FadeOut Animation
        .to(loaderRef.current, {
          autoAlpha: 0,
          ease: 'none',
          delay: -1.2,
          duration: 0.5
        });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return loaderRef;
};

export default LoaderAnime;
