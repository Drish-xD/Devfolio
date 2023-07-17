import { gsap } from '@utils/gsap';
import { RefObject, useLayoutEffect, useRef, useState } from 'react';

export const useLoaderAnime = (): [RefObject<HTMLElement>, boolean] => {
  const loader_tl = gsap.timeline();
  const loaderRef = useRef<HTMLElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState<boolean>(true);

  useLayoutEffect(() => {
    const item = sessionStorage.getItem('shouldAnimateLoader');

    if (item === 'false') {
      setShouldAnimate(false);
      return;
    }

    let ctx = gsap.context(() => {
      // Wave Letter Animation
      loader_tl
        .to('.grid', {
          autoAlpha: 1
        })
        .from(
          '.grid span',
          {
            opacity: 1,
            duration: 0.75,
            scale: 0.001,
            rotate: 10,
            yPercent: matchMedia('(max-width: 1024px)').matches ? 50 : 100,
            ease: 'power1.inOut',
            stagger: {
              amount: 2,
              from: 'end',
              grid: [7, 7],
              yoyo: true,
              repeat: 3
            }
          },
          0
        )
        // Loader FadeOut Animation
        .to(loaderRef.current, {
          autoAlpha: 0,
          ease: 'none',
          delay: -1,
          duration: 0.5,
          onComplete: () => {
            setTimeout(() => {
              sessionStorage.setItem('shouldAnimateLoader', 'false');
              setShouldAnimate(false);
            }, 500);
          }
        });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return [loaderRef, shouldAnimate];
};
