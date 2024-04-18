import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const useToastAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP({ scope: ref, dependencies: [ref] });

  if (!ref.current) return { ref };

  const toastAnime = contextSafe(() => {
    const toastTween = gsap
      .fromTo(
        ref.current!,
        {
          opacity: 0,
          yPercent: 100
        },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          delay: 1
        }
      )
      .pause();

    return toastTween;
  });

  const tween = toastAnime();

  const hideToast = () => tween.reverse();
  const showToast = () => tween.play();

  return { ref, tween, hideToast, showToast };
};
